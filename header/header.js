let header=()=>{

    return `

    <div id="tophead">
    <div>ENGLISH</div>
    <div>தமிழ்</div>
    <div>বাংলা</div>
    <div>മലയാളം</div>
    <div>हिन्दी</div>
    <div>मराठी</div>
</div>

<div id="middlehead">
    <div id="follow">
     <div>Follow us:</div>
     <div id="followus">
        <img id="twitter" src="https://indianexpress.com/wp-content/themes/indianexpress/images/fb-followus.svg" alt="">
        <img id="fb" src="https://indianexpress.com/wp-content/themes/indianexpress/images/twitter-followus.svg" alt="">
     </div>
    </div>
    
    <div id="logo">
    <div>
        <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg" alt="">
    </div>
    <div>
        <p id="date"></p>
    </div>
</div>
</div>

<div id="bottomhead">
    <div><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20" height="20" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96zM416 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288H416C433.7 288 448 302.3 448 320C448 337.7 433.7 352 416 352zM0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192zM416 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480z"/></svg></div>
    <div>Home</div>
    <div>Explained</div>
    <div>Political Pulse</div>
    <div>India</div>
    <div>Cities</div>
    <div>Entertainment</div>
    <div>Sports</div>
    <div>Education</div>
    <div>Sign in</div>
    <input type="text" id="searchbox1" placeholder="Type to Search">
    <div onClick="searchresults()"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20" height="20" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg></div>
    
</div>



`
}

export default header;