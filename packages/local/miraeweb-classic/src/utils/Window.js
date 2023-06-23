/**
 *
 */
Ext.define('Miraeweb.utils.Window', {
    alternateClassName: ['Miraeweb.Window'],
    requires: [
        'Ext.util.Cookies'
    ],
    singleton: true,

    /**
     * Convenient shorthand to create a widget by its xtype or a config object.
     *
     *      let button = Ext.widget('button'); // Equivalent to Ext.create('widget.button');
     *
     *      let panel = Ext.widget('panel', { // Equivalent to Ext.create('widget.panel')
     *          title: 'Panel'
     *      });
     *
     *      let grid = Ext.widget({
     *          xtype: 'grid',
     *          ...
     *      });
     *
     * If a {@link Ext.Component component} instance is passed, it is simply returned.
     *
     * @member Ext
     * @param {String} name The xtype of the widget to create.
     * @param {Object} config The configuration object for the widget constructor.
     * @return {Object} The widget instance
     */
    showPopup: function (widgetName, options) {

        // console.log('showPopup!!');

        let popup = Ext.ComponentQuery.query(widgetName)[0];
        let viewModel = null;

        if (options.viewModel) {
            viewModel = Ext.clone(options.viewModel);
            delete options.viewModel;
        }
        if (!popup) {
            let config = options || {};
            popup = Ext.widget(widgetName, config);
        }

        Ext.apply(popup, options);

        if (viewModel) {

            Ext.iterate(viewModel.data, function (key, value) {
                popup.getViewModel().set(key, value);
            });
        }
        // console.log('popup:', popup);

        popup.show();

        if (popup.completeShow) {
            popup.fireEvent('refresh');
        }

        Ext.WindowManager.bringToFront(popup);
        return popup;
    }
});


