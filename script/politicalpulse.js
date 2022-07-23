// let api_key= '480870360edd4e4b9114fe8724deed7d';

// let url=   `https://newsapi.org/v2/everything?q=political&apiKey=${api_key}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c71164da45msh1f47a14d576454dp1f583ajsn5864dad38a50',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
};
// let query="mumbai";
let getData=async()=>{
   let res= await fetch(`https://free-news.p.rapidapi.com/v1/search?q=politics&lang=en`, options);
   let data= await res.json();
   console.log(data)
   append_data(data.articles);
   appendslide(data.articles);
   append(data.articles);
}

getData();


let append = (data) => {
    let i = 0;
    let container = document.getElementById("slideshowdiv");
    container.innerHTML = null;
    setInterval(() => {
        let { media, title } = data[i++];
        if (media == undefined) {
            media = "https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-1.jpg";
        }
        let image = document.createElement("img");
        image.src = media;
        let name = document.createElement("h3");
        name.innerText = title;
        container.innerHTML = null;
        if (i >= data.length - 1) {
            i = 0;
        }
        container.append(image, name);
        container.addEventListener("click",()=>{
            localStorage.setItem("clicked_item",JSON.stringify(data[i]));
            window.location.href="../landingpage/landing.html"
        })
    }, 3000)
}




let appendslide=(data)=>{
    let container=document.getElementById("slideshowdata");
    container.innerHTML=null;
    data.forEach((el,i)=>{
        if(i>data.length-3) {
        let { media, title } = el;
    let div=document.createElement("div");
    let image = document.createElement("img");
    image.src = media;
    let name = document.createElement("h4");
        name.innerText = title;
        div.append(image,name);
        div.addEventListener("click",()=>{
            localStorage.setItem("clicked_item",JSON.stringify(el));
            window.location.href="../landingpage/landing.html"
        })
        container.append(div)
    }
    })
    }
    


    let append_data = (data) => {
        let container = document.getElementById("political_page");
        container.innerHTML = null;
        data.forEach((el) => {
            let { media, title, summary, published_date } = el;
        if (media != null && title != null && summary != null) {
            let image = document.createElement("img");
            image.src = media;
            let divimage = document.createElement("div");
            divimage.append(image);
            let name = document.createElement("h3");
            name.innerText = title;
            let date = document.createElement("p");
            date.innerText = published_date;
            let decs = document.createElement("p");
            decs.innerText = title+title;
            let divcont = document.createElement("div");
            divcont.setAttribute("id", "content")
            divcont.append(name, date,decs)
                let div = document.createElement("div");
                div.addEventListener("click",()=>{
                    localStorage.setItem("clicked_item",JSON.stringify(el));
                    window.location.href="../landingpage/landing.html"
                })
                div.append(divimage, divcont)
                container.append(div);
    
            }
    
        })
    }



    // side bar

    
let url2 = `https://newsapi.org/v2/everything/?q=BEST%20OF%20EXPRESS&apiKey=${api_key}`;

let getData2 = async () => {
    let res = await fetch(url2);
    let data2 = await res.json();
    console.log('data:', data2)
    
    append_data2(data2.articles)
}
getData2()

let append_data2 = (data2) => {
    let container = document.getElementById("side_bar");
    container.innerHTML = null;
    data2.forEach((el) => {
        let {urlToImage,title} = el;
        if (urlToImage != null && title != null ) {
            let image = document.createElement("img");
            image.src = urlToImage;
            
            let decs = document.createElement("p");
            decs.innerText = title;
            let divcont = document.createElement("div");
            divcont.setAttribute("id", "content2")
            
           
            divcont.addEventListener("click",()=>{
                localStorage.setItem("clicked_item",JSON.stringify(el));
                window.location.href="../landingpage/landing.html"
            })
            divcont.append(image,decs)
            container.append(divcont);

        }

    })
}