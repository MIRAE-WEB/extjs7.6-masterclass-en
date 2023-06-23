Ext.define('Miraeweb.utils.Jwt',{
    requires: [
        'Ext.util.Base64',
        'Ext.util.Cookies'
    ],

    alternateClassName : 'Miraeweb.Jwt',
    singleton : true,

    getAccessToken :function(){
        return Ext.util.Cookies.get('miraeweb-access-token');
    },
    setAccessToken : function(accessToken){

        Ext.util.Cookies.set('miraeweb-access-token',accessToken);

    },
    getUserData: function(){
        var accessToken = Miraeweb.Jwt.getAccessToken();

        var noPadBase64 =accessToken.split('.')[1];
        var addPad ='';
        var dataCount = noPadBase64.length%4;

        if(dataCount==2){
            addPad ='==';
        }else if(dataCount==3){
            addPad ='=';
        }

        var base64Data = noPadBase64 + addPad;
        var decodeData = Ext.util.Base64.decode(base64Data);
        return Ext.decode(decodeData);


    },
    removeCookie : function(){
        Ext.util.Cookies.clear('miraeweb-access-token');
    }

});