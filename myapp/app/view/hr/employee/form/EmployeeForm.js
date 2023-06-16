
Ext.define('MyApp.view.hr.employee.form.EmployeeForm',{
    extend: 'Ext.form.Panel',
    alias : 'widget.employee-form',
    requires: [
        'Ext.button.Button',
        'Ext.data.Store',
        'Ext.form.FieldContainer',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Radio',
        'Ext.form.field.Text',
        'Ext.layout.container.HBox',
        'Ext.toolbar.Fill',
        'MyApp.view.hr.employee.form.EmployeeFormController'
    ],

    controller: 'employee-form',
    layout :'column',
    bodyPadding : '10 0 10 20',
    defaults : {
        columnWidth : .333,
        labelWidth : 60,
        margin : '0 20 10 0',

    },
    tbar :[{
        xtype : 'tbfill'
    },{
        xtype : 'button',
        text : 'Save',
        itemId : 'btnSave',
        handler : 'onBtnSave'
    }],
    items : [{
        xtype : 'textfield',
        allowBlank : false,
        name : 'userId',
        blankText : 'ID is required',
        fieldLabel : 'ID'
    },{
        xtype : 'textfield',
        fieldLabel : 'Name',
        name : 'userName',
    },{
        xtype : 'fieldcontainer',
        fieldLabel : 'Gender',
        layout : {
            type : 'hbox',
            align : 'stretch'
        },
        items : [{
            xtype : 'radio',
            flex : 1,
            name : 'genderCode',
            boxLabel : 'Male',
            inputValue : 'MALE'
        },{
            xtype : 'radio',
            flex : 1,
            name : 'genderCode',
            boxLabel : 'Female',
            inputValue : 'FEMALE'
        }]
    },{
        xtype : 'datefield',
        format : 'Y.m.d',
        name : 'birthDate',
        altFormats: 'Y.m.d|Ymd|Y-m-d',
        submitFormat : 'Ymd',
        fieldLabel : 'BirthDate'
    },{
        xtype : 'textfield',
        name : 'mobile',
        fieldLabel : 'Mobile'
    },{
        xtype : 'textfield',
        fieldLabel : 'Email',
        name : 'email',
        vtype : 'email'
    },{
        xtype : 'code-combo',
        fieldLabel : 'Dept.',
        name : 'deptCode',
        codeGroup : 'DEPT_CODE'
    },{
        xtype : 'code-combo',
        fieldLabel : 'Rank',
        name : 'rankCode',
        codeGroup : 'RANK_CODE'
    }],
    listeners : {
        'reset-mode' : 'onResetMode',
        'update-mode' : 'onUpdateMode'
    }
});
