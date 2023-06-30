Ext.define('MyApp.view.hr.employee.tab.education.EmployeeEducationTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-education-tab',
    onResetMode : function(){
        this.getView().down('grid').getStore().removeAll();
    },
    onUpdateMode : function(){
        var userIdx = this.getView().lookupViewModel().get('userIdx');
        var store = this.getView().down('grid').getStore();

        Ext.Ajax.request({
            url : apiHost+'/users/'+userIdx+'/educations',
            method : 'GET',
            success : function(response){
                var resObj = Ext.decode(response.responseText);

                store.loadRawData(resObj.userEducations);
            }
        })
    }
});
