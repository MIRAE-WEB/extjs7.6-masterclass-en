
Ext.define('MyApp.view.hr.employee.grid.EmployeeGrid',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.employee-grid',
    requires: [
        'MyApp.view.hr.employee.grid.EmployeeGridController'
    ],

    controller: 'employee-grid',


    html: 'Hello, World!!'
});
