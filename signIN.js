async function Login(){
    let login_data={
        username:document.getElementById("login-username").value,
        password:document.getElementById("login-password").value
    }
    login_data=JSON.stringify(login_data);
    let login_api_link="https://masai-api-mocker.herokuapp.com/auth/login";
    let response=await fetch(login_api_link,{
        method:'POST',
        body:login_data,
        headers:
        {
            'Content-Type':'application/json',
        },
    });
    let data= await response.json();
    console.log('data:',data)
    if(data.error==="false"){
        alart("LogIn successfully")
        window.location.href="./home.html";
    }else{
        alert("LogIn unsuccessfully");
        window.location.href="./home.html";

    }
    
}