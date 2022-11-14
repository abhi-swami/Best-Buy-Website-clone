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