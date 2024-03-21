// single comment
/* muti comment */

let num1 = 2;
let num2 = 3;
let num3 =num1 + num2

let str1 = "hello";
let str2 = "world";
let str3 = str1+ " " +str2 // hello world

/* Arithematic operators */ 


//  +  addition 
//  -  Subtraction
//  /  division
//  *  mutiplication
//  % remainder
//  ** exponent

/* increment and decrement */

// ++
// --
let num1 = 1;
let num2 = num1++  // 2
 

/* assignment operator */
// += addition assignment  
// -= subtraction assignment
// *=  mutiplaction assignment
//  /=  division assignment

/* comparison operators */
// == vs ===
//  !==  vs !===

// > and <
// >= and <=

/* logical operator */
// && and logical operator
// || or logical operator
// ! not logical operator 
let num1 = 5;
let num2 = 10;
!(num1 === num2); // true
!(num1 < num2); // false



//if () {}
//else if () {}
//else {}

/*  const something = " ";
    switch (something) {
    case 1:
     break;
     default:   
}
*/

/*function , parameter */

/*
let num1 = 2;
function name (number) {
    num1 = number ** 2; 
    num1 -= 4;
} 
name (1);

*/

/* value returning function

let num2 = 0;
function getNumber(number) {
     return number;
}
const myNumber = get number (5);

*/

// built-in function 
alert ("hello world")

// ES6 arrow function
const myArrowFunction = (param1, param2) => {
    param1 * param2
}
myArrowFunction(2,3)

{} // empty object
const person = {
    name: "Aung Kyaw",
        city: "Yangon", 
        age: 49,
         height: 170, 
         dateOfBirth:1979, 
         isDriver: true,
     drive: () => {
         alert("Aung Kyaw is driving..")
     }
    }

    // Accessing object's propertites and methods 
    // 1) dot notation
    person.age
    person.drive()
    person.drive = "fast"

    // 2) bracket notation 
    person['name']
    person["age"]
    person["drive"]()  
    person["fullValue"] = "100"

    // window object 
    alert ("hello world")
    console.log ("welcome")
    
/* Array */
{} //empty object ,unordered collection
[] // empty array,ordered collection

const ordered = ["one", "two", "three"];
//index start with zero 
ordered [0] 
"one"

// array.length property 
ordered.length
3

// push method
ordered.push("four"); //add behind
ordered = ["one", "two", "three","four"];

ordered.unshift("zero") //add front
ordered = ["zreo","one", "two", "three","four"]

ordered.pop() //remove behind
'four'
ordered = ["zreo","one", "two", "three"]


ordered.shift() //remove front
'zero'
ordered = ["one", "two", "three","four"];

// remove element(s) by index position
// ordered.splice(startingPosition, numberOfElementToRemove);
ordered.splice(0,2)
ordered= ["three","four",]


// get index of an element 
ordered.indexOf("three")
3

// get last item from an array
const index = ordered.length -1;
ordered[index]
"four"

/*loops */
//why?
// DRY --Don't Repeat Yourself 

let customers = [         
    {name: 'customer1', phoneNUmber:'1234567',email: ' customer1@gmail.com', dateOfBirth:'01.0.1.2001'},
        {name: 'customer2', phoneNUmber:'1234576',email: ' customer2@gmail.com', dateOfBirth:'02.0.2.2002'},
      {name: 'customer3', phoneNUmber:'123567',email: ' customer3@gmail.com', dateOfBirth:'03.0.3.2003'},
        {name: 'customer4', phoneNUmber:'124657',email: ' customer4@gmail.com', dateOfBirth:'04.0.4.2004'},
    ];


        //send email

const sendEmail = (email) =>{
    console.log('Sending email to',email);
}

const sendBirthdayDiscountEmail = (email) => {
    console.log ("Sending special birthday discount email to",email)
}

for (let i = 0; i < customers.length; i++) {
    let customerEmail = customers[i].email;
    let customerBirthday = customers[i].dateOfBirth;
    if(customerBirthday === '02.0.2.2002') {
        sendBirthdayDiscountEmail(customerEmail);
    }else {
        sendEmail (customerEmail);
      }
    }

    //get customers email

    const customer1 = customers[0].email;
    const customer2 = customers[1].email;
    const customer3 = customers[2].email;
    const customer4 = customers[3].email;

    /* for loop */

    for (let i = 0; i < 3 ; i++) {
        console.log("hello")
    }
// iteration = 1, i = 0 --> will run for loop body
// iteration = 2, i = 1 --> will run for loop body 
// iteration = 3, i = 2 --> will run for loop body 
// iteration = 4, i = 3 --> will not run for loop body  

const cities = ["Yangon","Mandalay","Myitkyina","Beijing","New York"]

cities[0] // "Yangon"
cities[1] // "Mandalay"
cities[2] // "Myitkyina"

for (let i = 0 ; i < cities.length ; i++) {
    let city = cities[i];
    console.log(city);
}

/* for in loop */
const customers = {name: 'customer1', phoneNumber: '123456',email: "customer1@gmail.com"}; 
for ( let prop in customers) {
  console.log (prop,customers[prop]);
}

/* while loop */
let validNumber = true;
while (validNumber) {
    let promptValue = prompt ("Please enter a number between 1 and 100"); // "50"
    const parsedValue = parseInt (promptValue,10); //50
    if (parsedValue > 1 && parsedValue < 100) {
        console.log ('Entered value:',parsedValue)
        validNumber = false; // exit condition
    }
}
let number = 1;
while (number < 10) {
  console.log ("Number now is:",number)
  number++; //exit condition
}

/* Error Handling */

const users = ["Maria", "Marcus","Ken","Hannah"];

const showChatSidebar = () => {
    console.log ("running show sidebar..");
    for ( const i = 0 ;i < users.length; i++) {
        console.log ("code to show user here..");
    }
}

const showLeftSidebar = () => {
    console.log ("code to show left side bar here..");
}
const showMainFeed = () => {
    console.log ("code to show main feed here..");
}

try {
showChatSidebar();
} catch (error) {
 console.log ("Catch error here",error)
}

showLeftSidebar();
showMainFeed();

//try ... catch 
try {       

} catch (error) {

}

/* Scope */

// Global Scope vs  Local scope 

//  code here can NOT use carName

        let city = "Yangon"; // Global Scope
        function myFunction () {
            var carName = "Volvo"; // Local Scope
            // var,let, const
            num1 = 10;  // code here CAN use carName
            console.log ("City name is :" , city);
        }

    console.log (carName); // will raise error
    console.log (num1); // will raise error 

// Block scope
//switch statement, for loop , while loop
// var : function scope

{
    let num1WithLet = 10;
    const numWithConst = 100;
    var numWithVar = 5;
}
console.log(num1WithLet);
console.log(num1WithConst);
console.log(numWithLet);
//old javaScript :
// var,without var

let city = "yangon";
const outerFunction = () => {
    var num1 = 10;
    num2 = 100;

    if ( num1 === 10) {
        var numWithVar = 1;
        let num1WithLet = 2;
        const numWithConst = 3;
    }

    console.log(numWithVar); //1
    console.log(num1WithConst);
    console.log(numWithLet);

    const innerFunction = () => {
      console.log (numWithVar);
      console.log (city);
    }

    innerFunction();

}

innerFunction(); // will raise error    
outerFunction ();

/* continue, break */

const customers = [
        {name: 'customer1', email: ' customer1@gmail.com', gender:'female'},
        {name: 'customer2', email: "customer2@gmail.com",  gender:"male"},
        {name: 'customer3', email: ' customer3@gmail.com', gender:'female'},
        {name: "customer4", email: "customer4@gmail.com",  gender: "male"},
        {name: "customer5", email: "customer5@gamil.com",  gender: "female"},
]

for (let i = 0; i < customers.length; i++ ) {
    let currentCustomer = customers[i];
    if (currentCustomer.gender === "male") {
        continue; //ကျော်တာ
    }
    console.log ('sending email to:', currentCustomer.email);
}

for (let i= 0; i < customers.length; i++) {
    let currentCustomer = customers[i];
    console.log("Sending email to :", customers.email);
    if(i === 2) {
        break;
    }
}

//while 
let i = 0;
while (i < customers.length ) {
    let currentCustomer = customers[i];
    i++ // exit condition
    if (currentCustomer.gender === 'male') {
        continue;
    }
     console.log ("Sending email to :", currentCustomer.email);

}

let i = 0;
while (i < customers.length) {
    let currentCustomer = customers[i];
    console.log("Sending email to:", currentCustomer.email);
    i++; // exit condition
    if (i === 3) {
        break;

    }
}

/* 2 dimensional (2D) array */

const num1 = [ 1,2,3] // one dimension
const num2 = [[1,2],[3,4],[5,6]]; // two dimensions

// Acess
num1 [2]  //3
num2[0]  // [1,2]
num2[1] // [3,4]
num2[2] // [5,6]
num2 [num2.length-1]

// looping array (1D)
for (let i = 0; i < num2.length; i++) {
    let currentArray = num2[i]; // [1,2]
    for (let j = 0 ; j < currentArray.length; j++) {
        let currentElement = currentArray[j];
    console.log ("Current element:", currentElement);
    }
}

/* Destructring , Spread Operator, Rest Parameter (ES6 Features) */

/* Object destructring */
const customer = {name: 'customer1', email: 'customer@gmail.com' , gender:'female'}
const name = customer.name;
const email = customer.email;
const gender = customer.gender;
// ES6]
const { name, email, gender} = customer;
console.log (name ,email , gender);

// Array destructring */
const cities = ["Yangon", "Mandalay", "Myitkyina"];
const cityOne = cities[0];
const cityTwo = cities[1];
const cityThree = cities[2];
//ES6
const [cityOne, cityTwo, cityThree] = cities
const [cityOne , , cityThree] = cities

/* spread operator (...) */ 
// Object 
const customer = {name: 'customer1', email: 'customer@gmail.com' , gender:'female'}
const copyCustomer = Object.assign({}, customer); // old javaScript
// ES6 
const copyCustomer = {...customer};

// Array 
const cities = ['mandalay', 'myintkyina','beijing'];
const newCitiesArray = [].concat(cities); // old javaScript
//ES6
const newCitiesArray = [...cities];

// Rest parameter (...) */
const calculate = (...params) => {
    let total = 0;
    for (let i= 0 ; i < params.length; i++ ) {
        total += params[i];
    }
    return total;
}
calculate(1,2,3,4,5);

/* Callback function */

const fetchData = (callback) => {
    console.log ("Fetching data from server...")
    /*
    asynchronous code
    asynchronous code
    asynchronous code
    */
   console.log("Finished fetching data...");
   callback();
}
// global scope
    const outerFunction = () => {
    // function local scope
    const showUserProfile =  () => {
         console.log ("Code to show user profile here ...")
    }
    fetchData(showUserProfile);
}

outerFunction();
// wait till the done --> synchronous code
// do not wait till the done  --> asynchronous code

/* Most used buit-in methods and functions */
// ES6 Array filter, map

const customers = [
    {name: 'customer1', email: ' customer1@gmail.com', gender:'female', age: 20},
    {name: 'customer2', email: "customer2@gmail.com",  gender:"male", age: 25},
    {name: 'customer3', email: ' customer3@gmail.com', gender:'female', age: 30},
    {name: 'customer4', email: ' customer4@gmail.com', gender:'male', age: 35},
]

customers.filter(arrayElement => arrayElement.gender === "male" && arrayElement.age > 25); //return [secondElement, fourthElement]
const isMale = arrayElement => arrayElement.gender === "male" && arrayElement.age > 25;

/* 
1.Call callback function with each element from the array as the parameter to the callback function.
2.Callback function must return a booleanl (true/false)  value based on the condition it wants to test.
3.If the callback function returns true, add the element to thhe final array.
4.Repeat the above steps for every element in the array.

/* Most used built-in methods and function */

//Array map with ES6 arrow function

    const customers = [
        {name: 'customer1', email: ' customer1@gmail.com', gender:'female'},
        {name: 'customer2', email: "customer2@gmail.com",  gender:"male"},
        {name: 'customer3', email: ' customer3@gmail.com', gender:'female'},
        {name: "customer4", email: "customer4@gmail.com",  gender: "male"},
        {name: "customer5", email: "customer5@gamil.com",  gender: "female"},
]

for (let i = 0 ; i < customers.length ; i++) {
    customers.bookings = [];
}

customers.map(element => {
    element.bookings = [];
    return element;
}); // []

/*
1.Call the callback function with each element in the array as the parameter to the callback function.
2.populate the returned array with the result from the callback.
3.Repeat the above steps for every element in the array.
*/

// Most used built-in methods and properties 

// String 
let textString = "Welcome to Myanmar";
textString.toUpperCase();
textString.toLowerCase();
textString.length; // 18
textString.indexOf("e"); // 1

// Number
let num = "10";
let result = parseInt(num,10); // 10
result < 10;

let num = 10;
num.toString() // "10"

// Object
const customer = {name: "customer1", email: "customer1@gmail.com", gender: "female"}
Object.keys(customer);
Object.values(customer);
customer.hasOwnProperty("age") // false
customer.hasPwnProperty("name") // true

// Array
const cities = ["yangon","Mandalay","Myintkyina"];
cities.length; //3
cities[cities.length - 1]; // Last element, eg."Myintkyina"
cities.push ("Beijing"); // ["yangon","Mandalay","Myitkyina", "Beijing"]
cities.pop(); // remove the last element and return it. eg: "Myintkyina"
cities.indexOf("Yangon"); // 0
cities.indexOf("Shanghai"); // -1
cities.slice(0,2); // ["Yangon","Mandalay"]
cities.splice(0,2); // return the removed elements in a new array. eg: ["Yangon","Mandalay"]
cities.join(","); // "yangon,Mandalay,Myitkyina"

/*  JavaScript Summary */

// 1. Data and structure types
// undefined, Boolean, String, Number, Object, Function, null
undefined;
null;
"Yangon", 'Mandalay';
25, 1.2;

// 2. Variable
// var, let, const
// var (global,function scope), let and const  (global, block scope {})
 var num1 = 10;
 var myFunc = () => {
    var num2 = 20;
    console.log(num2);
 }
 console.log(num1);
 console.log(num2); // error

 {
    var num3 = 30;
    let num4 = 40;
    const num5 = 50;
}
console.log(num3)
console.log(num4)
console.log(num5)

var num1 = 10;
var num1 = 20;

// global scope
let num2 = 10;
num2 = 20;

const num3 = 10;
num3 = 20; // raise error



// 3. Operator

// 4. Conditional Statements

// 5. Function 

// 6. Object

// 7. Array

// 8. Loops

// 9. Error Handling

// 10. Useful built-in operators, properties and methods
// ternary operator 
const isMale = true;
if(isMale) {
    console.log("Gender is male");
}else {
    console.log("Gender is not male");
}

isMale ? console.log("Gender is male") : console.log ("Gender is not male")

const customers = [
    {name: 'customer1', email: ' customer1@gmail.com', gender:'female', age: 20},
    {name: 'customer2', email: "customer2@gmail.com",  gender:"male", age: 25},
    {name: 'customer3', email: ' customer3@gmail.com', gender:'female', age: 30},
    {name: 'customer4', email: ' customer4@gmail.com', gender:'male', age: 35},
]

for (i = 0 ; i < customers.length; i++) {
    console.log("forLoop result: " ,customers[i] )
}
for (prop in customers) {
    if( customers[prop].age >= 20) {
        console.log(customers[prop].email,customers[prop]);
    } 
}
Chorus:
First love, it's like a drug
Got me feeling all sorts of emotions, can't get enough
She's got me on a high, I'm feeling so alive
First love, it's like nothing else can compare




