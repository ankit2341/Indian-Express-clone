// 0f51aa777ab440708430933fba93d8a7

let Api_Key = "0f51aa777ab440708430933fba93d8a7";

let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${Api_Key}`

import {getData,append,append_data,appendslide} from "./subnavbar.js"

getData(url).then((res)=>{
    append(res);
     append_data(res)
     appendslide(res)
})
//banglore
document.getElementById("delhi").addEventListener("click",()=>{
    let newurl = `https://newsapi.org/v2/everything/?q=delhi&apiKey=${Api_Key}`
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("mumbai").addEventListener("click",()=>{
    let newurl = "https://newsapi.org/v2/everything/?q=mumbai&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("pune").addEventListener("click",()=>{
    let newurl = "https://newsapi.org/v2/everything/?q=pune&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("banglore").addEventListener("click",()=>{
    let newurl = "https://newsapi.org/v2/everything/?q=banglore&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("chandigarh").addEventListener("click",()=>{
    let newurl = "https://newsapi.org/v2/everything/?q=chandigarh&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("ahmedabad").addEventListener("click",()=>{
    let newurl = "https://newsapi.org/v2/everything/?q=ahmedabad&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("lucknow").addEventListener("click",()=>{
    let newurl = "https://newsapi.org/v2/everything/?q=lucknow&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})
document.getElementById("kolkata").addEventListener("click",()=>{
    let newurl = "https://newsapi.org/v2/everything/?q=kolkata&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData(newurl).then((res)=>{
        append(res);
     append_data(res)
     appendslide(res)
    })
})


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


