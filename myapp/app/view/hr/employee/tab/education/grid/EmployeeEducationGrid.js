
Ext.define('MyApp.view.hr.employee.tab.education.grid.EmployeeEducationGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.employee-education-grid',
    requires: [
        'Miraeweb.utils.Format',
        'MyApp.view.hr.employee.tab.education.grid.EmployeeEducationGridController'
    ],
    bind : '{employeeEducationStore}',
    controller: 'employee-education-grid',
    columns : [
        {text : 'Institution', dataIndex:'institution' ,width : 130},
        {text : 'Major', dataIndex:'major' ,width : 130},
        {text : 'Degree', dataIndex:'degreeCode' ,width : 100,
            renderer : Miraeweb.Format.codeRenderer('DEGREE_CODE')
        },
        {text : 'Graduation', dataIndex:'graduationCode' ,width : 100,
            renderer : Miraeweb.Format.codeRenderer('GRADUATION_CODE')
        },
        {text : 'Year of graduation', dataIndex:'yearOfGraduation' ,width : 150},
    ]
});
