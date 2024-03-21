
// function greeting() {
//     return "Min ga Lar Par"
// }

// function intro(callback) {
//     console.log(callback);
//     console.log(callback());
//     console.log("My name is HHZ");
//     return "finished function";
// }

// console.log(intro(greeting));

const mobiles = ["iphone","samsung","xiaomi","honor"];

// for(mobile of mobiles){
//     console.log(mobile);
//  }

//  function a(x) {
//     console.log(x);
//  }

// const x = mobiles.forEach(function(x) {
//       console.log(x);
// });

// console.log(x);

// // mobiles.forEach(function(x,index,array) {
// //       console.log(x,index,array);
// // });

// `loop ${ for(mobile of mobiles){console.log(mobile);}}`
// // `loop ${mobiles.forEach(function(x,index) {console.log(x,index)})}`;

// // const run = function () {
// //     return "I'm run"
// // }

// // const run = _ => "I'm running";
// // console.log(run());

// // let run2 = ()=> {
// //     return "I am running with codeBlock"
// // }
// // console.log(run2());
 
// // const run = function(params) {
// //     return "I am running"
// // };

// // const run2 = params => "I am running with ES6 No codeBlock";
// // console.log(run2());

// // const run = function name(x,y) {
// //     return x+y;
// // }

// // const run2 = (x,y)=> x+y;

// // console.log(run(2,2));
// // console.log(run2(2,2));

// // const pro = function(birthYear) {
//     // const d = new Date();
//     // const currentYear = d.getFullYear();
//     // const result = currentYear-birthYear;
//     // return result;
// // }


// const pro =birthYear=>{
//     const d = new Date();
//     const currentYear = d.getFullYear();
//     const result = currentYear-birthYear;
//     return `your age is : ${result} years old`
// }
// console.log(pro(2005));

// console.log(Array.isArray(mobiles));
// const x = {}
// console.log(Array.isArray(x));

// console.log(mobiles.includes("iphone"));

// console.log(mobiles.includes("honor"));
// console.log(mobiles.indexOf("samsung"));
// console.log(mobiles);
// console.log(mobiles.splice(0,2));

// console.log(mobiles.slice(0,3));
// console.log(mobiles);

// const firstName = "Han";
// const lastName = "Zaw";

// console.log(firstName.concat(lastName));
// console.log(firstName + lastName);

// // const numb = [2,3,4,11,4,3];
// // const word = ["aa","dd","dd","vv"];
// // const arr = numb.concat(word).concat(mobiles);
// // console.log(arr);

// // console.log(mobiles.join(".").toUpperCase().substring(0,20));

// // const arr = ['aa',...mobiles];
// // console.log(arr);

// const result2 = mobiles.map(el => {
//     console.log(el);
//     return el.toUpperCase() + " MOBILE";
// })
// console.log(result2);

// console.table(products);

// const r = products.map(el =>{
//     // console.log(el);
//     el.price+20;
//     el.title = "HHZ-"+el.title;
//     // return el;
//     return {
//         myTitle:el.title,
//         prices:el.price
//     }
// })

// const r = products.filter((el) => {
//     //  return el.price < 50
//     // return el.id === 5;
//     return el.rating.count > 200 && el.price <90;
//     })

// console.table(r);

// const result = products.filter(el => el.price <20).map(el => { 
//     return{  
//     prices: el.price,
//     title: el.title
// }
//     })
// console.table(result);

// const r = products.filter(el => el.id === 4)
//  const r = products.find(el => el.price < 10)
//   const r = products.findIndex(el => el.id === 5)

// console.log(r);

const numbs = [1,2,3,4,5];
// console.log(
//     numbs.reduce((pv,cv) => {
//     console.log(pv,cv);
//     return pv+cv
//     },0)
//     );

// const r = products.reduce((pv,cv) =>{
//     console.log(pv,cv.price);
//     return pv+cv.price},0);
// console.log(r);

// const r = products.reduce((pv,cv)=> pv+cv.price,0)
// console.log(r);
