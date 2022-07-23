// let api_key= '480870360edd4e4b9114fe8724deed7d';
// let url=`https://newsapi.org/v2/everything?q=explained&apiKey=${api_key}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c71164da45msh1f47a14d576454dp1f583ajsn5864dad38a50',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
};

export let getData= async(query)=>{

    let res= await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${query}&lang=en`, options);
    let data= await res.json();
    console.log(data);
    return(data.articles);
    // append_img(data.articles);
}
// getData()

let i=0;

export let append_img=(data)=>{
    let container=document.getElementById("big_img");
    container.innerHTML=null;
    data.forEach((el,i)=>{
        let { media, title, summary, published_date } = el;
        if (media != null && title != null && summary != null) {
        if(i>data.length-2) {
    let div=document.createElement("div");
    let image = document.createElement("img");
    image.src = media;
    let name = document.createElement("h4");
        name.innerText = title;
        div.setAttribute("id", "content")
        div.append(image,name);
        div.addEventListener("click",()=>{
            localStorage.setItem("clicked_item",JSON.stringify(el));
            window.location.href="../landingpage/landing.html"
        })
        container.append(div)
    }
}
    })
    }


 export let append = (data)=>{
    let news= document.getElementById('news');
    news.innerHTML=null;
    data.forEach((el)=>{
        let { media, title, summary, published_date } = el;
        if (media != null && title != null && summary != null) {
        let img= document.createElement('img')
        img.src= media;
        let h3= document.createElement('h3')
        h3.innerText=`Explained: ${title}`;
        let content= document.createElement('div');
        
        content.append(img,h3);
        content.addEventListener("click", ()=>{
            localStorage.setItem("clicked_item", JSON.stringify(el))
            window.location.href="../landingpage/landing.html"
        })
        news.append(content);
    }
    })

    
}