
Ext.define('MyApp.view.hr.employee.grid.EmployeeGrid',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.employee-grid',
    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.toolbar.Fill',
        'MyApp.view.hr.employee.grid.EmployeeGridController'
    ],

    controller: 'employee-grid',

    tbar : [{
        xtype : 'textfield',
        fieldLabel : 'Filter'
    },{
        xtype : 'button',
        text : 'Search'
    },{
        xtype : 'tbfill'
    },{
        xtype : 'button',
        text : 'Add',
        handler : 'onBtnAdd'
    },{
        xtype : 'button',
        text : 'Delete'
    }]
});
