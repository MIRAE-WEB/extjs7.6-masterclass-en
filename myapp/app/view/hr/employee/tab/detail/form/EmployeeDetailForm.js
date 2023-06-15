
Ext.define('MyApp.view.hr.employee.tab.detail.form.EmployeeDetailForm',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.employee-detail-form',
    requires: [
        'Ext.button.Button',
        'Ext.form.FieldSet',
        'Ext.form.FieldSet',
        'Ext.form.field.Text',
        'Ext.layout.container.Column',
        'Ext.layout.container.VBox',
        'MyApp.view.hr.employee.tab.detail.form.EmployeeDetailFormController'
    ],

    controller: 'employee-detail-form',
    layout : {
        type : 'vbox',
        align : 'stretch'
    },
    bodyPadding : 20,
    items : [{
        xtype : 'fieldset',
        title : 'Banking Details',
        layout : 'column',
        bodyPadding : '0 0 0 20',
        defaults : {
            columnWidth : .333,
            labelWidth : 60,
            margin : '0 20 0 0',
        },
        items : [{
            xtype : 'code-combo',
            fieldLabel : 'Bank',
            codeGroup : 'BANK_CODE'
        },{
            xtype : 'textfield',
            margin : '-5 20 0 0',
            fieldLabel : 'Account<br>No.'
        },{
            xtype : 'textfield',
            margin : '-5 20 0 0',
            fieldLabel : 'Account<br>Name'
        }]
    },{
        xtype : 'fieldset',
        title : 'Address',
        layout : 'column',
        bodyPadding : '0 0 10 20',
        defaults : {
            columnWidth : .333,
            labelWidth : 60,
            margin : '0 20 10 0',
        },
        items : [{
            xtype : 'fieldcontainer',
            layout : {
                type : 'hbox',
                align : 'stretch'
            },
            items : [{
                xtype : 'textfield',
                flex : 1,
                fieldLabel : 'Zipcode'
            },{
                xtype : 'button',
                text : 'Search'
            }]

        },{
            xtype : 'textfield',
            fieldLabel : 'Adress'
        },{
            xtype : 'textfield'
        }]
    }]
});
