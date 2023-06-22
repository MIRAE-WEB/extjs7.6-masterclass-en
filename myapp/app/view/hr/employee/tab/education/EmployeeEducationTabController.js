Ext.define('MyApp.view.hr.employee.tab.education.EmployeeEducationTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-education-tab',
    onResetMode : function(){
        this.getView().down('grid').getStore().removeAll();
    },
    onUpdateMode : function(){
        var userIdx = this.getView().lookupViewModel().get('userIdx');
        var store = this.getView().down('grid').getStore();

        Miraeweb.Ajax.request({
            url : 'resources/data/users/'+userIdx+'/educations.json',
            method : 'GET',
            success : function(response){
                var resObj = Ext.decode(response.responseText);

                store.loadRawData(resObj.educations);
            }
        })
    }
});
