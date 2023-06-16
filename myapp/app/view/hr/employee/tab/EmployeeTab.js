
Ext.define('MyApp.view.hr.employee.tab.EmployeeTab',{
    extend: 'Ext.tab.Panel',
    alias : 'widget.employee-tab',
    requires: [
        'MyApp.view.hr.employee.tab.EmployeeTabController'
    ],
    deferredRender :false,
    controller: 'employee-tab',
    items : [{
        xtype : 'employee-detail-tab',
        title : 'Details'
    },{
        xtype : 'employee-career-tab',
        title : 'Career'
    },{
        xtype : 'employee-education-tab',
        title : 'Education'
    }],
    listeners : {
        'reset-mode' : 'onResetMode',
        'update-mode' : 'onUpdateMode'
    }

});
