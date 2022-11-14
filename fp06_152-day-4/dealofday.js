import{mainNavbar} from "./components/mainNavbar.js"
import { subNavbar } from "./components/subNavbar.js";
import{footerfun} from "./components/footer.js"
document.getElementById("abNavbar").innerHTML=mainNavbar()
document.getElementById("abSubNav").innerHTML=subNavbar()
document.getElementById("footer").innerHTML=footerfun()
let abDiv1=document.getElementById("abDiv1")
abDiv1.onclick=()=>{
    window.location.href="index.html"
}
let abSubNavDiv3=document.getElementById("abSubNavDiv3")
abSubNavDiv3.onclick=()=>{
    window.location.href="dealofday.html"
}

let abMenuLogo = document.getElementById("abMenuLogo");
let abDiv2 = document.getElementById("abDiv2");
let abmenuid = document.getElementById("abmenuid");
let abclose = document.getElementById("abclose");
let count=0;
abDiv2.addEventListener("click",()=>{
    count++;
    if(count%2==0){
        abmenuid.style.display="none";
        abDiv2.innerHTML=`<i id="abMenuLogo" class="fa-solid fa-bars">
        <span id="abMenuWord">Menu</span></i>`;
        abDiv2.style.color="white";
        abDiv2.style.marginLeft="5px"
        abDiv2.style.marginTop="6px";
    }else{
        abmenuid.style.display="block";
        abDiv2.innerHTML=`<i class="fa-sharp fa-solid fa-xmark" id="abMenuLogo1"><span id="abMenuWord">Menu</span></i>`
        abDiv2.style.color="white";
        abDiv2.style.marginTop="20px";
        abDiv2.style.marginLeft="5px"
    }
});
abclose.addEventListener("click",()=>{
    abmenuid.style.display="none";
    abDiv2.innerHTML=`<i id="abMenuLogo" class="fa-solid fa-bars">
        <span id="abMenuWord">Menu</span></i>`
})
// sub nav bar account section section
let abSubNavDiv7 =document.getElementById("abSubNavDiv7");
let abaccountfirstpageid =document.getElementById("abaccountfirstpageid");
let c=0;
abSubNavDiv7.addEventListener("click",()=>{
    c++;
    if(c%2==0){
        abaccountfirstpageid.style.display="none";        
    }else{
        abaccountfirstpageid.style.display="block";
    }
});
let absignlink = document.getElementById("absignlink");
absignlink.addEventListener("click",()=>{
    window.location.href="login.html";
});
let abloginlink = document.getElementById("abloginlink");
abloginlink.addEventListener("click",()=>{
    window.location.href="signUp.html";
});

const countdown = () => {
        
    const countdate = new Date('05 December, 2022 00:00').getTime()
    
    const now = new Date().getTime()

    const gap = countdate - now

    const second = 1000

    const minute = second * 60

    const hour = minute * 60

    const day = hour * 24

    //Calculate the countdown

    const textDay = Math.floor(gap / day)

    const textHour = Math.floor((gap % day) / hour)

    const textMinute = Math.floor((gap % hour) / minute)

    const textSecond = Math.floor((gap % minute) / second)

    // document.querySelector('.day').innerHTML = textDay+' :'
    document.querySelector('.hour').innerHTML = textHour+':'
    document.querySelector('.minute').innerHTML = textMinute+':'
    document.querySelector('.second').innerHTML = textSecond

    

}

setInterval(countdown, 1000)



let afndealofday = [

    {
        img : 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6412/6412512_sd.jpg;maxHeight=640;maxWidth=550',
        title : 'Revolution Cooking - Revolution InstaGLO R180 Toaster - Stainless Steel',
        review : 124,
        price : '$249.99',
        save : '$99.96'
    },
    
    {
        img : 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331981_sd.jpg;maxHeight=640;maxWidth=550',
        title : 'Bella Pro Series - Pro Series 4-Slice Rotating Waffle Maker - Stainless Steel',
        review : 646,
        price : '$$17.99',
        save : '$42'
    },
    
    {
        img : 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464759cv11d.jpg;maxHeight=640;maxWidth=550',
        title : 'RBella Pro Series - 14-Piece Cookware Set - Black',
        review : 61,
        price : '$49.99',
        save : '$150'
    },

    {
        img : 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5463/5463201cv11d.jpg;maxHeight=640;maxWidth=550',
        title : 'Sanus - Premium Series Super Slim Full-Motion TV Wall Mount for Most TVs 40"-84" up to 125 lbs - Black',
        review : 2147,
        price : '$179.99',
        save: '$120'
    },
    
    {
        img : 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6518/6518221cv12d.jpg;maxHeight=640;maxWidth=550',
        title : 'Panther Vision - Powerpaw IPX7 Waterproof Rechargeable Hand Warmer - RED',
        review : 3,
        price : '$34.99',
        save: '$15'
    }
    
]

let container = document.getElementById('afnproducts')

for (let i=0; i<afndealofday.length; i++) {
    
    let div = document.createElement('div')
    div.className = 'item'
    div.onclick = function() {
        clicked(afndealofday[i])
    }

    let img = document.createElement('img')
    img.src = afndealofday[i].img
    img.className = 'afnimgs1'
    
    let title = document.createElement('p')
    title.innerText = afndealofday[i].title
    title.className = 'afnpsize'
    
    let review = document.createElement('p')
    review.innerText = 'Reviews: '+afndealofday[i].review
    review.className = 'review'
    
    let price = document.createElement('h2')
    price.innerText = afndealofday[i].price
    price.className = 'price'

    let save = document.createElement('p')
    save.innerText = 'Save '+afndealofday[i].save
    save.className = 'save'
    
    let btn = document.createElement('button')
    btn.innerHTML = 'Add to Cart'
    btn.className = 'afnaddtocart1'
    btn.onclick= function() {
        // let affanClickedItem=document.getElementById('affanClickedItem')
        addtocart()
    }
    
    div.append(img, title, review, price, save, btn)
    
    container.append(div)
    
}

function addtocart() {

    alert('Successfully Added to Cart')

}

function clicked(div) {

    localStorage.setItem('afnprod', JSON.stringify(div))
    
    window.location.href = 'selected.html'

}
let appleImage=document.getElementById("appleImage")

appleImage.onclick=()=>{

    window.location.href = 'apple.html'

}

let id;
let searchInput1=document.getElementById("abSearchIP");
searchInput1.oninput=()=>{
        if(id){
            clearTimeout(id)
        }
        id=setTimeout(()=>{
            let q=searchInput1.value
            searchProduct(q)
        },1000)
}
let searchProduct=async(q)=>{
    let res=await fetch(`https://mighty-savannah-51128.herokuapp.com/api/allProducts`)
    let data=await res.json();
    myfun(data,q,`https://mighty-savannah-51128.herokuapp.com/api/allProducts`);
}
let myfun=(data,q,url)=>{
    let arr=[];
    if(q!==""){
        for(let i=0;i<data.length;i++){
            let proname=data[i].name
            if(proname.includes(q)){
                arr.push(data[i]);
                appendData(arr,url)
                localStorage.setItem("olxData",JSON.stringify(arr))
                console.log(data[i]);
                window.location.href="search.html"
            }
        }
    }
}