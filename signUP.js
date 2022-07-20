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
}