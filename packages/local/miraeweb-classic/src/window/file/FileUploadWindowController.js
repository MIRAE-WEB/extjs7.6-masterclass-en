Ext.define('Miraeweb.window.file.FileUploadWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.fileupload-window',

    requires: [

    ],

    onShow : function(thisView){
        thisView.params = thisView.params || {};
        thisView.maxFileSize = thisView.params.maxFileSize || thisView.maxFileSize;

        thisView.maxFileCount =thisView.params.maxFileCount || thisView.maxFileCount;
        thisView.allowMimeType=thisView.params.allowMimeType || [];


        var store = thisView.down('grid').getStore();

        store.loadRawData(thisView.params.files);

        var multiple = thisView.maxFileCount==1 ? false : true;

        var multiFileField = thisView.down('multi-filefield');
        multiFileField.fileInputEl.set({ multiple: multiple });

    },
    onHide : function(thisView){
        thisView.uploadFiles=[];
        thisView.down('grid').getStore().removeAll();
    },


    onChangeFile : function(me,files){

        var thisView = this.getView();
        var store = this.getView().down('grid').getStore();
        var result = [];
        var fileCount = store.getCount()+files.length;

        if(files.length>thisView.maxFileCount){
            Ext.Msg.alert('Info','You can select up to '+thisView.maxFileCount+' files');
            return false;
        }
        if(fileCount>thisView.maxFileCount){
            Ext.Msg.alert('Info','You can only upload up to'+ thisView.maxFileCount +' files.</br>Please delete the existing file and try again.');
            return false;
        }



        var mimeType= thisView.allowMimeType ||[];

        mimeType= mimeType.join('|');

        for(var i=0;i<files.length;i++){
            var file = files[i];
            if(file.type.search(mimeType)==-1){
                Ext.Msg.alert('Info', '['+file.name+'] is a file type that cannot be uploaded.');
                return false;
            }
        }

        for(var i=0;i<files.length;i++){
            var file = files[i];

            var data ={
                originalName: file.name,
                fileSize : file.size,
                lastModified: file.lastModified
            }

            var findIdx = store.findBy(function(rec){

                if( rec.get('originalName')==data.name &&
                    rec.get('fileSize')==data.size      &&
                    rec.get('lastModified')==data.lastModified
                ){
                    return true;
                }
                return false;
            });
            if(findIdx==-1){
                store.add(data);
                thisView.uploadFiles.push(file);
            }
        }
    },
    onBtnDelete: function(button){
        var grid = this.getView().down('grid');
        var records = grid.getSelectionModel().getSelection();

        if(records.length==0){
            Ext.Msg.alert('Info','No files selected.');
            return false;
        }

        Ext.Msg.confirm('Info','Do you want to exclude the selected files from the upload?',function(btn){
            if(btn=='yes'){
                grid.store.remove(records);
            }
        });


    },
    onBtnCancel: function(button){
        this.getView().hide();
    },
    onBtnUploadFile : function(button){
        var thisView = this.getView();
        thisView.fireEvent('uploadfile',thisView,thisView.uploadFiles);
    },
    /**
     *
     * @param comp
     * @param files
     */
    onUploadFile: function (comp, files) {
        var me = this;
        Ext.Msg.confirm('Info', 'Do you want to update the attachment?',function(btn){

            if(btn=='yes'){
                me.requestFileUpload()
            }
        }, me);
    },

    /**
     *
     */
    requestFileUpload: function () {
        var thisView = this.getView();
        var store = thisView.down('grid').getStore();
        var files = thisView.uploadFiles;
        var result = Ext.Array.pluck(store.data.items, 'data');
        var count = 0;


        if (files.length == 0) {
            Ext.callback(thisView.callbackFunc, thisView.callbackScope, [thisView, result]);
            return;
        }

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var formData = new FormData();
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (request.readyState === XMLHttpRequest.DONE) {
                    if (request.status === 200) {
                        var resObj = Ext.decode(request.responseText);

                        if(resObj.success===false){
                            Ext.Msg.alert('Failed File Upload','Error Code : '+resObj.code+'<br>Message :'+resObj.msg);
                            return;
                        }

                        var data = resObj.data;
                        data.originalName = file.name;

                        var findIdx = store.findBy(function (rec) {

                            if (rec.get('originalName') == file.name &&
                                rec.get('fileSize') == file.size &&
                                rec.get('lastModified') == file.lastModified
                            ) {
                                return true;
                            }
                            return false;
                        });

                        store.getAt(findIdx).set('fileId', data.fileId);


                        if (++count == files.length) {

                            Ext.Msg.alert('Info','Success File Upload', function (btn) {
                                if(btn=='ok'){
                                    var result = Ext.Array.pluck(store.data.items, 'data');
                                    Ext.callback(thisView.callbackFunc, thisView.callbackScope, [thisView, result]);
                                }
                            });
                        }
                    }
                }
            };
            formData.append('file', file);
            request.open('POST',  'resources/data/fileupload.json', false);
            request.send(formData);
        }
    }
});
