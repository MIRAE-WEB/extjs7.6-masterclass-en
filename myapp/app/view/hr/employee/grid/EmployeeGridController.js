Ext.define('MyApp.view.hr.employee.grid.EmployeeGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-grid',

    onBtnSearch : function(button){

        var globalContent = this.getView().up('global-content');
        // globalContent.down('employee-grid');

        var employeeForm = globalContent.down('employee-form');
        var employeeDetailForm = globalContent.down('employee-detail-form');

        employeeForm.getForm().reset();
        employeeDetailForm.getForm().reset();

        var employeeCareerGrid = globalContent.down('employee-career-grid');
        var employeeEducationGrid = globalContent.down('employee-education-grid');
        employeeCareerGrid.getStore().removeAll();
        employeeEducationGrid.getStore().removeAll();

        this.getView().getStore().load();
    },
    onBtnAdd: function(button){

        var me = this;
        var popup = Ext.ComponentQuery.query('employee-popup')[0];
        if(!popup){
            popup= Ext.widget('employee-popup',{
                callbackFunc : me.onBtnSearch,
                callbackScope : me,
            });
        }
        popup.show();
    },
    onBtnDelete: function(button){

        var me =this;
        var rec = this.getView().getSelection()[0];

        if(!rec){
            Ext.Msg.alert('Error','No Selected Data');
            return false;
        }

        Ext.Msg.confirm('Info','Delete?',function(btn){
           if(btn=='yes'){

               Ext.Ajax.request({
                   url : 'test',
                   method : 'DELETE',
                   success: function(){
                       me.onBtnSearch();
                   }
               })
           }
        });


    },

    onSelect: function (rowmodel, record, index) {

        var globalContent = this.getView().up('global-content');
        var employeeForm = globalContent.down('employee-form');
        var employeeDetailForm = globalContent.down('employee-detail-form');

        employeeForm.getForm().loadRecord(record);
        employeeDetailForm.getForm().loadRecord(record);

        var userIdx = record.get('userIdx');

        var employeeCareerGrid = globalContent.down('employee-career-grid');
        employeeCareerGrid.getStore().removeAll();
        Ext.Ajax.request({
            url : 'resources/data/users/'+userIdx+'/careers.json',
            method : 'GET',
            success : function(response){
                var resObj = Ext.decode(response.responseText);

                employeeCareerGrid.getStore().loadRawData(resObj.careers);
            }
        })


        var employeeEducationGrid = globalContent.down('employee-education-grid');
        employeeEducationGrid.getStore().removeAll();
        Ext.Ajax.request({
            url : 'resources/data/users/'+userIdx+'/educations.json',
            method : 'GET',
            success : function(response){
                var resObj = Ext.decode(response.responseText);

                employeeEducationGrid.getStore().loadRawData(resObj.educations);
            }
        })

    }
});
