let data=JSON.parse(localStorage.getItem("clicked_item"));
console.log('data:', data)

let {title,summary,published_date,media}=data

let head=document.getElementById("heading")
head.innerText=title;

let sub_head=document.getElementById("sub_heading")
sub_head.innerHTML=summary;

// publishedAt
let date=document.getElementById("date");
date.innerText=`Updated: ${published_date}`

let image=document.getElementById("image");
image.src=media;

let contents=document.getElementById("contentappend");
contents.innerText=summary+summary+summary;

let contented=document.getElementById("contentappend1");
contented.innerText=summary+summary+summary;

let Search_video=async (title)=>{
    let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title}&key=AIzaSyCbH_8H1YiQuNe9IIbard7T61S9q8JH94s`);
    let data=await res.json()
    let id= data.items[0].id.videoId;
    let video=document.getElementById("playvideo");
    video.src=`https://www.youtube.com/embed/${id}`
}
Search_video(title);