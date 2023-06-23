/**
 *
 */
Ext.define('Miraeweb.window.file.grid.FileUploadGrid',{
    extend : 'Ext.grid.Panel',
    alias : 'widget.fileupload-grid',

    requires: [
        'Ext.grid.column.RowNumberer',
        'Ext.util.Format'
    ],
    columns: [{
        xtype : 'rownumberer'
    },{
        text: 'File name',
        align:'start',
        dataIndex: 'originalName',
        flex: 2
    }, {
        text: 'File size',
        dataIndex: 'fileSize',
        align:'right',
        width: 100,
        renderer: Ext.util.Format.fileSize
    }],
});