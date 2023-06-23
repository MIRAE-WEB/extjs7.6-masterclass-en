/**
 *
 *
 * SingleTone 방식으로 Window를 생성시켜줍니다.
 *
 */
Ext.define('Miraeweb.window.SingletonWindow', {
    extend: 'Ext.window.Window',
    alias : ['widget.singleton-window'],
    autoShow : false,
    requires: [
        'Ext.layout.container.VBox'
    ],
    padding : '0 20 10 20',
    border : false,
    viewModel : {},
    frame : false,
    autoRender: true,
    hidden : true,
    modal: true,
    width: 800,
    y: 108,
    closable: true,
    floating: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function () {
        var me = this;

        me.callParent(arguments);

       // me.addListener('dragend',me.onDragend);
    },
    afterRender : function(){
        var me = this;
        me.callParent(arguments);
    },
    onDragend: function () {
        let me = this;
        let headerHeight = me.getHeader().getHeight();
        let browserHeight = window.innerHeight;
        let fromY = me.getY();
        let toY = 0;
        let isAlign = false;

        if (fromY < 0) {
            toY = 0;
            isAlign = true;
        } else if (fromY > browserHeight - headerHeight) {
            toY = browserHeight - headerHeight;
            isAlign = true;
        }

        if (isAlign) {

            Ext.create('Ext.fx.Anim', {
                target: me,
                duration: 300,
                to: {
                    y: toY,
                },
                from: {
                    y: fromY,
                }
            });
        }
    }

});