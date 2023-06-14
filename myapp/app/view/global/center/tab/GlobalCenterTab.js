
Ext.define('MyApp.view.global.center.tab.GlobalCenterTab',{
    extend: 'Ext.tab.Panel',
    alias : 'widget.global-center-tab',

    items :[{
        xtype : 'employee-management',
        title : 'Employees'
    },{
        xtype : 'menu-management',
        title : 'Menu'
    },{
        xtype : 'code-management',
        title : 'Code'
    }]
});
