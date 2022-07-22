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
    <div><a href="index.html">Home</a></div>
    <div><a href="explained.html">Explained</a></div>
    <div><a href="politicalpulse.html">Political Pulse</a></div>
    <div><a href="india.html">India</a></div>
    <div><a href="city.html">Cities</a></div>
    <div><a href="entertainment.html">Entertainment</a></div>
    <div><a href="sports.html">Sports</a></div>
    <div><a href="education.html">Education</a></div>
    <div><a href="signIN.html">Sign in</a></div>
    <input type="text" id="searchbox1" placeholder="Type to Search">
    <div id="searchres" onClick="searchresults()"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20" height="20" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg></div>
    
</div>



`
}

let footer=()=>{

    return `

     <div id="inside-footer">
             <div id="footer-title">TOP CATEGORIES</div>
             <div id="footer-title-inside">
               <div id="footer-title-inside-li">
                <ul>
                  <li>Explained News</li>
                  <li>Delhi News</li>
                  <li>Health News</li>
                </ul>
               </div>

               <div id="footer-title-inside-li">
                <ul>
                  <li>Political Pulse</li>
                  <li>India News</li>
                  <li>Pune News</li>
                </ul>
               </div>

               <div id="footer-title-inside-li">
                <ul>
                  <li>Latest Opinion</li>
                  <li>Banglore News</li>
                  <li>Sports News</li>
                </ul>
               </div>

               <div id="footer-title-inside-li">
                <ul>
                  <li>Mumbai News</li>
                  <li>Bollywood News</li>
                  <li>Lifestyle News</li>
                </ul>
               </div>
                

             </div>

             <div id="footer-title">TRENDING NEWS</div>
             <div id="footer-title-inside">
               <div id="footer-title-inside-li">
                <ul>
                  <li>Horoscope</li>
                  <li>Dance classes for kids</li>
                  <li>Buy all access pass</li>
                  <li>Parliament Monsoon Session Live Updates</li>
                </ul>
               </div>

               <div id="footer-title-inside-li">
                <ul>
                  <li>India News</li>
                  <li>Entertainment News</li>
                  <li>Subscribe To The Indian Express</li>
                  <li>Modi,Yogi Posters in garbage</li>
                </ul>
               </div>

               <div id="footer-title-inside-li">
                <ul>
                  <li>Art and craft for kids</li>
                  <li>UPSE News/li>
                  <li>Buy digital premium</li>
                  <li>Madame Tussauds Marks Re-Entry In India</li>
                </ul>
               </div>

               <div id="footer-title-inside-li">
                <ul>
                  <li>Fitness class for kids</li>
                  <li>IPL 2022</li>
                  <li>Sri Lanka Crisis Live News Updates</li>
                  <li>Kanwar Yatri Killed In Road Accident</li>
                </ul>
               </div>
                

             </div>

             <div id="footer-title">LATEST STORIES</div>
             <div id="footer-title-inside">
               <div id="footer-title-inside-li">
                <ul>
                  <li>Eddie Murphy To Lead Prime Video’s Comedy Movie Candy Cane Lane</li>
                  <li>Punjab: Over 80% Commuters Willing To Pay Extra For Better Public Transport, Says RITES Report</li>
                </ul>
               </div>

               <div id="footer-title-inside-li">
                <ul>
                  <li>Bipartisan US Senate Group Introduces Bill Intended To Head Off Another January 6</li>
                  <li>3 Men Die Of Electrocution In Tamil Nadu, CM MK Stalin Announces Solatium</li>
                </ul>
               </div>

               <div id="footer-title-inside-li">
                <ul>
                  <li>Amazon Gift Card Scam: Fraudsters Now Use Picture Of High Court Chief Justice</li>
                  <li>Punjab: Arrest Of Robber Leads AGTF To Shooters ‘Involved’ In The Killing Of Moosewala</li>
                </ul>
               </div>

               <div id="footer-title-inside-li">
                <ul>
                  <li>Military Say A Pelosi Taiwan Trip ‘Not A Good Idea’, Says Joe Biden</li>
                  <li>Covid-19: Tamil Nadu Reports 2,116 Fresh Infections, Zero Deaths; 538 Cases In Chennai</li>
                </ul>
               </div>
                

             </div>

             <div id="second-footer">
                 <div id="second-footer-1">
                   <div id="followwe">
                     <h5>Follow us</h5>
                     <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-facebook.svg" alt="">
                     <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-twitter.svg" alt="">
                     <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-linkedin.svg" alt="">
                     <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-instagram.svg" alt="">
                     <h5>Download now</h5>
                     <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-android.svg" alt="">
                     <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-apple.svg" alt="">
                   </div>

                   <div>

                    <div id="wg">
                      <img id="wireguard" src="https://indianexpress.com/wp-content/themes/indianexpress/images/newsguard-logo-w.svg" alt="">
                      <p>The Indian Express website has been rated GREEN for its credibility and trustworthiness by Newsguard, a global service that rates news sources for their journalistic standards.</p>
                    </div>

                   </div>
                   
                 </div>

                 <div id="second-footer-2">
                    <div>
                      <ul>
                        <li>The Indian Express </li>
                        <li>  ieTamil.com
                          <li>The Financial Express</li>
                          <li> ieBangla.com</li>
                          <li> Loksatta</li>
                          <li>  ieMalayalam.com</li>
                            <li>  Jansatta</li>
                              <li>  inUth</li>
                      </ul>
                    </div>

                    <div>
                      <ul>
                        <li>  The ExpressGroup</li>
                        <li>  MyInsuranceClub</li>
                          <li>  Newsletters</li>
                            <li>  26/11 Stories of Strength</li>
                              <li>  Ramnath Goenka Excellence in Journalism Awards</li>
                                <li>  Online Classes for Kids</li>
                                  <li>  Light House Journalism</li>
                                    <li>  Compare Term Insurance</li>
                      </ul>
                    </div>
                 </div>

                 <div id="second-footer-3">
                    <ul>QUICK LINKS
                      <li>T&C</li>
                      <li> Privacy Policy</li>
                      <li> Advertise with Us</li>
                      <li> Brand Solutions</li>
                      <li>Contact Us</li>
                      <li>Subscribe</li>
                      <li> Statutory provisions on reporting (sexual offenses)</li>
                      <li> This website follows the DNPA’s code of conduct</li>
                      <li> CSR</li>
                    </ul>
                 </div>
             </div>

             <div id="footer-end">
                <div id="fe1">
                 <h6> Copyright © 2022 The Indian Express [P] Ltd. All Rights Reserved</h6>
                </div>
                <div id="fe2">
                  <img src="https://indianexpress.com/wp-content/themes/indianexpress/images/vip-powered-logo.png" alt="">
                </div>
             </div>
        </div>
    
    `
}

export {header,footer};