
Ext.define('MyApp.view.hr.employee.tab.career.grid.EmployeeCareerGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.employee-career-grid',
    requires: [
        'Miraeweb.utils.Format',
        'MyApp.view.hr.employee.tab.career.grid.EmployeeCareerGridController'
    ],
    bind : '{employeeCareerStore}',
    controller: 'employee-career-grid',
    columns : [
        {text : 'Company Name', dataIndex:'company',width : 130},
        {text : 'Employee Status', dataIndex:'employeeStateCode',width : 130,
            renderer : Miraeweb.Format.codeRenderer('EMPLOYEE_STATE_CODE')
        },
        {text : 'Rank', dataIndex:'rank',width : 130},
        {text : 'StartDate', dataIndex:'careerStartDate',width : 100 ,renderer : Miraeweb.Format.dateRenderer},
        {text : 'EndDate', dataIndex:'careerEndDate',width : 100,renderer : Miraeweb.Format.dateRenderer},
    ]
});
