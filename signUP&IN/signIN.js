async function Login(){
    let login_data={
        username:document.getElementById("login-username").value,
        password:document.getElementById("login-password").value
    }
    login_data=JSON.stringify(login_data);
    let login_api_link="https://mocker-api.onrender.com/users";
    let response=await fetch(`${login_api_link}`)
    let data= await response.json();
    console.log('data:',data);
    
    let email_user=document.getElementById("login-username").value
    let filtereddata=data.filter((el)=>{
      return el.email===email_user
    });
    console.log(filtereddata)
    
    if(filtereddata.length>0){
        alert("LogIn successfully");
        localStorage.removeItem("logindata");
        localStorage.setItem("logindata",JSON.stringify(filtereddata))
        // document.querySelector("signIN").addEventListener("click", () => {
        for(let i=0;i<=1;i++){
            var count = 200;
var defaults = {
  origin: { y: 0.7 }
};
function fire(particleRatio, opts) {
  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
}
fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 200,
  startVelocity: 45,
});
        }
// });
setTimeout(()=>{
     window.location.href="index.html";
},3000)
        
    }else{
        alert("LogIn unsuccessfully");
        window.location.href="signUP.html"
       
    }
    
}