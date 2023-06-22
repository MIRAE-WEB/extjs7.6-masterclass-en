/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Ext.app.Application',

    name: 'MyApp',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    controllers : [
        'MiraewebTheme.controller.MenuController'
    ],
    stores : [
        'MiraewebTheme.store.Navigation'
    ],

    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],

    launch : function(){


        var login = Miraeweb.Jwt.getAccessToken();

        if(login==null){
            location.hash='#login';
            Ext.widget('login-popup').show();
        }else{


            if(!location.hash){
                location.hash='#employee-management';
            }
            Ext.getStore('Navigation').dataLoad();
            Ext.widget('global-main');

        }
    }
});
