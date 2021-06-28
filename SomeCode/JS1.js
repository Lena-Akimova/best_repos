import * as mod from './first.js';

mod.user.go();
console.log("went");

class Animal{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    static Compare(animalA, animalB){
        return animalA.age-animalB.age;
    }
    #private_animal_property=0;
    set private_animal_property(value){
        this.#private_animal_property=value;
    }
    get private_animal_property(){
        return this.#private_animal_property;
    }

    _defended_animal_property="";
    get defended_animal_property(){
        return this._defended_animal_property;
    }
    set defended_animal_property(value){
        if(value.length>4){
            this._defended_animal_property=value;
        }
        else throw new Error("Коротко!");
    }
}

class Rabbit extends Animal{
    constructor(name, age){
        super(name, age);
        this.created=Date.now();
    }
}

let r=new Rabbit("Маша");
r.defended_animal_property="fghjk";
r.private_animal_property=44;
//r.defended_animal_property="";

console.log(r.name);
console.log(r.defended_animal_property);
console.log(r.private_animal_property);

let rab_mas=[new Rabbit("Маша", 20), new Rabbit("Victor", 2)];
console.log(rab_mas.sort(Animal.Compare));
console.log(navigator.platform);
console.log(navigator.userAgent);
console.log(location.hostname);
console.dir(document.body);
console.log(document.body);