
Ext.define('MyApp.view.hr.employee.tab.education.grid.EmployeeEducationGrid',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.employee-education-grid',
    requires: [
        'MyApp.view.hr.employee.tab.education.grid.EmployeeEducationGridController'
    ],

    controller: 'employee-education-grid',


    html: 'Hello, World!!'
});
