Ext.define('MyApp.view.hr.employee.tab.EmployeeTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employee-tab',
    onResetMode : function(){
        var tabItems = this.getView().items.items;

        for(var tabItem of tabItems){
            tabItem.fireEvent('reset-mode');
        }
    },
    onUpdateMode : function(){
        var tabItems = this.getView().items.items;

        for(var tabItem of tabItems){
            tabItem.fireEvent('update-mode');
        }
    },
});
