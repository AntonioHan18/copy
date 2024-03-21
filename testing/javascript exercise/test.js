        const customers = [
            {name: 'customer1', email: ' customer1@gmail.com', gender:'female'},
            {name: 'customer2', email: "customer2@gmail.com",  gender:"male"},
            {name: 'customer3', email: ' customer3@gmail.com', gender:'female'},
            {name: "customer4", email: "customer4@gmail.com",  gender: "male"},
            {name: "customer5", email: "customer5@gamil.com",  gender: "female"},
        ]


        for (let i = 0; i < customers.length; i++) {
            for (let each in customers[i]) {
                if(each === "email") {
               const currentEmail = customers[i][each];
               console.log(currentEmail) 
            }
        }
        }


        for (let i = 0; i < customers.length; i++) {       
            const currentObject = customers[i];
            for(let key in currentObject) {
                if(key === "email") {
                const currentEmail = currentObject[key];
                console.log(currentEmail)
                }
            }
        }


        for (let i = 0; i < customers.length; i++) {
            for (let j = 0; j < Object.keys(customers[i]).length; j++) {
                const currentElement = customers[i].email;
                console.log(currentElement)
            }
        }
        