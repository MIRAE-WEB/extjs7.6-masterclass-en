
Ext.define('MyApp.view.system.code.CodeManagement',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.code-management',
    requires: [
        'MyApp.view.system.code.CodeManagementController',

    ],

    controller: 'code-management',


    html: 'Hello, World!!'
});
