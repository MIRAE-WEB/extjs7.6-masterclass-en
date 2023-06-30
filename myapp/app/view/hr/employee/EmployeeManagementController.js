Ext.define('MyApp.view.hr.employee.EmployeeManagementController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-management',
    onSearch : function(){
        var globalContent = this.getView();
        this.getView().lookupViewModel().set('userIdx',null);
        this.onResetMode();
        globalContent.down('employee-grid').getStore().load();
    },
    onResetMode : function(){

        var globalContent = this.getView();

        var fields = globalContent.query('field');

        for(var field of fields){
            field.setReadOnly(true);
        }

        globalContent.down('[itemId=btnSave]').setDisabled(true);
        globalContent.down('#btnZipcode').setDisabled(true);



        globalContent.down('employee-form').fireEvent('reset-mode');
        globalContent.down('employee-tab').fireEvent('reset-mode');


    },
    onUpdateMode : function(){
        this.onResetMode();
        var globalContent = this.getView();

        var fields = globalContent.query('field');

        for(var field of fields){
            field.setReadOnly(false);
            if(field.name=='userId'){
                field.setReadOnly(true);
            }
        }

        globalContent.down('[itemId=btnSave]').setDisabled(false);
        globalContent.down('#btnZipcode').setDisabled(false);



        globalContent.down('employee-form').fireEvent('update-mode');
        globalContent.down('employee-tab').fireEvent('update-mode');
    }
});
