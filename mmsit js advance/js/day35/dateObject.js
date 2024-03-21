
// console.log(typeof Date);
const d = new Date();
// console.log(d);

// const d = new Date(2012,2);
// const d = new Date("2019-7-1");
// const d = new Date(1500000000000); 
// d.setFullYear(2024)

// d.setHours(d.getHours() + 2);
// d.setMonth(d.getMonth() + 4);
// d.setDate(d.getDate() + (50/2))

console.log(d);
// console.log(d.toDateString());
// console.log(d.toTimeString());
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getMonth());
// console.log(d.getFullYear());

// console.log(d.getHours(),d.getMinutes());
// const days = ["Sat","Mon","Tue","Wed","Thu","Fri","Sun"];
// console.log(days[d.getDay()]);

class Test {
    #x = 5;
encapsulation

    getX() {
        return this.#x;
    }
    setX(newSet){
        return this.#x = newSet; 
        // this.#x = newSet;
        // return this.#x;
    }
}

const test = new Test;
// console.log(test.#x);
// test.x = 10;
// console.log(test.x);
console.log(test.getX());
console.log(test.setX(35));
console.log(test.getX());