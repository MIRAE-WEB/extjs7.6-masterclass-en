
Ext.define('MyApp.view.hr.employee.tab.career.EmployeeCareerTab',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.employee-career-tab',
    requires: [
        'Ext.layout.container.Fit',
        'MyApp.view.hr.employee.tab.career.EmployeeCareerTabController'
    ],

    controller: 'employee-career-tab',
    layout : 'fit',
    items : [{
        xtype : 'employee-career-grid'
    }]
});
