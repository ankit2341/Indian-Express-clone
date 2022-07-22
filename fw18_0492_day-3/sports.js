 // let array=JSON.parse(localStorage.getItem("opinion_news")) || [];
 let container=document.getElementById('container')
 let key='d311e2eb08ee4adaa3973e8759545dec'
 let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=d311e2eb08ee4adaa3973e8759545dec`
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
 document.getElementById("sports").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=sports&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })

 document.getElementById("cricket").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=cricket&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })

 document.getElementById("tennis").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=tennis&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })

 document.getElementById("wwe").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=wwe&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })

 document.getElementById("photo").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=photo&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })

 document.getElementById("podcast").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=podcast&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })

 document.getElementById("explained").addEventListener("click",()=>{
    let newurl=`https://newsapi.org/v2/everything/?q=explained&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata(newurl)
 })
 