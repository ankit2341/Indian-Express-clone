// 0f51aa777ab440708430933fba93d8a7

let Api_Key = "0f51aa777ab440708430933fba93d8a7";

let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${Api_Key}`

let getData = async (url) => {
    let res = await fetch(url);
    let data = await res.json();
    console.log('data:', data)
    append(data.articles);
    append_data(data.articles)
}
getData(url)
let i = 0;
append = (data) => {
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


append_data = (data) => {
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
delhi = () => {
    let newurl = "https://newsapi.org/v2/everything/?q=delhi&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl);
}
mumbai = () => {
    let newurl = "https://newsapi.org/v2/everything/?q=mumbai&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl);
}
pune = () => {
    let newurl = "https://newsapi.org/v2/everything/?q=pune&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl);
}
banglore = () => {
    let newurl = "https://newsapi.org/v2/everything/?q=banglore&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl);
}
chandigarh = () => {
    let newurl = "https://newsapi.org/v2/everything/?q=chandigarh&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl);
}
ahmedabad = () => {
    let newurl = "https://newsapi.org/v2/everything/?q=ahmedabad&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl);
}
lucknow = () => {
    let newurl = "https://newsapi.org/v2/everything/?q=lucknow&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl);
}
kolkata = () => {
    let newurl = "https://newsapi.org/v2/everything/?q=kolkata&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl);
}


let data_slide = [
    {
        content: "Although Apple has made any dates official yet, the. iPhone 14 series is expected to arrive in September.  This year, leaks have suggested a lot about the new iPhone 14-series already, including majo… [+3353 chars]",
        title: "Apple iPhone 14 series: Leaks, rumours and everything we know so far - The Indian Express",
        publishedAt: "2022-07-20T05:25:32Z",
        description: "Apple iPhone 14 series: Check what we know about the new iPhone 14, iPhone 14 Max, iPhone 14 Pro and iPhone 14 Pro Max so far.",
        urlToImage: "https://images.indianexpress.com/2022/07/iPhone-14-Pro-Ian-Zelbo.jpg"
    },
    {
        content: "Astronomers have spotted in a galaxy adjacent to our Milky Way what they are calling a cosmic \"needle in a haystack\" a black hole that not only is classified as dormant but appears to have been born ",
        description: "Astronomers have spotted in a galaxy adjacent to our Milky Way what they are calling a cosmic \"needle in a haystack\" a black hole that not only is classified as dormant but appears to have been born without the explosion of a dying star.",
        title: "First dormant black hole discovered deemed a 'needle in a haystack' - CGTN",
        publishedAt: "2022-07-20T05:22:00Z",
        urlToImage: "https://news.cgtn.com/news/2022-07-20/First-dormant-black-hole-discovered-deemed-a-needle-in-a-haystack--1bOw5wNcyqY/img/1d1984005fad470b9a8a5d535ec16e8c/1d1984005fad470b9a8a5d535ec16e8c-750.png"
    }
]

let appendslide=(data)=>{
let container=document.getElementById("slideshowdata");
container.innerHTML=null;
data.forEach((el)=>{
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
})
}
appendslide(data_slide)