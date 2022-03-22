/**
function myfunc(num,element,step){
    const myInt=setInterval(function() {element.innerText=String(Number(element.innerText)+step)},1);
    if (Number(element.innerText)>=num) {
        clearInterval(myInt); 
        element.innerText=num
    }
}
*/
console.log("Loaded script.js");

let req= new XMLHttpRequest();
req.open("GET","https://api.covid19api.com/summary",false)
req.send()

let data1= JSON.parse(req.response)
let India = data1.Countries['77']

//summary of total cases and cases today Globally and in India
let gTotC=Number(data1.Global.TotalConfirmed);
let gNewC=data1.Global.NewConfirmed;
let iTotC=India.TotalConfirmed;
let iNewC=India.NewConfirmed;

//myfunc(10,document.getElementById("gtc"),2)

document.getElementById("gtc").innerText=gTotC;
document.getElementById("gnc").innerText=gNewC;
document.getElementById("itc").innerText=iTotC;
document.getElementById("inc").innerText=iNewC;
