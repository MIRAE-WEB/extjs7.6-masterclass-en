Ext.define('MyApp.view.hr.employee.form.EmployeeFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-form',


    onBtnSave : function(button){
        var thisView = this.getView();
        var globalContent = this.getView().up('global-content');

        var forms = this.getView().query('form');

        var data = {};
        for(var form of forms){

            if(!form.getForm().isValid()){
                Ext.Msg.alert('Error','Field Error');
                return false;
            }

            data =Ext.apply(data,form.getForm().getValues());
        }

        Ext.Msg.confirm('Info', 'Save Data?',function(btn){
            if(btn=='yes'){

                Ext.Ajax.request({
                    url : 'resources/data/users.json',
                    method : 'POST',
                    params : data,
                    success : function(){

                        Ext.Msg.alert('Info','Save Success',function(btn){
                            if(btn=='ok'){

                                var employeeForm = globalContent.down('employee-form');
                                var employeeDetailForm = globalContent.down('employee-detail-form');

                                employeeForm.getForm().reset();
                                employeeDetailForm.getForm().reset();

                                var employeeCareerGrid = globalContent.down('employee-career-grid');
                                var employeeEducationGrid = globalContent.down('employee-education-grid');
                                employeeCareerGrid.getStore().removeAll();
                                employeeEducationGrid.getStore().removeAll();
                                globalContent.down('employee-grid').getStore().load();
                            }
                        });

                    }
                });
            }

        });
    }
});
