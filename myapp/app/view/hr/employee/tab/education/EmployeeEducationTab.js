
Ext.define('MyApp.view.hr.employee.tab.education.EmployeeEducationTab',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.employee-education-tab',
    requires: [
        'MyApp.view.hr.employee.tab.education.EmployeeEducationTabController'
    ],

    controller: 'employee-education-tab',
    layout : 'fit',
    items : [{
        xtype : 'employee-education-grid'
    }],
    listeners : {
        'reset-mode' : 'onResetMode',
        'update-mode' : 'onUpdateMode'
    }
});
