import header from "../header/header.js";

document.getElementById("header").innerHTML=header();

var twitter=document.getElementById("fb");
    twitter.addEventListener("click",function(){
        console.log("insia");
          window.open("https://twitter.com/IndianExpress?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor");
    })

    var fb=document.getElementById("twitter");
    fb.addEventListener("click",function(){
          window.open("https://www.facebook.com/indianexpress");
    })

var date = new Date().toUTCString();    
    document.getElementById("date").innerText = date;
    

const topnewurl=`https://newsapi.org/v2/everything?q=india&from=2022-07-20&sortBy=popularity&apiKey=27d4cbd01e5f40db8b1eacdeafffe25d`;

let gettopnew=async()=>{

    let res=await fetch(topnewurl);
    let data=await res.json();

    appendtopnew(data.articles);
    
}

gettopnew()

let appendtopnew=(data)=>{
    let trending=document.getElementById("topnewstories");

    let div=document.createElement("div");
    let h3=document.createElement("h4");
    h3.innerText=data[0].title;

    let img=document.createElement("img");
    img.src=data[0].urlToImage;

    let p=document.createElement("p");
    p.innerText=data[0].description;

    div.append(h3,img,p);
    trending.append(div);


      
    let topnewstoriesside=document.getElementById("topnewstories-side");
   for(let i=1;i<=6;i++){
      let div=document.createElement("div");

      let p=document.createElement("p");
      p.innerText=data[i].title;

      div.append(p);
      
      topnewstoriesside.append(div);
   }
}


// ----------------------------------------------------trending--------------------------------------------------


const trendingurl=`https://newsapi.org/v2/everything?q=trending&from=2022-07-20&sortBy=popularity&apiKey=27d4cbd01e5f40db8b1eacdeafffe25d`;

let gettrending=async()=>{

    let res=await fetch(trendingurl);
    let data=await res.json();

    appendtrending(data.articles);
    
}

gettrending()

let appendtrending=(data)=>{
    let trending=document.getElementById("trending");

    for(let i=11;i<=21;i++){
        let div=document.createElement("div");

        let h3=document.createElement("p");
        h3.innerText=data[i].title;
    
        let img=document.createElement("img");
        img.src=data[i].urlToImage;
    
        div.append(img,h3);
        trending.append(div);
    }
   
    let topnewstoriesside=document.getElementById("trending-side");
   for(let i=0;i<=10;i++){
      let div=document.createElement("div");

      let p=document.createElement("p");
      p.innerText=data[i].title;

      div.append(p);
      
      topnewstoriesside.append(div);
   }
}


// --------------------------------------------mumbai news------------------------------



const mumbaiurl=`https://newsapi.org/v2/everything?q=city&from=2022-07-20&sortBy=popularity&apiKey=27d4cbd01e5f40db8b1eacdeafffe25d`;

let getmumbai=async()=>{

    let res=await fetch(mumbaiurl);
    let data=await res.json();

    appendmumbai(data.articles);
    
}

getmumbai();

let appendmumbai=(data)=>{
    let trending=document.getElementById("mumbai");

    let div=document.createElement("div");
    let h3=document.createElement("h4");
    h3.innerText=data[0].title;

    let img=document.createElement("img");
    img.src=data[0].urlToImage;

    let p=document.createElement("p");
    p.innerText=data[0].description;

    div.append(h3,img,p);
    trending.append(div);


      
    let topnewstoriesside=document.getElementById("mumbai-side");
   for(let i=1;i<=6;i++){
      let div=document.createElement("div");

      let p=document.createElement("p");
      p.innerText=data[i].title;

      div.append(p);
      
      topnewstoriesside.append(div);
   }
}


// -----------------------------------express explained------------------------------------



const exexplainedurl=`https://newsapi.org/v2/everything?q=important&from=2022-07-20&sortBy=popularity&apiKey=27d4cbd01e5f40db8b1eacdeafffe25d`;

let getexexplained=async()=>{

    let res=await fetch(exexplainedurl);
    let data=await res.json();

    appendexexplained(data.articles);
    
}

getexexplained();

let appendexexplained=(data)=>{
  let expressexplained=document.getElementById("express-explained");
     let i=7;
        // setInterval(function(){
        //     if(i==11){
        //         i=7;
        //     }

        //     let img=document.createElement('img');
        //     img.src=data[i].urlToImage;
    
        //     expressexplained.append(img);
        // i++;},1000);
       
    }





