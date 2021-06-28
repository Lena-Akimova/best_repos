/*function isEmpty(obj){
    let i=0;
    for(let k in obj){
        if(k) i++;
    }
    if (i==0)
        return true;
    return false;
}

let o={};
console.log(isEmpty(o));
o={w:3, q:4};
console.log(isEmpty(o));

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function Doubmenu(menu){
    for(let k in menu){
        console.log(typeof menu[k]);
        if(typeof menu[k]=="number")
            menu[k]*=2;
    }
}

console.log(menu);
Doubmenu(menu);
console.log(menu);

function Calculator(){
    this.read=function(){ 
        let a,b;
        while(!a){
            a=+prompt("1:",'');
        }
        while(!b){
            b=+prompt("2:",'');
        }
        this.sum=a+b;
        this.mul=a*b;
    };
    this.Sum=()=>this.sum;
    this.Mul=()=>this.mul;
    
}
let c=new Calculator();
c.read();
console.log("sum:"+c.Sum()+"mul:"+c.Mul());

function Accumulator(startVal){
    this.value=startVal;
    this.read=()=>{
        let p=+prompt("value:", ''); 
        this.value+=p;
    };
}
let a=new Accumulator(1);
a.read();
console.log(a.value);

let user={
    name: "roma", 
    money: 200,

    [Symbol.toPrimitive](hint){
        console.log(hint);
        if(hint=="string")
            {
                return console.log("name:"+ this.name);
            }
            else{       
                return console.log("money:"+ +this.money);}
    }
};

console.log(user);
console.log(+(user));


for(let c of "ELENA"){
    console.log(c);
}

function truncate(str, len){
    if(str.length>len){
        str=str.slice(0, len)+"...";
    }
    return str;
}

console.log(truncate("ELENA", 3));

let m1=[1,2,3];
let m2=m1;
m2.push(4);
console.log(m1);
let m3=[];
Object.assign(m3, m1);
m3.push(4,5);
console.log(m3);
console.log(m1);

let list=[{id:1, name:"Egor"},{id:2, name:"KAty"},{id:3, name:"Wana"},{id:4, name:"Ula"},];
console.log(list.find(x=>x.name.length>3));
console.log(list.filter(x=>x.name.length>3));

let arr=[2,3,4,5];
console.log(arr.map(x=>x**2));

function NewUser(user){
    this.fullname=user.name+" "+user.surname;
    this.id=user.id;
}

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [ vasya, petya, masha ];
let nm=users.map(x=>new NewUser(x));
console.log(nm);
let names=users.map(x=>x.name);
console.log(names);

function Calculaator(){
    this.calc=function(str){
        let op=str.split(" ");
        console.log("split:"+ op);
        let a=+op[0];
        let b=+op[2];
        let sign=op[1];

        if (this[sign]){
            return this[sign](a,b);
        }
        else return null;
    };

    this.addMethod=function(sign, func){
        this[sign]=func;
    };
}

let c=new Calculaator();
c.addMethod("*", (a,b)=>a*b);
console.log(c.calc('1 * 5'));
c.addMethod("+", (a,b)=>a+b);
console.log(c.calc('1 + 5'));
c.addMethod("dickpick", (a,b)=>a**b);
console.log(c.calc('1 dickpick 5'));


arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let r=new Set(arr.join("").toLowerCase());
r=(Array.from(r));
console.log(r);
r=r.join("");
let ns=[];
for(let s of arr){
    if(r.includes(s))
        ns.push(s);
}
console.log(ns);

let rr={
    dd:131,
    yyy:[1,3,4],
    hh:{f:2, i:5}
};

let json=JSON.stringify(rr);
console.log(json);


function CachingDecorator(slowFunc){
    let cache=new Map();

    return function(x)
    {
        if (cache.has(x))
        {
            return cache.get(x);
        }
        let res=slowFunc(x);
        cache.set(x, res);
        return res;
    };
}

let slow=CachingDecorator(
    (x)=>{for(let i=x; i<100; i++)
    console.log(`${i}`);
    });
let st= Date.now();
slow(1);
console.log(`без кэша: ${Date.now()-st}`);
let start= Date.now();
slow(1);
console.log(`кэш: ${Date.now()-start}`);

*/