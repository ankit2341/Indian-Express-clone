import header from "../header/header.js";

document.getElementById("header").innerHTML=header();

var date = new Date().toUTCString();    
    document.getElementById("date").innerText = date;
    