const myButton = document.getElementById("myButton");
const image = document.getElementsByClassName("girl")[0]; // HTMLColllectton
const originalImageSrc = image.src;
const imageArray = [
    "https://bit.ly/3WSMYou",
    "https://bit.ly/3HmN81C",
    "https://bit.ly/3Jw6lR3",
    "https://binged.it/3WU5LzC",
    "https://bit.ly/3XV7FkS",
    ];

let counter = 0;
const myFunction = () => {
    if(counter === 5 ) {
        image.src = originalImageSrc;
        counter = 0;
        return;
    }

    const imageLink = imageArray[counter];
    image.src = imageLink;
    counter += 1;    
    console.log("counter value is:", counter);              
}


myButton.addEventListener("click", myFunction);

/*
1.image in array
2.counter
3.get image in arry using counter
*/