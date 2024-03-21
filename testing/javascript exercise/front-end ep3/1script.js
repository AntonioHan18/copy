/* Event */

// emitter, listener or handler
// at event occurs, run some codes


const myFunction = () => {
    console.log("click event was fired!"); 
} 
const myFunction2 = () => {
    console.log("Function Two");
}

 const myButton = document.getElementById("myButton");

 /*myButton.onclick = myFunction;
 myButton.onclick = myFunction2;*/

 myButton.addEventListener("click", myFunction);
 myButton.addEventListener("click", myFunction2);

