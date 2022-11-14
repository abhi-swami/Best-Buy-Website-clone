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
    let product = JSON.parse(localStorage.getItem('afnprod'))

    console.log('product:', product)

    let container = document.getElementById('container')

    let display = document.getElementById('display')

    let div = document.createElement('div')

    let img = document.createElement('img')
    img.src = product.img
    img.className = 'img1'

    let brand = document.createElement('h3')
    brand.innerHTML = product.Brand

    let title = document.createElement('p')
        title.innerHTML = product.title
    title.className = 'name'

    let offer = document.createElement('p')
    offer.innerHTML = product.save
    offer.className = 'offer'

    // let MSRP = document.createElement('del')
    // MSRP.innerHTML = product.MSRP
    // MSRP.className = 'max'

    let price = document.createElement('p')
    price.innerHTML = product.price
    price.className = 'price'

    let review = document.createElement('p')
    review.innerHTML = 'Reviews: '+product.review
    review.className = 'review'

    // let code = document.createElement('p')
    // code.innerHTML = 'Item-Code: '+ product.ItemCode
    // code.className = 'code'

    let btn = document.createElement('button')
    btn.innerHTML = 'Add to Cart'
    // btn.style.color = 'blue'
    // btn.style.backgroundColor = 'white'
    // btn.style.border = '2px solid blue'
    btn.className = 'btn'

    let btn1 = document.createElement('button')
    btn1.innerHTML = 'Buy Now'
    btn1.style.color = 'white'
    btn1.style.backgroundColor = 'blue'
    btn1.style.border = '1px solid blue'
    btn1.className = 'btn1'


container.append(img)

display.append(title, price, offer, review, btn, btn1)

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