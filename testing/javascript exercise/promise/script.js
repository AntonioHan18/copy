//promise

const login = () =>{
    const loginPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("login is finished");
        },3000);
    });
    return loginPromise;

}

const fetchData = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data has arrived");
        },2000)
    })
};

const showHomeFeed = (data)=>{
 console.log("Making home feed using data :",data);
}

login().then((loginData)=>{
    console.log(loginData);
    fetchData().then((userData)=>{
        console.log(userData);
        showHomeFeed(userData);
    })
    })
    // .catch((error)=>{
    //     console.log(error);});