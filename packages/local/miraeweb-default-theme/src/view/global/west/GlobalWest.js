
Ext.define('MiraewebTheme.view.global.west.GlobalWest',{
    extend: 'Ext.tree.Panel',
    alias : 'widget.global-west',

    requires: [
        'MiraewebTheme.store.Navigation'
    ],
    store : 'Navigation',
    rootVisible : false
});
