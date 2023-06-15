
Ext.define('MyApp.view.hr.employee.tab.career.grid.EmployeeCareerGrid',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.employee-career-grid',
    requires: [
        'MyApp.view.hr.employee.tab.career.grid.EmployeeCareerGridController',

    ],

    controller: 'employee-career-grid',
    html: 'Hello, World!!'
});
