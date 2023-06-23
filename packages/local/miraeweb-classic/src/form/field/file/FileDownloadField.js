/**
 *
 */
Ext.define('Miraeweb.form.field.file.FileDownloadField',{
    alias : 'widget.filedownload-field',
    extend : 'Ext.container.Container',

    requires: [
        'Ext.container.Container'
    ],
    height : 18,
    style : 'margin: 10px 0px 0px 10px;',
    createHref : function(datas){
        this.setData(datas ||[]);
    },
    initComponent : function(){
        var me = this;



        Ext.apply(me,{
            tpl : [
                '<div style="line-height: 8px; display: flex;height:auto">',
                    '<tpl for=".">',
                        '<div id="{[this.getId(values)]}" style="margin-left:10px">',
                            '<a class="miraeweb-file-link" href="{[this.getHref(values)]}"> {originalName}</a>',
                            '<span class="miraeweb-file-delete"> </span>',
                        '</div>',
                    '</tpl>',
                '</div>',
                {
                    getId : function(values){
                        var id = Ext.id();
                        var fileContainer = me.up('file-container');

                        Ext.defer(function(){



                            var el = Ext.get(id);
                            if(!el){
                                return false;
                            }
                            if(fileContainer) {

                                var visible = fileContainer.readOnly !== true  ?'visible' :'hidden';
                                el.down('.miraeweb-file-delete').setStyle('visibility',visible);
                            }
                            el.on('click',function(e){

                                if(e.target.className=='miraeweb-file-delete'){
                                    var datas = Ext.Array.remove(me.getData(),this.data);
                                    me.setData(datas);


                                    if(fileContainer){
                                        var fileField = fileContainer.down('[name='+fileContainer.fileIdProperty+']');
                                        fileField.setValue(Ext.Array.pluck(datas,'fileId'));




                                    }


                                }
                            },{
                                data : this.data
                            });
                        },100,{
                            data : values
                        });
                        return id;



                    },
                    getHref : function(values){
                        var href='';
                        //var href = 'resources/files/'+values.fileId;
                        var href = 'resources/files/'+ Math.floor(Math.random()*100)
                        return href;
                    }
                }
            ]
        });

        me.callParent(arguments)
    },
});