let data=JSON.parse(localStorage.getItem("clicked_item"));
console.log('data:', data)

let {title,description,publishedAt,urlToImage,content}=data

let head=document.getElementById("heading")
head.innerText=title;

let sub_head=document.getElementById("sub_heading")
sub_head.innerHTML=description;

// publishedAt
let date=document.getElementById("date");
date.innerText=`Updated: ${publishedAt}`

let image=document.getElementById("image");
image.src=urlToImage;

let contents=document.getElementById("contentappend");
contents.innerText=content+content+content;

let contented=document.getElementById("contentappend1");
contented.innerText=content+content+content;

let Search_video=async (title)=>{
    let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title}&key=AIzaSyAIB4jHlWzc35ckthAE7Wsin748c3KGbF0`);
    let data=await res.json()
    let id= data.items[0].id.videoId;
    let video=document.getElementById("playvideo");
    video.src=`https://www.youtube.com/embed/${id}`
}
Search_video(title);