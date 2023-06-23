/**
 *
 */
Ext.define('Miraeweb.window.file.FileUploadWindow', {
    extend: 'Miraeweb.window.SingletonWindow',
    alias: 'widget.fileupload-window',
    requires: [
        'Ext.button.Button',
        'Ext.data.Store',
        'Ext.form.field.Display',
        'Ext.toolbar.Fill',
        'Miraeweb.form.file.MultiFile',
        'Miraeweb.window.file.FileUploadWindowController',
        'Miraeweb.window.file.dropzone.FileDropZone',
        'Miraeweb.window.file.grid.FileUploadGrid'
    ],
    controller: 'fileupload-window',
    width: 600,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    multiUpload : false,
    maxFileSize : 5242880,
    uploadFiles: [],
    tbar: [{
        xtype : 'tbfill'
    },{
        xtype : 'displayfield',
        itemId : 'maxFileSize'
    },{
        xtype: 'multi-filefield',
        margin : '0 10 0 0',
        listeners: {
            changefile: 'onChangeFile'
        }
    }, {
        xtype: 'button',
        text : 'Delete',
        handler : 'onBtnDelete'
    }],
    items: [{
        xtype: 'fileupload-grid',
        title : 'File List',
        height: 200,
        frame : true,
        margin : '0 0 20 0',
        store: Ext.create('Ext.data.Store')
    }, {
        xtype: 'file-dropzone',
        height: 200,
        listeners: {
            dropfiles: 'onChangeFile',
        },
        selType : {
            selmodel :'MULTI'
        }
    }],
    bbar : [{
        xtype : 'tbfill'
    },{
        xtype : 'button',
        text : 'Apply',
        margin : '0 10 0 0',
        handler : 'onBtnUploadFile'
    },{
        xtype : 'button',
        text : 'Cancel',
        handler : 'onBtnCancel'
    },{
        xtype : 'tbfill'
    }],
    listeners : {
        show : 'onShow',
        hide : 'onHide',
        uploadfile : 'onUploadFile'
    }
});