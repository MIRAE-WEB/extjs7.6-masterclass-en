
Ext.define('MyApp.view.system.menu.MenuManagement',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.menu-management',
    requires: [
        'MyApp.view.system.menu.MenuManagementController',

    ],

    controller: 'menu-management',


    html: 'Hello, World!!'
});
