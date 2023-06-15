
Ext.define('MyApp.view.popup.hr.employee.EmployeePopup',{
    extend: 'Ext.window.Window',
    alias : 'widget.employee-popup',
    requires: [
        'Ext.button.Button',
        'Ext.layout.container.VBox',
        'Ext.toolbar.Fill',
        'MyApp.view.popup.hr.employee.EmployeePopupController'
    ],

    width : 900,
    modal : true,
    title : 'Add Employee',
    controller: 'employee-popup',
    layout : {
        type : 'vbox',
        align : 'stretch'
    },
    items : [{

        xtype : 'employee-form'
    },{
        xtype : 'employee-detail-form'
    }],
    bbar : [{
        xtype : 'tbfill'
    },{
        xtype : 'button',
        text : 'Apply'
    },{
        xtype : 'button',
        text : 'Cancel'
    },{
        xtype : 'tbfill'
    }]
});
