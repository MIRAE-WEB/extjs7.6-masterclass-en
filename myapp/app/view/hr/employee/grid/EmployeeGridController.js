Ext.define('MyApp.view.hr.employee.grid.EmployeeGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-grid',

    onBtnAdd: function(button){


        var popup= Ext.widget('employee-popup');
        popup.show();
    }
});
