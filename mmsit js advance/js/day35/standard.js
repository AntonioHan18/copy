console.log("Standard Built-in Object");

const s = new String(" Min Ga Lar Par ");

console.log(s);
console.log(s.length);
console.log(s[1]);
console.log(s.substring(0,10));
console.log(s.search("P"));
console.log(s.search(""));
console.log(s.replace("Par","Naw"));
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.trim().length);
console.log(s.trimStart());//trimEnd() 

const x = new String("99");
console.log(x.padStart(4,"0"));
console.log(x.padEnd(4,"0"));

// string to array
console.log(x.split());
console.log(s.split(""));
console.log(s.split(" "));

const Object = {
    x: "xx",
    y: "yy",
    a(){},
    b(){},
}
console.log(Object);

class Test {
    x = "xx";
    y = "yy";
    a(){};
    b(){};
}
const Object2 = new Test;
console.log(Object2);

const n = new Number(1993.4584);
console.log(n);
console.log(typeof n);
console.log(n.toString());
console.log(n.toFixed(2));
console.log(n.valueOf());
console.log(typeof n.valueOf());
console.log(n.toPrecision(2));

console.log(Number("120.5lb"));
console.log(parseInt("120.5lb"));
console.log(parseFloat("120.5lb"));

console.log(Math.floor("120.8"));
console.log(Math.ceil("120.2"));
console.log(Math.pow(2,10));
console.log(Math.random() + 1);

const obj = {
    x: "hello",
    y: "world",
    h:"HHZ",
    a(){},
    b(){},
}

console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

console.log(eval("5+5*6"));
console.log(isNaN(Number("563")));
console.log(isFinite(200/0));

const fun = function(){
    return "this ES6 fun"
}

const fun2 = function(x,y){
    console.log(arguments);
    return `${x}x${y} = ${x*y}`;
}
console.log(fun2(4,2));

const run = new Function("return 'this is fun' ")
console.log(run());

const run2 = new Function('x','y', "return 'run fun '+ x * y")
console.log(run2(4,4));
console.dir(run2);
console.log(fun2.name);
console.log(run2.length);
console.log(run2.bind(null,3,3).apply());
console.log(run2.call(null,2,2));

const ex = function(...para){
    console.log(para);
    let total = 0;
    for(j of para){
        total += j;
    }
    return total;
}
console.log(ex(3,2,8,1,))
