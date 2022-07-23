import {header,footer} from "../header/header.js";

document.getElementById("header").innerHTML=header();
document.getElementById("footer").innerHTML=footer();

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
// -----------------------------------------------------------------------------------------------------------------


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c71164da45msh1f47a14d576454dp1f583ajsn5864dad38a50',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
};
// let query="narendra modi";

// fetch(`https://free-news.p.rapidapi.com/v1/search?q=${query}&lang=en`, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response.articles))
// 	.catch(err => console.error(err));




// ---------------------------------------------topnew----------------------------------------------------------------
    



let gettopnew=()=>{


    setTimeout(() => {
       
        fetch(`https://free-news.p.rapidapi.com/v1/search?q=headlines&lang=en`, options)
	.then(function(response){return response.json()})
	.then(function(response){
        console.log(response.articles)
        appendtopnew(response.articles);
    })
	.catch(err => console.error(err));

      }, "1000"); 

    
    
}

gettopnew();

let appendtopnew=(data)=>{
    let trending=document.getElementById("topnewstories");

    let div=document.createElement("div");
    let h3=document.createElement("h4");
    h3.innerText=data[0].title;

    let img=document.createElement("img");
    img.src=data[0].media;

    let p=document.createElement("p");
    p.innerText=data[0].published_date;

    div.append(h3,img,p);
    div.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[0]));
        window.location.href="../landingpage/landing.html";
    })
    trending.append(div);


      
    let topnewstoriesside=document.getElementById("topnewstories-side");
   for(let i=5;i<=10;i++){
      let div=document.createElement("div");

      let p=document.createElement("p");
      p.innerText=data[i].title;
      
      div.append(p);

      div.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[i]));
        window.location.href="../landingpage/landing.html";
    })
      
      topnewstoriesside.append(div);
   }
}




// ----------------------------------------------------trending--------------------------------------------------


//const trendingurl=`https://newsapi.org/v2/everything?q=trending&from=2022-07-20&sortBy=popularity&apiKey=0f51aa777ab440708430933fba93d8a7`;

let gettrending=async()=>{

    setTimeout(() => {
       
        fetch(`https://free-news.p.rapidapi.com/v1/search?q=trending&lang=en`, options)
	.then(function(response){return response.json()})
	.then(function(response){
        console.log(response.articles)
        appendtrending(response.articles);
    })
	.catch(err => console.error(err));

      }, "3000"); 

    
}

gettrending()

let appendtrending=(data)=>{
    let trending=document.getElementById("trending");

    for(let i=11;i<=21;i++){
        let div=document.createElement("div");

        let h3=document.createElement("p");
        h3.innerText=data[i].title;
    
        let img=document.createElement("img");
        img.src=data[i].media;

        div.addEventListener("click",()=>{
            localStorage.setItem("clicked_item",JSON.stringify(data[i]));
            window.location.href="../landingpage/landing.html";
        })
    
        div.append(img,h3);
        trending.append(div);
    }
   
    let topnewstoriesside=document.getElementById("trending-side");
   for(let i=0;i<=10;i++){
      let div=document.createElement("div");

      let p=document.createElement("p");
      p.innerText=data[i].title;

      div.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[i]));
        window.location.href="../landingpage/landing.html";
    })

      div.append(p);
      
      topnewstoriesside.append(div);
   }
}


// --------------------------------------------mumbai news------------------------------



//const mumbaiurl=`https://newsapi.org/v2/everything?q=mumbai&from=2022-07-20&sortBy=popularity&apiKey=0f51aa777ab440708430933fba93d8a7`;

let getmumbai=async()=>{
    setTimeout(() => {
       
        fetch(`https://free-news.p.rapidapi.com/v1/search?q=mumbai&lang=en`, options)
	.then(function(response){return response.json()})
	.then(function(response){
        console.log(response.articles)
        appendmumbai(response.articles);
    })
	.catch(err => console.error(err));

      }, "5000"); 
    
}

getmumbai();

let appendmumbai=(data)=>{
    let trending=document.getElementById("mumbai");

    let div=document.createElement("div");
    let h3=document.createElement("h4");
    h3.innerText=data[0].title;

    let img=document.createElement("img");
    img.src=data[0].media;

    let p=document.createElement("p");
    p.innerText=data[0].published_date;

    div.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[0]));
        window.location.href="../landingpage/landing.html";
    })

    div.append(h3,img,p);
    trending.append(div);


      
    let topnewstoriesside=document.getElementById("mumbai-side");
   for(let i=1;i<=6;i++){
      let div=document.createElement("div");

      let p=document.createElement("p");
      p.innerText=data[i].title;

      div.append(p);

      div.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[i]));
        window.location.href="../landingpage/landing.html";
    })
      
      topnewstoriesside.append(div);
   }
}


// -----------------------------------express explained------------------------------------



//const exexplainedurl=`https://newsapi.org/v2/everything?q=important&from=2022-07-20&sortBy=popularity&apiKey=0f51aa777ab440708430933fba93d8a7`;

let getexexplained=async()=>{

    setTimeout(() => {
       
        fetch(`https://free-news.p.rapidapi.com/v1/search?q=important&lang=en`, options)
	.then(function(response){return response.json()})
	.then(function(response){
        console.log(response.articles)
        appendexexplained(response.articles);
    })
	.catch(err => console.error(err));

      }, "7000"); 
    
}

getexexplained();

let appendexexplained=(data)=>{
  let expressexplained=document.getElementById("express-explained");
     let i=7;
        setInterval(function(){
            if(i==11){
                i=7;
            }

            let img=document.createElement('img');
            img.src=data[i].media;

            img.addEventListener("click",()=>{
                localStorage.setItem("clicked_item",JSON.stringify(data[i]));
                window.location.href="../landingpage/landing.html";
            })
    
            expressexplained.append(img);
        i++;},1000);
       
    }


// -----------------------------------only on express---------------------------------------------


//const onlyonurl=`https://newsapi.org/v2/everything?q=exclusive&from=2022-07-20&sortBy=popularity&apiKey=0f51aa777ab440708430933fba93d8a7`
let getonlyon=async()=>{

    setTimeout(() => {
       
        fetch(`https://free-news.p.rapidapi.com/v1/search?q=world&lang=en`, options)
	.then(function(response){return response.json()})
	.then(function(response){
        console.log(response.articles)
        appendonlyon(response.articles);
    })
	.catch(err => console.error(err));

      }, "9000"); 
    
}

getonlyon();

let appendonlyon=(data)=>{
    let trending=document.getElementById("onlyon1");

    let div=document.createElement("div");
    let h3=document.createElement("h4");
    h3.innerText=data[0].title;

    let img=document.createElement("img");
    img.src=data[0].media;

    let p=document.createElement("p");
    p.innerText=data[0].published_date;

    div.append(img,h3,p);

    div.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[0]));
        window.location.href="../landingpage/landing.html";
    })
    trending.append(div);

    let trending1=document.getElementById("onlyon2");

    let div2=document.createElement("div");
    let img2=document.createElement("img");
    img2.src=data[1].media;

    let h32=document.createElement("p");
    h32.innerText=data[1].title;

    div2.append(img2,h32);

    div2.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[1]));
        window.location.href="../landingpage/landing.html";
    })

    let div3=document.createElement("div");
    let img3=document.createElement("img");
    img3.src=data[2].media;

    let h33=document.createElement("p");
    h33.innerText=data[2].title;

    div3.append(img3,h33);

    div3.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[2]));
        window.location.href="../landingpage/landing.html";
    })

    trending1.append(div2,div3);

      
    let topnewstoriesside=document.getElementById("onlyon-side");
   for(let i=3;i<=8;i++){
      let div=document.createElement("div");

      let p=document.createElement("p");
      p.innerText=data[i].title;

      div.append(p);

      div.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[i]));
        window.open("landing.html");
    })
      
      topnewstoriesside.append(div);
   }
}


// -------------------------------------------entertainment-------------------------------------------


//const entertainurl=`https://newsapi.org/v2/everything?q=hollywood&from=2022-07-20&sortBy=popularity&apiKey=0f51aa777ab440708430933fba93d8a7`;

let getentertain=async()=>{

    setTimeout(() => {
       
        fetch(`https://free-news.p.rapidapi.com/v1/search?q=bollywood&lang=en`, options)
	.then(function(response){return response.json()})
	.then(function(response){
        console.log(response.articles)
        appendentertain(response.articles);
    })
	.catch(err => console.error(err));

      }, "11000"); 
    
}

getentertain();

let appendentertain=(data)=>{
    let trending=document.getElementById("enteron1");

    let div=document.createElement("div");
    let h3=document.createElement("h4");
    h3.innerText=data[0].title;

    let img=document.createElement("img");
    img.src=data[0].media;

    let p=document.createElement("p");
    p.innerText=data[0].published_date;
    p.style.marginTop="20px"

    div.append(img,h3,p);

    div.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[0]));
        window.location.href="../landingpage/landing.html";
    })
    trending.append(div);

    let trending1=document.getElementById("enteron2");

    let div2=document.createElement("div");
    let img2=document.createElement("img");
    img2.src=data[1].media;

    let h32=document.createElement("p");
    h32.innerText=data[1].title;

    div2.append(img2,h32);
    div2.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[1]));
        window.location.href="../landingpage/landing.html";
    })

    let div3=document.createElement("div");
    let img3=document.createElement("img");
    img3.src=data[2].media;

    let h33=document.createElement("p");
    h33.innerText=data[2].title;

    div3.append(img3,h33);
    div3.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[2]));
        window.location.href="../landingpage/landing.html";
    })

    trending1.append(div2,div3);

      
    let topnewstoriesside=document.getElementById("enteron-side");
   for(let i=3;i<=8;i++){
      let div=document.createElement("div");

      let p=document.createElement("p");
      p.innerText=data[i].title;

      div.append(p);
      div.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[i]));
        window.location.href="../landingpage/landing.html";
    })
      
      topnewstoriesside.append(div);
   }
}



// ---------------------------------------sports-----------------------------------------------



//const sporturl=`https://newsapi.org/v2/everything?q=football&from=2022-07-20&sortBy=popularity&apiKey=0f51aa777ab440708430933fba93d8a7`;

let getsport=async()=>{

    setTimeout(() => {
       
        fetch(`https://free-news.p.rapidapi.com/v1/search?q=cricket&lang=en`, options)
	.then(function(response){return response.json()})
	.then(function(response){
        console.log(response.articles)
        appendsport(response.articles);
    })
	.catch(err => console.error(err));

      }, "13000"); 
    
}

getsport();

let appendsport=(data)=>{
    let trending=document.getElementById("sporton1");

    let div=document.createElement("div");
    let h3=document.createElement("h4");
    h3.innerText=data[0].title;

    let img=document.createElement("img");
    img.src=data[0].media;

    let p=document.createElement("p");
    p.innerText=data[0].published_date;

    div.append(img,h3,p);
    div.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[0]));
        window.location.href="../landingpage/landing.html";
    })

    trending.append(div);

    let trending1=document.getElementById("sporton2");

    let div2=document.createElement("div");
    let img2=document.createElement("img");
    img2.src=data[1].media;

    let h32=document.createElement("p");
    h32.innerText=data[1].title;

    div2.append(img2,h32);
    div2.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[1]));
        window.location.href="../landingpage/landing.html";
    })

    let div3=document.createElement("div");
    let img3=document.createElement("img");
    img3.src=data[2].media;

    let h33=document.createElement("p");
    h33.innerText=data[2].title;

    div3.append(img3,h33);

    div3.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[2]));
        window.location.href="../landingpage/landing.html";
    })

    trending1.append(div2,div3);

      
    let topnewstoriesside=document.getElementById("sporton-side");
   for(let i=3;i<=8;i++){
      let div=document.createElement("div");

      let p=document.createElement("p");
      p.innerText=data[i].title;

      div.append(p);
      div.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[i]));
        window.location.href="../landingpage/landing.html";
    })
      
      topnewstoriesside.append(div);
   }
}


// ------------------------------------------education-----------------------------------


//const educationurl=`https://newsapi.org/v2/everything?q=education&from=2022-07-20&sortBy=popularity&apiKey=0f51aa777ab440708430933fba93d8a7`;

let geteducation=async()=>{

    setTimeout(() => {
       
        fetch(`https://free-news.p.rapidapi.com/v1/search?q=education&lang=en`, options)
	.then(function(response){return response.json()})
	.then(function(response){
        console.log(response.articles)
        appendeducation(response.articles);
    })
	.catch(err => console.error(err));

      }, "15000"); 
    
}

geteducation();

let appendeducation=(data)=>{
    let trending=document.getElementById("educationn");

    let div=document.createElement("div");
    let h3=document.createElement("h4");
    h3.innerText=data[0].title;

    let img=document.createElement("img");
    img.src=data[0].media;

    let p=document.createElement("p");
    p.innerText=data[0].published_date;

    div.append(h3,img,p);
    div.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[0]));
        window.location.href="../landingpage/landing.html";
    })
    trending.append(div);


      
    let topnewstoriesside=document.getElementById("educationn-side");
   for(let i=1;i<=6;i++){
      let div=document.createElement("div");

      let p=document.createElement("p");
      p.innerText=data[i].title;

      div.append(p);
      div.addEventListener("click",()=>{
        localStorage.setItem("clicked_item",JSON.stringify(data[i]));
        window.location.href="../landingpage/landing.html";
    })
      
      topnewstoriesside.append(div);
   }
}