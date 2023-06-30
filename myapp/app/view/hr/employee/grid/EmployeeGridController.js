Ext.define('MyApp.view.hr.employee.grid.EmployeeGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-grid',
    onBtnSearch : function(button){

        var globalContent = this.getView().up('global-content');
        globalContent.fireEvent('search-employee');

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
        var userIdx = this.getView().lookupViewModel().get('userIdx');

        if(!userIdx){
            Ext.Msg.alert('Error','No Selected Data');
            return false;
        }

        Miraeweb.Ajax.request({
            url : apiHost+'/users/'+userIdx,
            method : 'DELETE',
            confirmMsg : {
                title : 'Info',
                message : 'Delete?'
            },
            successMsg : {
                title : 'Info',
                message : 'Success Delete'
            },
            success: function(){
                me.onBtnSearch();
            }
        });
    },

    onSelect: function (rowmodel, record, index) {

        var globalContent = this.getView().up('global-content');
        var userIdx = record.get('userIdx');
        this.getView().lookupViewModel().set('userIdx',userIdx);
        globalContent.fireEvent('update-mode');


    }
});
