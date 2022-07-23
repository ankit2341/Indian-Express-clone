let Api_Key = "0f51aa777ab440708430933fba93d8a7";
// 
// let Api_Key = "480870360edd4e4b9114fe8724deed7d";
import {getData,append,append_data,appendslide} from "./subnavbar.js"

let url = `https://newsapi.org/v2/everything/?q=delhi&apiKey=${Api_Key}`;
let query="mumbai"
getData(query).then((res)=>{
    append(res);
     append_data(res)
     appendslide(res)
})

document.getElementById("delhi").addEventListener("click",()=>{
    // let newurl = `https://newsapi.org/v2/everything/?q=delhi&apiKey=${Api_Key}`
    getData("delhi").then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("mumbai").addEventListener("click",()=>{
    // let newurl = `https://newsapi.org/v2/everything/?q=mumbai&apiKey=${Api_Key}`
    getData("mumbai").then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("pune").addEventListener("click",()=>{
    // let newurl = `https://newsapi.org/v2/everything/?q=pune&apiKey=${Api_Key}`
    getData("pune").then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("banglore").addEventListener("click",()=>{
    // let newurl = `https://newsapi.org/v2/everything/?q=banglore&apiKey=${Api_Key}`
    getData("banglore").then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("chandigarh").addEventListener("click",()=>{
    // let newurl = `https://newsapi.org/v2/everything/?q=chandigarh&apiKey=${Api_Key}`
    getData("chandigarh").then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("ahmedabad").addEventListener("click",()=>{
    // let newurl = `https://newsapi.org/v2/everything/?q=ahmedabad&apiKey=${Api_Key}`
    getData("ahmedabad").then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("lucknow").addEventListener("click",()=>{
    // let newurl = `https://newsapi.org/v2/everything/?q=lucknow&apiKey=${Api_Key}`
    getData("lucknow").then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("kolkata").addEventListener("click",()=>{
    // let newurl = `https://newsapi.org/v2/everything/?q=kolkata&apiKey=${Api_Key}`
    getData("kolkata").then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("chennai").addEventListener("click",()=>{
    // let newurl = `https://newsapi.org/v2/everything/?q=kolkata&apiKey=${Api_Key}`
    getData("chennai").then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("hyderabad").addEventListener("click",()=>{
    // let newurl = `https://newsapi.org/v2/everything/?q=kolkata&apiKey=${Api_Key}`
    getData("hyderabad").then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})


let searchresults=async()=>{
    var searchbox=document.getElementById("searchbox1").value;

    let url=`https://newsapi.org/v2/everything?q=${searchbox}&from=2022-07-20&sortBy=popularity&apiKey=db8356f1cb1749468c0c2af5dfddd0f5`

    let res=await fetch(url);
    let data=await res.json();
     searchdata=[];
    searchdata.push(data.articles);

    localStorage.setItem("searchdata",JSON.stringify(searchdata));
    localStorage.setItem("searchbox",JSON.stringify(searchbox));

    window.open("searchresults.html")

}