
Ext.define('MyApp.view.hr.employee.EmployeeManagement',{
    extend: 'MyApp.view.global.content.GlobalContent',
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
        frame : true,
        margin : '0 0 10 0',
        flex : 1
    },{
        xtype : 'employee-form',
        title : 'Employee Form',
        frame : true,
        margin : '0 0 10 0',
        flex : 1
    },{
        xtype : 'employee-tab',
        frame : true,
        flex : 1
    }]
});
