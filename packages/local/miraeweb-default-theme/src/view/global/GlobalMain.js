
Ext.define('MiraewebTheme.view.global.GlobalMain',{
    extend: 'Ext.container.Viewport',
    alias : 'widget.global-main',
    requires: [
        'Ext.layout.container.Border',
        'MiraewebTheme.view.global.GlobalMainController'
    ],

    controller: 'global-main',
    layout : 'border',
    items : [{
        xtype : 'global-west',
        title : 'Menu',
        region : 'west',
        frame : true,
        margin : '0 5 0 0',
        width : 200
    },{
        xtype : 'global-center',
        flex : 1,
        region : 'center'
    }]

});
