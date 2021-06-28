Ext.application( //иниц-м новое приложение
    {
        name: 'MyApplication',
        launch: function()
        { //когда стр загрузится польз интерв
            Ext.create('Ext.container.Viewport', //контейнер кот помся внутрь бади и заполн все прострво
            {
                layout: 'fit',
                items: [{title: 'HelloTitleExtJs', html:'<h3>Hello everybody</h3>'}] //элементы контейнера
            });

            Ext.define('Classes.Person', //определение класса из прва имен классис
                        {
                            name: 'Pavel', //знач по умолч
                            surname: 'Popov',
                            constructor: function(name, surname){
                                if(name&&surname){
                                    this.name=name;
                                    this.surname=surname;
                                }
                            },
                            getinfo: function(){
                            alert(`Полное имя: ${this.name} ${this.surname}`)
                            }
                        }
                      );
            let per=Ext.create('Classes.Person'); //экз класса пока не было кнстрра c констр передаются нул
            per.getinfo();
            
            let pep2=Ext.create('Classes.Person', 'Misha', 'Maksimov');
            pep2.getinfo();
            
            let per3=new Classes.Person('Ilya','Muromec');
            per3.getinfo();
            
            per.name="Oleg";
            per.getinfo();

            Ext.define('Classes.Man', {
                config: {
                    name: 'Man', //автом создся гетеры сеттеры и аплай
                    surname: 'Manov',
                    },
                statics: {//стат члены класса
                    instanceCount: 0,
                    rebraCount:20,
                    factory: function(name, surname){
                        return new this({name: name, surname: surname});
                    }
                },
                constructor: function(name, surname){
                        this.initConfig();
                        if(name){
                            this.setName(name);
                        }
                        if(surname){
                            this.setSurname(surname);
                        }
                        this.self.instanceCount++; // именно к классу
                    },
                getinfo: function(){
                    alert(`Полное имя: ${this.name} ${this.surname}`)
                    }
            });

            let men=Ext.create('Classes.Man');
            men.setName('Bill');
            men.setSurname('Gates');
            men.getinfo();

            let james=Classes.Man.factory('James', 'Cookie');
            alert(Classes.Man.instanceCount);
            james.getinfo();

            Ext.define('Classes.Eva', {
                extend: 'Classes.Man',
                config: { ficha: 'long heir'},
                constructor: function(name, surname, ficha){
                    this.initConfig();
                    Classes.Man.rebraCount--;
                    if(ficha){
                        this.setFicha(ficha);
                    }
                    this.callParent([name, surname]);
                },
                getinfo: function(){
                    this.callParent();
                    alert(`ficha: ${this.ficha}`);
                }

            });

            let eva= Ext.create('Classes.Eva', 'Katya', 'Ivanova','lashes');
            eva.getinfo();
            alert(Classes.Man.rebraCount);
        }
    }
);

/*
//если без полноц прилож на мвс
Ext.onReady(function(){
    Ext.create('Ext.container.Viewport', {
        layout: 'fit',
        items: [{title: "Title", html:"HTML"}]
    });
});

 //подключаем файлы с классами из пр имен - папки классис
 Ext.Loader.setConfig({
    enabled: true,
    path: {'Classes':'ExtJS/Classes'}
});

Ext.require('Classes.Person');
Ext.require('Classes.Man');
Ext.require('Classes.Eva');


*/