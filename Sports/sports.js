 // let array=JSON.parse(localStorage.getItem("opinion_news")) || [];
 let container=document.getElementById('spt_container')
//  let key='d311e2eb08ee4adaa3973e8759545dec'
//  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=d311e2eb08ee4adaa3973e8759545dec`

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c71164da45msh1f47a14d576454dp1f583ajsn5864dad38a50',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
};


let query="in";
 async function fetchdata(query){
     
   
     let res=await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${query}&lang=en`, options)
     let data=await res.json()
     appenddata(data.articles)
     console.log(data.articles)
 }
 fetchdata(query) 
 

 function appenddata(data){
     container.innerHTML=null;
     data.forEach((el)=>{
      let { media, title, summary, published_date } = el;
        if (media != null && title != null && summary != null) {
         let div=document.createElement("div");

         let image=document.createElement('img');
         image.src=media;
         let imagediv=document.createElement("div");
         imagediv.append(image);

         let author=document.createElement("p");
         author.innerText=published_date
         author.setAttribute("id","auther")

         let descriptions=document.createElement("p");
         descriptions.innerText=title+title;

         let titles=document.createElement("h2");
         titles.innerText=title

     let divcontent=document.createElement("div");
     divcontent.append(titles,author,descriptions)
         div.append(imagediv,divcontent);
         div.addEventListener("click",()=>{
             localStorage.setItem("clicked_item",JSON.stringify(el))
             window.location.href="../landingpage/landing.html"
         })
           container.append(div)
      }
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
   //  let newurl=`https://newsapi.org/v2/everything/?q=sports&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("sports")
 })

 document.getElementById("cricket").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=cricket&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("cricket")
 })

 document.getElementById("tennis").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=tennis&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("tennis")
 })

 document.getElementById("wwe").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=wwe&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("wwe")
 })

 document.getElementById("photo").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=photo&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("photo")
 })

 document.getElementById("podcast").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=podcast&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("podcast")
 })

 document.getElementById("explained").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=explained&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("explained")
 })
 