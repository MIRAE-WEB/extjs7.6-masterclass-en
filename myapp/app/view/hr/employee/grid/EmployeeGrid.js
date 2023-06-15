
Ext.define('MyApp.view.hr.employee.grid.EmployeeGrid',{
    extend: 'Ext.grid.Panel',
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
    }],
    bind : '{employeeStore}',
    columns : [
        {text : 'ID', dataIndex:'userId'},
        {text : 'Name', dataIndex:'userName'},
        {text : 'Birth Date', dataIndex:'birthDate',
            renderer: function (value){
                return value.substr(0,4)+'-'+value.substr(4,2)+'-'+value.substr(6);
            }
        },
        {text : 'Gender', dataIndex:'genderCode',
            renderer: function (value){
                if(value=='MALE'){
                    return 'Male'
                }

                return 'Female';
            }

        },
        {text : 'Email', dataIndex:'email',flex : 1},

    ]
});
