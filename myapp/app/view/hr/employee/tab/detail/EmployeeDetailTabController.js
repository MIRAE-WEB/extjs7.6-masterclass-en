Ext.define('MyApp.view.hr.employee.tab.detail.EmployeeDetailTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-detail-tab',
    onResetMode : function(){
        this.getView().down('form').getForm().reset();
    },
    onUpdateMode : function(){
        var userIdx = this.getView().lookupViewModel().get('userIdx');
        var employeeStore = this.getView().lookupViewModel().get('employeeStore');
        var record = employeeStore.findRecord('userIdx',userIdx);
        this.getView().down('form').getForm().loadRecord(record);
    }

});
