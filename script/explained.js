let api_key= '480870360edd4e4b9114fe8724deed7d';
let url='https://newsapi.org/v2/everything?q=explained&apiKey=480870360edd4e4b9114fe8724deed7d';

let getData= async()=>{

    let res= await fetch(url);
    let data= await res.json();
    console.log(data);
    append(data.articles)
}
getData()

let append = (data)=>{
    let news= document.getElementById('news');
    data.forEach((el)=>{
        let img= document.createElement('img')
        img.src= el.urlToImage;
        let h3= document.createElement('h3')
        h3.innerText=`Explained: ${el.title}`;
        let content= document.createElement('div');
        content.append(img,h3);
        content.addEventListener("click", ()=>{
            localStorage.setItem("clicked_item", JSON.stringify(el))
        })
        news.append(content);

    })
}