Ext.define('MyApp.view.hr.employee.tab.career.EmployeeCareerTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-career-tab',

    requires: [
        'Miraeweb.utils.Ajax'
    ],
    onResetMode : function(){

        this.getView().down('grid').getStore().removeAll();
    },
    onUpdateMode : function(){

        var userIdx = this.getView().lookupViewModel().get('userIdx');
        var store = this.getView().down('grid').getStore();

        Miraeweb.Ajax.request({
            url : apiHost+'/users/'+userIdx+'/careers',
            method : 'GET',
            success : function(resObj){

                store.loadRawData(resObj.userCareers);
            }
        })
    }
});
