
Ext.define('MyApp.view.popup.login.LoginPopup',{
    extend: 'Ext.window.Window',
    alias : 'widget.login-popup',
    requires: [
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.layout.container.Fit',
        'Ext.layout.container.VBox',
        'MyApp.view.popup.login.LoginPopupController'
    ],
    layout : 'fit',
    modal : true,
    closable : false,
    closeAction: 'hide',
    title : 'Login',
    controller: 'login-popup',
    items : [{
        xtype : 'form',
        bodyPadding : '20 20 0 20',
        layout : {
            type : 'vbox',
            align: 'stretch'
        },
        items : [{
            xtype : 'textfield',
            fieldLabel : 'UserId',
            name : 'userId'
        },{
            xtype : 'textfield',
            inputType : 'password',
            fieldLabel : 'Password',
            name : 'password'
        }]
    }],
    bbar : [{
        xtype : 'tbfill'
    },{
        xtype : 'button',
        text : 'Login',
        handler : 'onBtnLogin'
    },{
        xtype : 'tbfill'
    }]
});
