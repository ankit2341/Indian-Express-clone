 // let array=JSON.parse(localStorage.getItem("opinion_news")) || [];
 let container=document.getElementById('ent_container')
//  let key='d311e2eb08ee4adaa3973e8759545dec'
//  let url=`https://newsapi.org/v2/everything?q=Apple&from=2022-07-20&sortBy=popularity&apiKey=d311e2eb08ee4adaa3973e8759545dec`

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c71164da45msh1f47a14d576454dp1f583ajsn5864dad38a50',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
};

let query="Apple"
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

         let titles=document.createElement("h1");
         titles.innerText=title

     let divcontent=document.createElement("div");
     divcontent.append(titles,author,descriptions)
     divcontent.style.padding="15px"
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
 
 document.getElementById("entertainment").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=entertainment&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("entertainment")
 })

 document.getElementById("bollywood").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=bollywood&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("bollywood")
 })

 document.getElementById("hollywood").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=hollywood&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("hollywood")
 })

 document.getElementById("television").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=television&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("television")
 })

 document.getElementById("tamil").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=tamil&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("tamil")
 })

 document.getElementById("telugu").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=telugu&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("telugu")
 })

 document.getElementById("malayalam").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=malayalam&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("malayalam")
 })

 document.getElementById("reviews").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=reviews&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("reviews")
 })

 document.getElementById("webseries").addEventListener("click",()=>{
   //  let newurl=`https://newsapi.org/v2/everything/?q=webseries&apiKey=d311e2eb08ee4adaa3973e8759545dec`
    fetchdata("webseries")
 })
 