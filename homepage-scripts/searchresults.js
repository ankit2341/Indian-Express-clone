import {header,footer} from "../header/header.js";

document.getElementById("header").innerHTML=header();
document.getElementById("footer").innerHTML=footer();

var date = new Date().toUTCString();    
    document.getElementById("date").innerText = date;
    
    var twitter=document.getElementById("fb");
    twitter.addEventListener("click",function(){
          window.open("https://twitter.com/IndianExpress?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor");
    })

    var fb=document.getElementById("twitter");
    fb.addEventListener("click",function(){
          window.open("https://www.facebook.com/indianexpress");
    })

var date = new Date().toUTCString();    
    document.getElementById("date").innerText = date;

    window.onscroll = function() {myFunction()};

var navbar = document.getElementById("bottomhead");

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.position= "fixed";
      navbar.style.top="0px";
      navbar.style.width="100%";
  } else {
    navbar.style.position= "static";
  }
}
