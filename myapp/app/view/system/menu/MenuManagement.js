
Ext.define('MyApp.view.system.menu.MenuManagement',{
    extend: 'MiraewebTheme.view.global.content.GlobalContent',
    alias : 'widget.menu-management',
    requires: [
        'MyApp.view.system.menu.MenuManagementController',

    ],

    controller: 'menu-management',


    html: 'Hello, World!!'
});
