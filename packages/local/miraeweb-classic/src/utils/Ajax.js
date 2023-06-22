Ext.define('Miraeweb.utils.Ajax', {
    requires: [
        'Miraeweb.utils.Jwt'
    ],

    alternateClassName: 'Miraeweb.Ajax',
    singleton: true,

    request : function(options){
        var me =this;
        me._runAjax(options);

    },
    _runAjax : function(options){

        var accessToken = Miraeweb.Jwt.getAccessToken();

        options.headers = options.headers ||{};
        if(accessToken){
            options.headers['Authorization']='Bearer '+ accessToken;
        }
        Ext.Ajax.request(options);
    }
});