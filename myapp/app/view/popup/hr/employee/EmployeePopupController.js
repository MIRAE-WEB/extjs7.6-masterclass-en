Ext.define('MyApp.view.popup.hr.employee.EmployeePopupController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-popup',

    onAfterRender : function(){
        this.getView().down('toolbar[dock=top]').hide();
    },
    onShow : function(){

        var forms = this.getView().query('form');

        for(var form of forms){
            form.getForm().reset();
        }
    },

    onBtnApply : function(button){

        var thisView = this.getView();
        var forms = this.getView().query('form');

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

        Ext.Msg.confirm('Info', 'Save Data?',function(btn){
            if(btn=='yes'){

                Ext.Ajax.request({
                    url : apiHost+'/users',
                    method : 'POST',
                    jsonData : Ext.encode(data),
                    success : function(){

                        Ext.Msg.alert('Info','Save Success',function(btn){
                            if(btn=='ok'){
                                thisView.hide();
                                Ext.callback(thisView.callbackFunc,thisView.callbackScope);
                            }
                        })

                    }
                });
            }

        });





    },
    onBtnCancel : function(button){

        this.getView().hide();
    }
});
