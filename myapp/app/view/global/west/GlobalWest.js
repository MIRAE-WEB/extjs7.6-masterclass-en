
Ext.define('MyApp.view.global.west.GlobalWest',{
    extend: 'Ext.tree.Panel',
    alias : 'widget.global-west',

    requires: [
        'MyApp.store.Navigation'
    ],
    store : 'Navigation',
    rootVisible : false
});
