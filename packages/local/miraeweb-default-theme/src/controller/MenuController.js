Ext.define('MiraewebTheme.controller.MenuController', {
    extend : 'Ext.app.Controller',

    refs: [{
        ref: 'globalNorth',
        selector: 'global-north'
    },{
        ref: 'globalCenterTab',
        selector: 'global-center-tab'
    },{
        ref: 'globalWest',
        selector: 'global-west'
    }],
    routes : {
        ':id' : {
            before  : 'beforeRoute',
            action  : 'handleRoute'
        }
    },
    control: {
        'global-north' :{
            afterrender : 'onAfterRenderGlobalNorth'
        },
        'global-west': {
            beforeselect :'onMenuBeforeSelect',
            select: 'onMenuSelect'
        },
        'global-center-tab': {
            tabchange :'onMenuTabChange',
        }
    },
    onAfterRenderGlobalNorth : function(){

        var userData = Miraeweb.Jwt.getUserData();

        this.getGlobalNorth().lookupViewModel().set('userData',userData);

    },
    onMenuTabChange : function(tabpanel,newCard,oldCard){

        var widgetName = newCard.xtype;
        var rootNode = Ext.getStore('Navigation').getRoot();
        var findNode = rootNode.findChild('widgetName',widgetName,true);

        this.getGlobalWest().getSelectionModel().select(findNode);

    },
    onMenuBeforeSelect :function(rowmodel,record,index){

        if(record.get('widgetName')){
            return true;
        }
        return false;

    },
    onMenuSelect : function(rowmodel,record,index){

        this.redirectTo(record.get('widgetName'));

    },

    beforeRoute : function (id, action) {

        var accessToken = Miraeweb.Jwt.getAccessToken();

        if(!accessToken){
            action.stop();
            return false;
        }


        var rootNode = Ext.getStore('Navigation').getRoot();
        var findNode = rootNode.findChild('widgetName',id,true);

        if(findNode){
            action.resume();
        }else{
            action.stop();
            this.redirectTo('employee-management');
        }


    },

    handleRoute : function (id) {
        var rootNode = Ext.getStore('Navigation').getRoot();
        var findNode = rootNode.findChild('widgetName',id,true);

        var widgetName = findNode.get('widgetName');
        var title = findNode.get('text');

        var globalCenterTab = this.getGlobalCenterTab();

        var widget = Ext.ComponentQuery.query(widgetName)[0];

        if(!widget){
            widget = Ext.widget(widgetName,{
                title : title
            });
            globalCenterTab.add(widget);
        }
        globalCenterTab.setActiveTab(widget);



    }
});