
Ext.define('MyApp.view.hr.employee.tab.EmployeeTab',{
    extend: 'Ext.tab.Panel',
    alias : 'widget.employee-tab',
    requires: [
        'MyApp.view.hr.employee.tab.EmployeeTabController'
    ],
    controller: 'employee-tab',
    items : [{
        title : 'Details'
    },{
        title : 'Career'
    },{
        title : 'Education'
    }]
});
