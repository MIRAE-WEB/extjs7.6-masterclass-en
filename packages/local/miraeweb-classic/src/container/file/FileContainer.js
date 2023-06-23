/**
 *
 */
Ext.define('Miraeweb.container.file.FileContainer', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.file-container',

    requires: [
        'Ext.button.Button',
        'Ext.form.FieldContainer',
        'Ext.form.field.Hidden',
        'Ext.layout.container.HBox',
        'Miraeweb.form.field.file.FileDownloadField',
        'Miraeweb.utils.Window'
    ],
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    hiddenFileName:false,
    buttonText : 'Upload Files...',
    hideButton : false,
    controller: null,
    config : {
        handler : null,
        fileIdProperty : null,
    },
    params : {},
    defaultParams : {
        maxFileCount: 1,
        totalMaxFileSize: 1024 * 1024 * 1024,
        /*allowMimeType: [
            'image/jpeg',
            'image/png',
            'image/gif'
        ]*/
    },
    readOnly : false,
    initComponent: function () {
        var me = this;
        me.execParams = Ext.apply(Ext.clone(me.defaultParams),me.params ||{});
        var multi = me.execParams.maxFileCount>1;
        Ext.apply(me,{
            items: [{
                xtype: 'button',
                hidden : me.hideButton,
                buttonWidth :me.buttonWidth,
                fileIdProperty : me.getFileIdProperty(),
                handler: me.defaultHandler,
                scope : me,
                text: me.buttonText
            },{
                xtype: 'filedownload-field',
                allowBlank : true,
                hidden: me.hiddenFileName
            },{
                xtype: 'hiddenfield',
                multi: true,
                requireFlag : false,
                allowBlank : true,
                readOnly : me.readOnly,
                name: me.getFileIdProperty(),
                listeners : {
                    change : 'onChangeFileIdProperty',
                    readOnly : 'onReadOnlyFileIdProperty',
                    scope : me
                }
            }]
        });

        me.callParent(arguments);
        me.onReadOnlyFileIdProperty();
    },

    defaultHandler : function(){

        var me = this;

        var fileDownloadField = me.down('filedownload-field');

        var files = fileDownloadField.getData() || [];

        var params = me.execParams;
        params.files = files;

        Miraeweb.Window.showPopup('fileupload-window', {
            title : 'Attach Files',
            params : params,
            callbackScope: me,
            callbackFunc : function(popup,datas){

                fileDownloadField.setData(datas);
                var fileIds = Ext.Array.pluck(datas,'fileId').join();
                me.down('[name='+me.fileIdProperty+']').setValue(fileIds);
                popup.hide();
            }
        });
    },
    onReadOnlyFileIdProperty : function(){

        var me = this;
        var field = me.down('hiddenfield');
        me.down('button').setHidden(field.readOnly);
    },


    reset : function(){

    },
    /**
     *
     * @param field
     * @param newValue
     * @param oldValue
     */
    onChangeFileIdProperty: function(field,newValue,oldValue){

        var me = this;
        var fileIds = newValue;
        var result = [];

        if(Ext.isEmpty(fileIds)){
            me.down('filedownload-field').setData([]);
            return;
        }

        Ext.Ajax.request({
            url : me.url || '/system/files',
            async : false,
            params : {
                fileIds : fileIds
            },
            method : 'GET',
            success : function(response){

                var resObj = Ext.decode(response.responseText);


                me.down('filedownload-field').createHref(resObj.data);
                me.fireEvent('changefile',field,newValue,oldValue);
            }
        });
    }
});
