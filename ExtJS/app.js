Ext.application(
    {
        name: 'MyNameSpace',
        launch: function(){ //когда стр загрузится польз интерв
            Ext.create('Ext.container.Viewport', //контейнер кот помся внутрь бади и заполн все прострво
            {
                layout: 'fit',
                items: [{title: 'Hello', html:'Hello, html'}]
            })
        }
    }
);