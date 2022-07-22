let api_key= '480870360edd4e4b9114fe8724deed7d';
// let url=`https://newsapi.org/v2/everything?q=explained&apiKey=${api_key}`;

export let getData= async(url)=>{

    let res= await fetch(url);
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
        let { urlToImage, title, description, content, publishedAt } = el;
        if (urlToImage != null && title != null && description != null && content != null) {
        if(i>data.length-2) {
        let { urlToImage, title } = el;
    let div=document.createElement("div");
    let image = document.createElement("img");
    image.src = urlToImage;
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
        let { urlToImage, title, description, content, publishedAt } = el;
        if (urlToImage != null && title != null && description != null && content != null) {
        let img= document.createElement('img')
        img.src= el.urlToImage;
        let h3= document.createElement('h3')
        h3.innerText=`Explained: ${el.title}`;
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