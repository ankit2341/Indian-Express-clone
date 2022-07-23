// let Api_Key = "d099191f7b994f9fa4cb81321dadf966";

// let url = `https://newsapi.org/v2/everything/?q=Education&apiKey=${Api_Key}`

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c71164da45msh1f47a14d576454dp1f583ajsn5864dad38a50',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
};
let q="Education";
let getData = async (q) => {
    let res = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${q}&lang=en`, options);
    let data = await res.json();
    console.log('data:', data)
    append(data.articles);
    append_data(data.articles)
}
getData(q)
let i = 3;
append = (data) => {
    let container = document.getElementById("slideshowdiv");
    container.innerHTML = null;
    setInterval(() => {
        let { media, title } = data[i++];
        if (media == undefined) {
            media = "https://images.indianexpress.com/2022/07/icai759.jpg?resize=450,250";
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


append_data = (data) => {
    let container = document.getElementById("educaton_page");
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
JOBS = () => {
    // let newurl = "https://newsapi.org/v2/everything/?q=JOBS&apiKey=0f51aa777ab440708430933fba93d8a7"
        getData("JOBS");
   
   
}
STUDENTSVOICE = () => {
    // let newurl = "https://newsapi.org/v2/everything/?q=STUDENTS%20VOICE&apiKey=0f51aa777ab440708430933fba93d8a7"
        getData("student");
   
}
STUDYABROAD = () => {
    // let newurl = "https://newsapi.org/v2/everything/?q=STUDY%20ABROAD&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData("study");
}
MOCKTEST = () => {
    // let newurl = "https://newsapi.org/v2/everything/?q=MOCK%20TEST&apiKey=0f51aa777ab440708430933fba93d8a7"
    getData("test");
}


let data_slide = [
    {
        title: "TikTok is cutting jobs around the world",
        published_date: "2022-07-19T06:57:58Z",
        summary: "Some TikTok employees have already lost their jobs, while others are told to prepare for a meeting with the HR department as part of the video platform's global restructuring efforts, Wired reports. According to the publication, European employees were warned…",
        media: "https://s.yimg.com/os/creatr-images/2020-02/2f6fe710-4ddf-11ea-b3ff-ca9d067be64b"
    },
    {
        summary: "RMT union to stage industrial action in ongoing dispute over pay, jobs and conditionsMembers of the RMT union at rail operators and Network Rail will strike on 27 July in an ongoing dispute over pay, jobs and conditions, the union has announced.More to follow…",
        title: "Workers at British rail operators and Network Rail to strike on 27 July",
        published_date: "2022-07-13T14:03:11Z",
        media: "https://i.guim.co.uk/img/media/6b9e47a38b88389ecb9bfe84abb5796a299b9d28/0_0_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0977d4b0c9fd93967296614cf4b79c0f"
    }
]

let appendslide=(data)=>{
let container=document.getElementById("slideshowdata");
container.innerHTML=null;
data.forEach((el)=>{
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
})
}
appendslide(data_slide)



// let url2 = `https://newsapi.org/v2/everything/?q=BEST%20OF%20EXPRESS&apiKey=${Api_Key}`


let getData2 = () => {
    setTimeout(async()=>{
        let res = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=BEST%20OF%20EXPRESS&lang=en`, options);
        let data2 = await res.json();
        console.log('data:', data2)
        
        append_data2(data2.articles)
    },2000)
    
}
getData2()

append_data2 = (data2) => {
    let container = document.getElementById("sidebar");
    container.innerHTML = null;
    data2.forEach((el) => {
        let {media,title} = el;
        if (media != null && title != null ) {
            let image = document.createElement("img");
            image.src = media;
            
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


let data_grid = [
    {
        title: "Tesla cuts jobs, closes office - Reuters.com",
        publishedAt: "2022-06-29T13:49:02Z",
        summary: "Tesla has shuttered its office in San Mateo, California and laid off roughly 200 employees working on its Autopilot driver-assistant system there, one of the people told Reuters, in a move seen as accelerating cost-cutting. Julian Satterthwaite reports.",
        media: "https://static.reuters.com/resources/r/?d=20220629&i=OV833029062022RP1&r=OV833029062022RP1&t=2","publishedAt":"2022-06-29T13:49:02Z"
    },
    {
        summary: "Panasonic announced on Wednesday that it's inked a $4 billion investment deal with the state of Kansas to build and operate the world's largest battery cell production facility. The company has already identified a site near the city of De Soto, at a former a…",
        title: "Panasonic is building the world's largest EV battery factory in Kansas",
        publishedAt: "2022-07-13T23:20:07Z",
        media: "https://s.yimg.com/os/creatr-uploaded-images/2022-07/97ee8cf0-0300-11ed-9f7b-22b23f86a9c5"
    },
    {
        summary: "US company says recruitment drive will take permanent workforce in Britain to 75,000Amazon is creating more than 4,000 permanent jobs across the UK this year, the online company has announced.The US firm said the recruitment drive would bring its permanent wo…",
        title: "Amazon to create more than 4,000 jobs in UK",
        publishedAt: "2022-07-15T07:10:37Z",
        media: "https://i.guim.co.uk/img/media/2bf24e7d435833d3145a1a4dafa27b5f50eb4e19/165_9_2070_1243/master/2070.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7e40a5a0f44fb3547388f87fe4d1008a"
    }
]

let appendgrid=(data)=>{
let container=document.getElementById("gridDiv");
container.innerHTML=null;
data.forEach((el)=>{
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
})
}
appendgrid(data_grid)
