Ext.define('MyApp.view.popup.hr.employee.EmployeePopupController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-popup',

    onAfterRender : function(){
        this.getView().down('toolbar[dock=top]').hide();
    },
    onShow : function(){

        var forms = this.getView().query('form');

        for(var form of forms){
            form.getForm().reset();
        }
    },

    onBtnApply : function(button){

        var thisView = this.getView();
        var forms = this.getView().query('form');

        var data = {};
        for(var form of forms){

            if(!form.getForm().isValid()){
                Ext.Msg.alert('Error','Field Error');
                return false;
            }

            data =Ext.apply(data,form.getForm().getValues());
        }

        Ext.Msg.confirm('Info', 'Save Data?',function(btn){
            if(btn=='yes'){

                Miraeweb.Ajax.request({
                    url : 'resources/data/users.json',
                    method : 'POST',
                    params : data,
                    success : function(){

                        Ext.Msg.alert('Info','Save Success',function(btn){
                            if(btn=='ok'){
                                thisView.hide();
                                Ext.callback(thisView.callbackFunc,thisView.callbackScope);
                            }
                        })

                    }
                });
            }

        });





    },
    onBtnCancel : function(button){

        this.getView().hide();
    }
});
