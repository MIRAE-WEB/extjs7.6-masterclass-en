Ext.define('Miraeweb.utils.Ajax', {
    alternateClassName: 'Miraeweb.Ajax',
    singleton: true,

    defaultProxyFailure : function(response){
        var contentType = response.getResponseHeader('content-type') ||'';

    },
    defaultHttpFailure : function(response){
        var contentType = response.getResponseHeader('content-type') ||'';

        debugger;
        if(contentType.indexOf('application/json')!=-1){
            var resObj = Ext.decode(response.responseText);

            Ext.Msg.alert('['+resObj.status+']'+resObj.error,resObj.message);
            return false;
        }
    },
    request : function(options){

        var me = this;
        var confirmMsg = options.confirmMsg;

        if(!confirmMsg){
            me._runAjax(options);
            return;
        }

        Ext.Msg.confirm(confirmMsg.title,confirmMsg.message,function(btn){
            me._runAjax(options);
        });


    },
    _runAjax : function(options){

        var callbackFunc = Ext.clone(options.success);
        var scope = options.scope || this;
        options.success = function(response){

            var resObj;
            var contentType = response.getResponseHeader('content-type');

            if(Ext.isEmpty(response.responseJson) && contentType.indexOf('application/json')!=-1){
                resObj = Ext.decode(response.responseText);
            }else{
                resObj = response;
            }

            var successMsg =options.successMsg;

            if(!successMsg){
                Ext.callback(callbackFunc,scope,[resObj]);
                return;
            }

            Ext.Msg.alert(successMsg.title,successMsg.message,function(btn){
                if(btn=='ok'){
                    Ext.callback(callbackFunc,scope,[resObj]);
                }
            });
        }
        if(!options.failure){
            options.failure =Miraeweb.Ajax.defaultHttpFailure;
        }

        Ext.Ajax.request(options);
    }

});