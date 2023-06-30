Ext.define('MyApp.view.hr.employee.form.EmployeeFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-form',

    requires: [
        'Miraeweb.utils.Ajax'
    ],

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

        var forms = globalContent.query('form');

        var data = {};
        for(var form of forms){

            if(!form.getForm().isValid()){
                Ext.Msg.alert('Error','Field Error');
                return false;
            }

            data =Ext.apply(data,form.getForm().getValues());
        }

        data={
            "address1": data.address1,
            "address2": data.address2,
            "bankAccount": data.bankAccount,
            "bankCode": data.bankCode,
            "birthDate": data.birthDate,
            "deptCode":data.deptCode,
            "email": data.email,
            "employeeNumber": data.employeeNumber,
            "genderCode": data.genderCode,
            "mobile": data.mobile,
            "ownerName": data.ownerName,
            "rankCode": data.rankCode,
            "userId": data.userId,
            "userIdx": data.userIdx,
            "userName": data.userName,
            "zipCode": data.zipCode
        }
        var jsonData = Ext.encode(data);


        Miraeweb.Ajax.request({
            url : apiHost+'/usdfsers/'+data.userIdx,
            method : 'PUT',
            jsonData : jsonData,
            confirmMsg : {
                title : 'Info',
                message : 'Save Data?'
            },
            successMsg : {
                title : 'Info',
                message : 'Save Success'
            },
            success :function(){
                globalContent.fireEvent('search-employee');
            }
        });
    }
});
