import fetch from "node-fetch";
let fetchRes=fetch("https://restcountries.com/v3.1/all");
fetchRes
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
    })