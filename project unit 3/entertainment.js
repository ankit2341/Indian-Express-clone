 // let array=JSON.parse(localStorage.getItem("opinion_news")) || [];
 let container=document.getElementById('container')
 let key='d311e2eb08ee4adaa3973e8759545dec'
 let url=`https://newsapi.org/v2/everything?q=Apple&from=2022-07-20&sortBy=popularity&apiKey=d311e2eb08ee4adaa3973e8759545dec`
 async function fetchdata(url){

     let res=await fetch(url)
     let data=await res.json()
     appenddata(data.articles)
     console.log(data.articles)
 }
 fetchdata(url)
 

 function appenddata(data){
     container.innerHTML=null;
     data.forEach((el)=>{
         let div=document.createElement("div");

         let image=document.createElement('img');
         image.src=el.urlToImage;
         let imagediv=document.createElement("div");
         imagediv.append(image);

         let author=document.createElement("h3");
         author.innerText=el.author
 

         let content=document.createElement("p");
         content.innerText=el.content

         let description=document.createElement("h3");
         description.innerText=el.description;

         let title=document.createElement("h1");
         title.innerText=el.title

     let divcontent=document.createElement("div");
     divcontent.append(title,author,content,description)
         div.append(imagediv,divcontent);
         div.addEventListener("click",()=>{
             localStorage.setItem("clicked_item",JSON.stringify(el))
         })
         container.append(div)

     //     let obj={
     //     image:el.urlToImage,
     //     author:el.author,
     //     content:el.content,
     //     description:el.description,
     //     title:el.title,
     //  }
     // array.push(obj)
     // localStorage.setItem("entertainment_news",JSON.stringify(array));
     })
        
 }
 
 document.getElementById("entertainment").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=entertainment&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })

 document.getElementById("bollywood").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=bollywood&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })

 document.getElementById("hollywood").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=hollywood&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })

 document.getElementById("television").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=television&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })

 document.getElementById("tamil").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=tamil&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })

 document.getElementById("telugu").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=telugu&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })

 document.getElementById("malayalam").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=malayalam&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })

 document.getElementById("reviews").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=reviews&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })

 document.getElementById("webseries").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=webseries&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })
 