Ext.define('Miraeweb.overrides.data.proxy.Ajax',{
    override : 'Ext.data.proxy.Ajax',

    requires: [
        'Miraeweb.utils.Ajax'
    ],
    sendRequest: function(request) {

        request.setRawRequest(Miraeweb.Ajax.request(request.getCurrentConfig()));
        this.lastRequest = request;
        return request;


    },
})