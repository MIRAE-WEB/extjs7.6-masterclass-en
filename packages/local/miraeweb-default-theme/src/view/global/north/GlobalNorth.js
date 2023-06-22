Ext.define('MiraewebTheme.view.global.north.GlobalNorth',{
    extend : 'Ext.panel.Panel',
    alias : 'widget.global-north',

    layout : {
        type : 'hbox',
        align : 'stretch'
    },
    viewModel : {
        data : {
            userData : {
                userId : 'test',
                userName : 'AAAA',
                deptCode : 'BBBB',
                rankCode : 'CCCC',
                lastLoginTime : '2023-06-22 : 00:00:00'
            },
        }
    },
    defaults : {
        margin : '15 10 0 0'
    },
    items : [{
        xtype : 'container',
        bind : {
            data : '{userData}'
        },
        tpl : [
            '<div>',
                '<span class="north-company-name">Miraeweb</span>',
            '</div>'
        ]
    },{
        flex :1
    },{
        xtype : 'container',
        bind : {
            data : '{userData}'
        },
        tpl : [
            '<div>',
            '<span class="north-user-info">{userId}</span>',
            '</div>'
        ]
    },{
        xtype : 'container',
        bind : {
            data : '{userData}'
        },
        tpl : [
            '<div>',
            '<span class="north-user-info">{userName}</span>',
            '</div>'
        ]
    },{
        xtype : 'container',
        bind : {
            data : '{userData}'
        },
        tpl : [
            '<div>',
            '<span class="north-user-info">{deptCode}</span>',
            '</div>'
        ]
    },{
        xtype : 'container',
        bind : {
            data : '{userData}'
        },
        tpl : [
            '<div>',
            '<span class="north-user-info">{rankCode}</span>',
            '</div>'
        ]
    },{
        xtype : 'container',
        bind : {
            data : '{userData}'
        },
        tpl : [
            '<div>',
            '<span class="north-user-info">{lastLoginTime}</span>',
            '</div>'
        ]
    },{
        xtype : 'container',
        bind : {
            data : '{userData}'
        },
        tpl : [
            '<div>',
            '<span id="{[this.getId()]}"class="x-fa fa-sign-out-alt north-user-logout"></span>',
            '</div>',
            {
                getId : function(){
                    var id = Ext.id();

                    Ext.defer(function(){

                        Ext.get(id).on('click',function(){

                            Ext.Msg.confirm('Info','Sign Out?',function(btn){

                                if(btn=='yes'){
                                    Miraeweb.Jwt.removeCookie();
                                    window.location.reload();

                                }
                            });

                        });


                    },50);
                    return id;

                }


            }
        ]
    }]
});