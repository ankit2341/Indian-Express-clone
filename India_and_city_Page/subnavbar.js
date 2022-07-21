export let getData = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    console.log('data:', data)
    return data.articles
    // append(data.articles);
    // append_data(data.articles)
}

export let append = (data) => {
    let i = 0;
    let container = document.getElementById("slideshowdiv");
    container.innerHTML = null;
    setInterval(() => {
        let { urlToImage, title } = data[i++];
        if (urlToImage == undefined) {
            urlToImage = "https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-bandra-worli-sea-link-mumbai.jpg";
        }
        let image = document.createElement("img");
        image.src = urlToImage;
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
    }, 5000)
}

export let append_data = (data) => {
    let container = document.getElementById("india_page");
    container.innerHTML = null;
    data.forEach((el) => {
        let { urlToImage, title, description, content, publishedAt } = el;
        if (urlToImage != null && title != null && description != null && content != null) {
            let image = document.createElement("img");
            image.src = urlToImage;
            let divimage = document.createElement("div");
            divimage.append(image);
            let name = document.createElement("h3");
            name.innerText = title;
            let date = document.createElement("p");
            date.innerText = publishedAt;
            let decs = document.createElement("p");
            decs.innerText = description;
            let divcont = document.createElement("div");
            divcont.setAttribute("id", "content")
            divcont.append(name, date, decs)
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

export let appendslide=(data)=>{
    let container=document.getElementById("slideshowdata");
    container.innerHTML=null;
    data.forEach((el,i)=>{
        if(i>data.length-3) {
        let { urlToImage, title } = el;
    let div=document.createElement("div");
    let image = document.createElement("img");
    image.src = urlToImage;
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