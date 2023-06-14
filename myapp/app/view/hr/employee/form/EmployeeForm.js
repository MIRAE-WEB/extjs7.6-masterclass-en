
Ext.define('MyApp.view.hr.employee.form.EmployeeForm',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.employee-form',
    requires: [
        'MyApp.view.hr.employee.form.EmployeeFormController'
    ],

    controller: 'employee-form',


    html: 'Hello, World!!'
});
