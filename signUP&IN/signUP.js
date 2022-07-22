async function Register(){
    let signup_data={
        name:document.getElementById("name").value,
                email:document.getElementById("email").value,
                password:document.getElementById("Password").value,
                username:document.getElementById("username").value,
                mobile:document.getElementById("mobile").value,
                description:document.getElementById("description").value,
     
    };
    signup_data=JSON.stringify(signup_data);
    let signup_api_link="https://masai-api-mocker.herokuapp.com/auth/register";
    //custome seting object
    //POST
    let response=await fetch(signup_api_link,{
        method:'POST',
        body:signup_data,
        headers:
        {
            'Content-Type':'application/json'
        }
    });
    let data= await response.json();
    console.log('data:',data)
    alert(data.message);
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
window.location.href="signIN.html";
},3000)

}