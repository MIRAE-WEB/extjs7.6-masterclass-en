
Ext.define('MyApp.view.hr.employee.EmployeeManagement',{
    extend: 'MiraewebTheme.view.global.content.GlobalContent',
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
      data : {
        userIdx : null
      },
      stores : {
          employeeStore : {
              type : 'store',
              autoLoad : true,
              proxy : {
                  type : 'ajax',
                  url : apiHost+'/users',
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
        title : 'Employee Information',
        frame : true,
        margin : '0 0 10 0'

    },{
        xtype : 'employee-tab',
        frame : true,
        flex : 1
    }],
    listeners : {
        'afterrender' : 'onResetMode',
        'search-employee' : 'onSearch',
        'reset-mode' : 'onResetMode',
        'update-mode' : 'onUpdateMode'
    }
});
