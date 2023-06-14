
Ext.define('MyApp.view.system.code.CodeManagement',{
    extend: 'MyApp.view.global.content.GlobalContent',
    alias : 'widget.code-management',
    requires: [
        'MyApp.view.system.code.CodeManagementController',

    ],

    controller: 'code-management',


    html: 'Hello, World!!'
});
