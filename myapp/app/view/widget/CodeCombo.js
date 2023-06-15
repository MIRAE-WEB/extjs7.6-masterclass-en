
Ext.define('MyApp.view.widget.CodeCombo',{
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
                url : 'resources/data/system/code/group/'+codeGroup+'.json',
                method : 'GET',
                reader : {
                    type : 'json',
                    rootProperty : codeGroup
                }
            }
        });

        Ext.apply(me,{
            store : store
        });

        me.callParent(arguments);
    }
});
