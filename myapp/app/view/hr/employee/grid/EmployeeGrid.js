
Ext.define('MyApp.view.hr.employee.grid.EmployeeGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.employee-grid',
    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.toolbar.Fill',
        'Miraeweb.utils.Format',
        'MyApp.view.hr.employee.grid.EmployeeGridController'
    ],

    controller: 'employee-grid',

    tbar : [{
        xtype : 'textfield',
        name : 'searchTxt',
        fieldLabel : 'Filter'
    },{
        xtype : 'button',
        text : 'Search',
        handler : 'onBtnSearch'
    },{
        xtype : 'tbfill'
    },{
        xtype : 'button',
        text : 'Add',
        handler : 'onBtnAdd'
    },{
        xtype : 'button',
        text : 'Delete',
        handler : 'onBtnDelete'
    }],
    bind : '{employeeStore}',
    columns : [
        {text : 'ID', dataIndex:'userId'},
        {text : 'Name', dataIndex:'userName'},
        {text : 'Birth Date', dataIndex:'birthDate',
            renderer: Miraeweb.Format.dateRenderer
        },
        {text : 'Gender', dataIndex:'genderCode',
            renderer: Miraeweb.Format.codeRenderer('GENDER_CODE')

        },
        {text : 'Email', dataIndex:'email',flex : 1},

    ],
    listeners : {
        select : 'onSelect'
    }
});
