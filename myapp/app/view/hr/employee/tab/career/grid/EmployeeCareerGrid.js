
Ext.define('MyApp.view.hr.employee.tab.career.grid.EmployeeCareerGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.employee-career-grid',
    requires: [
        'MyApp.view.hr.employee.tab.career.grid.EmployeeCareerGridController',

    ],
    bind : '{employeeCareerStore}',
    controller: 'employee-career-grid',
    columns : [
        {text : 'Company Name', dataIndex:'company',width : 130},
        {text : 'Employee Status', dataIndex:'employeeStateCode',width : 130},
        {text : 'Rank', dataIndex:'rank',width : 130},
        {text : 'StartDate', dataIndex:'careerStartDate',width : 100},
        {text : 'EndDate', dataIndex:'careerEndDate',width : 100},
    ]
});
