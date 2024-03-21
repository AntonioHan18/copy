    // class Student {
    //     name = "Mg Mg";
    //     age = 23;
    //     gender = "male";
    //     professional = "developer";

    //     learn(){
    //         return `${this.name} + can learn this + ${this.major}`
    //     }

    //     health(){
    //         return this.age + " is stay healthy"
    //     }

    //     constructor(param) {
    //         console.log("constructor",param);
    //     }
    // }

    // const st = new Student("this is data passing");
    // console.log(Student);

// console.log(st.name);
// console.log(st.health());

class Student {

    static Uniform = "red and black";
    static try(){
        return `Students must try hard`
    }

    #languages = {
        js : ['loop','function','array,object'],
        css: ['animation','flex-box','responsive'],
    }

    prefixes = {
        Male:"Mr.",
        Female:"Miss."
    }

    constructor(inputName,inputAge,inputGender,inputMajor){
        this.name = inputName;
        this.age = inputAge;
        this.gender = inputGender;
        this.major = inputMajor;

        this.genderPrefix = this.prefixes[this.gender];
        this.fullName = this.genderPrefix + this.name; 
        
    }
    learn(){
        return `${this.name} can learn ${this.major} including ${this.#languages[this.major]}`
    }

    introduction(){
        return `My name is ${this.fullName} and ${this.age} year${this.age > 1 && "s"} old. Now I am leaning about ${this.major} including ${this.#languages[this.major]}`;
    }
}

const st1 = new Student("Mg Mg",15,"Male","js");
const st2 = new Student("Ma Ma",17,"Female","js");
const st3 = new Student("Tun Tun",18,"Male","css");

console.log(st1);
console.log(st2.learn());

console.log(st2.fullName);
console.log(st3.genderPrefix);
console.log(st2.learn());
console.log(st2.introduction());

class Monitor extends Student{
    section = "weekday"
}

const mt1 = new Monitor("Kaung gyi",20,'Male','js');
console.log(mt1);

console.log(Student.Uniform);
console.log(Student.try());
console.log(st1.languages);