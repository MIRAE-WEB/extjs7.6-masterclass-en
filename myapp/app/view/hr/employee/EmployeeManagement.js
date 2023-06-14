
Ext.define('MyApp.view.hr.employee.EmployeeManagement',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.employee-management',
    requires: [
        'Ext.layout.container.VBox',
        'MyApp.view.hr.employee.EmployeeManagementController'
    ],

    controller: 'employee-management',
    layout : {
        type : 'vbox',
        align : 'stretch'
    },
    items : [{
        xtype : 'employee-grid',
        title : 'Employee List',
        flex : 1
    },{
        xtype : 'employee-form',
        title : 'Employee Form',
        flex : 1
    },{
        xtype : 'employee-tab',
        flex : 1
    }]
});
