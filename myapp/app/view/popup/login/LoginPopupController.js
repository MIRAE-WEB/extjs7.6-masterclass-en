Ext.define('MyApp.view.popup.login.LoginPopupController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login-popup',

    requires: [
        'Miraeweb.utils.Jwt'
    ],

    onBtnLogin : function(button){


        var me = this;
        var data = this.getView().down('form').getForm().getValues();


        Miraeweb.Ajax.request({
            url : 'resources/data/login.json',
            params : {
                userId : data.userId,
                password : data.password
            },
            success : function(response){

                //Spring Backend Password Check
                if(data.password!='1234'){
                    Ext.Msg.alert('Info','Password Mismatch');
                    return;

                }


                // Generate RefreshToken
                // Save RefreshToken
                // Return AccessToken



                var resObj = Ext.decode(response.responseText);

                var accessToken =resObj.accessToken;
                Miraeweb.Jwt.setAccessToken(resObj.accessToken);
                window.location.reload();
            }

        })


    }
});
