
    function roomArea (width,breadth) {
        let area = width * breadth;
        return {
            width : width + "ft",
            breadth: breadth + "ft",
            area: area + "sqft"
        }
       
    }
    console.table(roomArea(5,5));


    // IIFE
    (function () {
        console.log(("IIFE"));
        return "IIFE";
    })();

    function x() {
        return "x";
    }
    console.log(x())

    let obj = {
        x : "x",
        y : "y",
        z : this.x + this.y
    }
    console.log(obj); 