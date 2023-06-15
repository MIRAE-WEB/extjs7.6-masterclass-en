
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
    closeAction: 'hide',
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
        text : 'Apply',
        handler : 'onBtnApply'
    },{
        xtype : 'button',
        text : 'Cancel',
        handler : 'onBtnCancel'
    },{
        xtype : 'tbfill'
    }],
    listeners : {
        afterrender : 'onAfterRender',
        show : 'onShow'
    }
});
