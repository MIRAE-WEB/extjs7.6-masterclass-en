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
    controller : [
        'Miraeweb.controller.MenuController'
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
        Ext.getStore('Navigation').dataLoad();
        Ext.widget('global-main');
    }
});
