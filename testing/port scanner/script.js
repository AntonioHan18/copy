
const serverPort = document.getElementById("portType");

const handler = () => {
    let portTypeValue = serverPort.value;
    console.log(portTypeValue)
    let portsInput = document.getElementById("ports");

if (portTypeValue === "1") {
    console.log("Inside value 1")
    portsInput.value = "21,22,80,443";
} else if (portTypeValue === "2") {
    console.log("Inside value 2")
    portsInput.value = "21, 22, 23, 25, 53, 80, 110, 137, 138, 139, 143, 443, 445, 548, 587, 993, 995, 1433, 1701, 1723, 3306, 5432, 8008, 8443";
} else if (portTypeValue === "3") {
    console.log("Inside value 3")
    portsInput.value = "666, 2302, 3453, 3724, 4000, 5154, 6112, 6113, 6114, 6115, 6116, 6117, 6118, 6119, 7777, 10093, 10094, 12203, 14567, 25565, 26000, 27015, 27910, 28000, 50000";
} else if (portTypeValue === "4") {
    console.log("Inside value 4")
    portsInput.value = "515, 631, 3282, 3389, 5190, 5050, 4443, 1863, 6891, 1503, 5631, 5632, 5900, 6667";
} else if (portTypeValue === "5") {
    console.log("Inside value 5")
    portsInput.value = "119, 375, 425, 1214, 412, 1412, 2412, 4661, 4662, 4665, 5500, 6346, 6881, 6882, 6883, 6884, 6885, 6886, 6887, 6888, 6889";
}
}


serverPort.addEventListener("change",handler);