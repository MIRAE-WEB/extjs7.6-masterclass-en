Ext.define('Miraeweb.utils.Jwt',{
    requires: [
        'Ext.util.Base64',
        'Ext.util.Cookies'
    ],

    alternateClassName : 'Miraeweb.Jwt',
    singleton : true,
    backendGenerateAccessToken : function(){

        var accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWR4IjoxLCJ1c2VySWQiOiJ0ZXN0MSIsInVzZXJOYW1lIjoiRGFuaSBMb3dlcnkiLCJkZXB0Q29kZSI6IkExMDAwIiwicmFua0NvZGUiOiJSMzAwIn0.1fSp2PoEv9-0Qhs-lI0X2IEajH_rsStiTxrw2Vhx0O8';
        var header =accessToken.split('.')[0];
        var payload ={"userIdx":1,"userId":"test1","userName":"Dani Lowery","deptCode":"A1000","rankCode":"R300"};

        var nowTime = Math.floor(new Date()/1000);
        payload.iss = nowTime;
        payload.exp = nowTime+30;
        var base64= Ext.util.Base64.encode(payload);
        var signature = accessToken.split('.')[3];
        return header+'.'+base64+'.'+signature;
    },

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