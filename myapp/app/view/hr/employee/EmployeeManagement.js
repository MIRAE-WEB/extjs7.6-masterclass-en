
Ext.define('MyApp.view.hr.employee.EmployeeManagement',{
    extend: 'MyApp.view.global.content.GlobalContent',
    alias : 'widget.employee-management',
    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.layout.container.VBox',
        'MyApp.view.hr.employee.EmployeeManagementController'
    ],

    controller: 'employee-management',
    viewModel : {
      stores : {
          employeeStore : {
              type : 'store',
              autoLoad : true,
              proxy : {
                  type : 'ajax',
                  url : 'resources/data/users.json',
                  method : 'GET',
                  reader :{
                      type : 'json',
                      rootProperty : 'users',
                  }
              }
          },
          employeeCareerStore : {

          },
          employeeEducationStore : {

          }
      }
    },
    layout : {
        type : 'vbox',
        align : 'stretch'
    },
    items : [{
        xtype : 'employee-grid',
        title : 'Employee List',
        frame : true,
        margin : '0 0 10 0',
        flex : 1
    },{
        xtype : 'employee-form',
        tbar :[{
            xtype : 'tbfill'
        },{
            xtype : 'button',
            text : 'Save'
        }],
        title : 'Employee Information',
        frame : true,
        margin : '0 0 10 0'

    },{
        xtype : 'employee-tab',
        frame : true,
        flex : 1
    }]
});
