
// JSON (javaScript Object Notation) Part 2 

// Valid JSON values (string,number,json object,array,boolean,null)

// const jsonString = "msquare"
// const jsonNumber = 1 
// const jsonObj = {
//     "name ": "msquare",
//     "subscriber": 4000,
//     "isProgramming":true,
// }

// const jsonArray = [1,2,3]
// const jsonBoolean = true
// const jsonNull = null    


// const jsonObj = {comment:"this is a test comment"};
// const convertedJSONString = JSON.stringify(jsonObj);
// console.log(typeof convertedJSONString);
// localStorage.setItem("comment",convertedJSONString); 

// const jsonObj2 = {comment:"this is second"};
// localStorage.setItem("comment2",jsonObj2);

const city = {
    name:"Yangon",
    population:60000,
    region:"Asia",
    isCapital:false
};
const convertedJSONString = JSON.stringify(city);
localStorage.setItem("city",convertedJSONString);

const cityFromLocalStorage = localStorage.getItem("city");
console.log("cityFromLocalStorage",cityFromLocalStorage.population);

const cityASJsObj = JSON.parse(cityFromLocalStorage);
console.log(cityASJsObj.population );
