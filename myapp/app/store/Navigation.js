Ext.define('MyApp.store.Navigation',{
    extend : 'Ext.data.TreeStore',
    storeId : 'Navigation',

    dataLoad : function(){
        var me =this;
        Ext.Ajax.request({
            url : 'resources/data/system/menu.json',
            method : 'GET',
            async : false,
            success : function(response){
                var resObj = Ext.decode(response.responseText);
                me.setRoot(resObj.menu);
            }
        })

    }

});