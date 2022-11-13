let mainNavbar=()=>{
    return `<div id="abDiv1" class="hoverContent"><span>BEST</span> <span>BUY</span><i id="tradeMark" class="fa-solid fa-trademark"></i><img src="./images/Screenshot 2022-11-08 233914.png" alt="">  </div>
    <div id="abDiv2" class="hoverContent">
        <i id="abMenuLogo" class="fa-solid fa-bars">
        <span id="abMenuWord">Menu</span></i>
    </div>
        <!-- <i class="fa-solid fa-xmark" id="abMenuLogo1"></i> -->
    
    <ul class="abmenuclass" id="abmenuid">
        <li type="none">
            <h4>Deals</h4>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr style="color: grey;">
        <li type="none">
            <h4>Supports & Services</h4>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <h4>Brands</h4>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <h4>Featured</h4>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <h1>Shop by Department</h1>
        </li>
        <hr>
        <li type="none">
            <p>Appliances</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>TV & Home Theater</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>Computers & Tablets</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>Cameras, Camcorders & Drones</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>Cell Phones</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>Audio</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>Video Games</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>Movies & Music</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>Car Electronics & GPS</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>  
        <hr>
        <li type="none">
            <p>Wearable Technology</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>Health & Wellness</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>Home, Furniture & Office</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>Smart Home, Security & Wi-Fi</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>Outdoor Living</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>Electric Transportation</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>Toys, Games & Collectibles</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none">
            <p>Sustainable Living</p>
            <i class="fa-solid fa-chevron-right"></i>
        </li>
        <hr>
        <li type="none" id="abclose">
            <i class="fa-solid fa-xmark" id="abMenuLogo2"></i>
            <h2>Close</h2>
        </li>
    </ul>
    <div id="abDiv3"><input type="search" name="" id="abSearchIP" placeholder="Search Best Buy"><div><i class="fa-solid fa-magnifying-glass"></i></div></div>
    <div id="abDiv4" class="hoverContent"><i  id="abStoreLogo" class="fa-solid fa-store"> <span id="abWordAiea">Aiea</span></i></div>
    <div id="abDiv5" class="hoverContent"><i id="abCartLogo" class="fa-solid fa-cart-shopping"><span id="abWordCart"><a href="cart.html">Cart</a></span></i></div>`
}

let mainNav=document.getElementById("abNavbar")
mainNav.innerHTML=mainNavbar()

export{mainNavbar}