
Ext.define('Miraeweb.form.field.CodeCombo',{
    extend: 'Ext.form.field.ComboBox',
    alias : 'widget.code-combo',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    config : {
        displayField: 'codeName',
        valueField : 'code',
    },

    codeGroup : null,

    initComponent : function(){
        var me = this;
        var codeGroup = me.codeGroup;

        var store = Ext.create('Ext.data.Store',{
            autoLoad : true,
            proxy : {
                type : 'ajax',
                url :  apiHost+'/sys/codes/'+codeGroup,
                method : 'GET',
                reader : {
                    type : 'json',
                    rootProperty : 'sysCodes.'+codeGroup
                }
            }
        });

        Ext.apply(me,{
            store : store
        });

        me.callParent(arguments);
    }
});
