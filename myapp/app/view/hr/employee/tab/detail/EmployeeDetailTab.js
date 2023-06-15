
Ext.define('MyApp.view.hr.employee.tab.detail.EmployeeDetailTab',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.employee-detail-tab',
    requires: [
        'Ext.layout.container.Fit',
        'MyApp.view.hr.employee.tab.detail.EmployeeDetailTabController'
    ],

    controller: 'employee-detail-tab',
    layout : 'fit',
    items : [{
        xtype : 'employee-detail-form'
    }]
});
