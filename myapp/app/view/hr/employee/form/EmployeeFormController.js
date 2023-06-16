Ext.define('MyApp.view.hr.employee.form.EmployeeFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-form',

    onResetMode : function(){
        this.getView().getForm().reset();
    },
    onUpdateMode : function(){
        var userIdx = this.getView().lookupViewModel().get('userIdx');
        var employeeStore = this.getView().lookupViewModel().get('employeeStore');
        var record = employeeStore.findRecord('userIdx',userIdx);
        this.getView().getForm().loadRecord(record);
    },
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

                                globalContent.fireEvent('search-employee');
                            }
                        });

                    }
                });
            }

        });
    }
});
