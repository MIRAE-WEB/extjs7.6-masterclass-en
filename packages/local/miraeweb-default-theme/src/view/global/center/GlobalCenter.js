
Ext.define('MiraewebTheme.view.global.center.GlobalCenter',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.global-center',

    requires: [
        'Ext.layout.container.Fit'
    ],

    layout : 'fit',
    items : [{
        xtype : 'global-center-tab'
    }]
});
