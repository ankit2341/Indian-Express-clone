// 0f51aa777ab440708430933fba93d8a7

// let Api_Key = "0f51aa777ab440708430933fba93d8a7";
// 480870360edd4e4b9114fe8724deed7d
let Api_Key = "480870360edd4e4b9114fe8724deed7d";
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${Api_Key}`

import {getData,append,append_data,appendslide} from "./subnavbar.js"


getData(url).then((res)=>{
    append(res);
     append_data(res)
     appendslide(res)
})

document.getElementById("delhi").addEventListener("click",()=>{
    let newurl = `https://newsapi.org/v2/everything/?q=delhi&apiKey=${Api_Key}`
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("mumbai").addEventListener("click",()=>{
    let newurl = `https://newsapi.org/v2/everything/?q=mumbai&apiKey=${Api_Key}`
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("pune").addEventListener("click",()=>{
    let newurl = `https://newsapi.org/v2/everything/?q=pune&apiKey=${Api_Key}`
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("banglore").addEventListener("click",()=>{
    let newurl = `https://newsapi.org/v2/everything/?q=banglore&apiKey=${Api_Key}`
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("chandigarh").addEventListener("click",()=>{
    let newurl = `https://newsapi.org/v2/everything/?q=chandigarh&apiKey=${Api_Key}`
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("ahmedabad").addEventListener("click",()=>{
    let newurl = `https://newsapi.org/v2/everything/?q=ahmedabad&apiKey=${Api_Key}`
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("lucknow").addEventListener("click",()=>{
    let newurl = `https://newsapi.org/v2/everything/?q=lucknow&apiKey=${Api_Key}`
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("kolkata").addEventListener("click",()=>{
    let newurl = `https://newsapi.org/v2/everything/?q=kolkata&apiKey=${Api_Key}`
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})

