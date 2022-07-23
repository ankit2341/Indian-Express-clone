// let api_key= '480870360edd4e4b9114fe8724deed7d';


import {getData,append,append_img} from "./explained.js";

// let url=`https://newsapi.org/v2/everything?q=explained&apiKey=${api_key}`;

let query="explained";

getData(query).then((res)=>{
    append(res);
    append_img(res)
  
})

document.getElementById("ideas").addEventListener("click",()=>{
    // let newurl = `https://newsapi.org/v2/everything/?q=idea&apiKey=${api_key}`;
    getData("ideas").then((res)=>{
        append(res);
        // append_img(res)
 
    })
})

document.getElementById("economics").addEventListener("click",()=>{
    // let newurl = `https://newsapi.org/v2/everything/?q=economics&apiKey=${api_key}`;
    getData("economics").then((res)=>{
        append(res);
        append_img(res)
 
    })
})