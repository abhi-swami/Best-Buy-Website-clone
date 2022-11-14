import{mainNavbar} from "./components/mainNavbar.js"
import { subNavbar } from "./components/subNavbar.js";
import{footerfun} from "./components/footer.js"

let  mainNav=document.getElementById("abNavbar");
mainNav.innerHTML=mainNavbar()

let  subNav=document.getElementById("abSubNav");
subNav.innerHTML=subNavbar()

let  footer=document.getElementById("footer");
footer.innerHTML=footerfun()


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

// https://mighty-savannah-51128.herokuapp.com/
let LaptopsURL=`https://mighty-savannah-51128.herokuapp.com/api/Laptops`;
let TVURL=`https://mighty-savannah-51128.herokuapp.com/api/TV`;
let videoGamesURL=`https://mighty-savannah-51128.herokuapp.com/api/videoGames`;
let cellPhoneURL=`https://mighty-savannah-51128.herokuapp.com/api/cellPhone`;
let HeadphonesURL=`https://mighty-savannah-51128.herokuapp.com/api/Headphones`;
let universalURL=`https://mighty-savannah-51128.herokuapp.com/api/allProducts`;
let form=document.getElementById("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let name=form.name.value
    let image=form.image.value;
    let description=form.description.value;
    let price=form.price.value;
    price=+price
    let actualPrice=form.actualPrice.value;
    actualPrice=+actualPrice
    let ratings=form.ratings.value;
    ratings=+ratings
    let totalRatings=form.totalRatings.value;
    totalRatings=+totalRatings
    let category=document.getElementById("category").value;
    let id=Date.now()+Math.ceil(Math.random()*100);
    let obj={
        name,image,description,price,actualPrice,category,ratings,totalRatings,id,
    }
    if(category=="Laptops"){
        addNewProducts(LaptopsURL,obj)
    }else if(category=="TV"){
        addNewProducts(TVURL,obj)
    }else if(category=="Video Games"){
        addNewProducts(videoGamesURL,obj)
    }else if(category=="Cell Phone"){
        addNewProducts(cellPhoneURL,obj)
    }else if(category=="Head phones"){
        addNewProducts(HeadphonesURL,obj)
    }else{
        addNewProducts(universalURL,obj)
    }
});
let addNewProducts=async(url,obj)=>{
    let category=obj.category;
    await fetch(url,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        },
    });
    if(category=="Laptops"){
    appendCategory(LaptopsURL)
    sortNFilter(LaptopsURL)
    }else if(category=="TV"){
        appendCategory(TVURL)
        sortNFilter(TVURL)
    }else if(category=="Video Games"){
        appendCategory(videoGamesURL)
        sortNFilter(videoGamesURL)
    }else if(category=="Cell Phone"){
        appendCategory(cellPhoneURL)
        sortNFilter(cellPhoneURL)
    }else if(category=="Head phones"){
        appendCategory(HeadphonesURL)
        sortNFilter(HeadphonesURL)
    }else{
    appendCategory(universalURL)
        sortNFilter(universalURL)
    }
}
let getElement=(id)=>{
    return document.getElementById(id)
}
let lapii=getElement("laptops")
lapii.onclick=()=>{
    appendCategory(LaptopsURL);
    sortNFilter(LaptopsURL)
}
let teli=getElement("tv")
teli.onclick=()=>{
    appendCategory(TVURL);
    sortNFilter(TVURL)
}
let videoGames=getElement("videoGames")
videoGames.onclick=()=>{
    appendCategory(videoGamesURL);
    sortNFilter(videoGamesURL)
}
let cellPhones=getElement("cellPhones")
cellPhones.onclick=()=>{
    appendCategory(cellPhoneURL);
    sortNFilter(cellPhoneURL)
}
let headPhones=getElement("headPhones")
headPhones.onclick=()=>{
    appendCategory(HeadphonesURL);
    sortNFilter(HeadphonesURL)
}
let allCategory=getElement("allCategory")
allCategory.onclick=()=>{
    appendCategory(universalURL);
    sortNFilter(universalURL)
}
let appendCategory=async(url)=>{
    let res=await fetch(url)
    let data=await res.json();
    appendData(data,url)
}
let genEle=(tag)=>{
    return document.createElement(tag)
}
let card=(({name,image,description,price,actualPrice,category,ratings,totalRatings,id},url)=>{
    price=+price;
    actualPrice=+actualPrice;
    totalRatings=+totalRatings;
    let imageBox=genEle("div")
    let box=genEle("div")
    box.classList.add("productCard")
    let img=genEle("img");
    img.src=image;
    img.classList.add("productImage");
    let productName=genEle("h4");
    productName.innerText=name;
    productName.classList.add("productName");
    let desc=genEle("p");
    desc.innerText=description;
    desc.classList.add("productDescription");
    let p=genEle("span");
    p.innerText=`$${price}`;
    p.classList.add("productPrice");
    let ap=genEle("span");
    ap.innerText=`$${actualPrice}`;
    ap.classList.add("actualPrice");
    let categ=genEle("p");
    categ.innerText=category;
    categ.classList.add("category");
    let rat=genEle("span");
    if(ratings==2){
        rat.innerHTML=`<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>`;
    }else if(ratings==3){
        rat.innerHTML=`<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>`;
    }
    else if(ratings==4){
        rat.innerHTML=`<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>`;
    }else if(ratings==5){
        rat.innerHTML=`<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> `;
    }

    rat.classList.add("rating");
    let rat_num=genEle("span");
    rat_num.innerHTML=`(<i class="fa-solid fa-people-group"></i> ${totalRatings})`;
    rat_num.classList.add("totalnumbers");

    let DeliveryBox = genEle("div");
    DeliveryBox.classList.add("DeliveryBox");

    let Delivery_icon = genEle("span");
    Delivery_icon.classList.add("Delivery_icon");
    Delivery_icon.innerHTML=`<i class="fa-sharp fa-solid fa-truck-fast"></i>`;

    let Delivery_text = genEle("h5");
    Delivery_text.classList.add("Delivery_text");
    Delivery_text.innerHTML=`Delivery :`

    let Delivery_day = genEle("h5");
    Delivery_day.classList.add("Delivery_text");
    Delivery_day.innerHTML=`2-3 day`

    DeliveryBox.append(Delivery_icon,Delivery_text,Delivery_day)

    imageBox.classList.add("imageDiv")
    imageBox.append(img)

    let descBox=genEle("div")
    descBox.classList.add("descDiv")

    descBox.append(productName,desc,p,ap,categ,rat,rat_num)
    
    let updateBox=genEle("div")
    updateBox.classList.add("updateDiv")

    let deleteBtn=genEle("button");
    deleteBtn.innerText="Delete Product"
    deleteBtn.onclick=()=>{
        deleteItem(id,url)
    }
    let priceBtn=genEle("button");
    priceBtn.innerText="UpdatePrice";
    priceBtn.onclick=()=>{
        changePrice(id,url)
    }
    let ratingBtn=genEle("button");
    ratingBtn.innerText="Update Rating";
    ratingBtn.onclick=()=>{
        changeRatings(id,url)
    }
    updateBox.append(deleteBtn,priceBtn,ratingBtn)
    box.append(imageBox,descBox,updateBox)
    return box
})
let appendData=(data,url)=>{
    let container=document.getElementById("containerDiv");
    container.innerHTML=null;
    data.map((el)=>{
        let hr=genEle("hr")
        hr.classList.add("spaceHr")
        let pro=card(el,url)
        container.append(pro,hr)
    })
}
appendCategory(HeadphonesURL)


let deleteItem=async(id,url)=>{
    await fetch(`${url}/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    });
    appendCategory(url)
}
let changePrice=async(id,url)=>{
    let p=window.prompt("Enter the amount");
    p=+p;
    let data={price:p}
    await fetch(`${url}/${id}`,{
        method:"PATCH",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
        }
    })
    appendCategory(url)
}
let changeRatings=async(id,url)=>{
    let p=window.prompt("Enter the New ratings");
    p=+p;
    let data={ratings:p}
    await fetch(`${url}/${id}`,{
        method:"PATCH",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
        }
    })
    appendCategory(url)
}

let sortNFilter=(url)=>{
    let sortUsingRatings=getElement("sortUsingRatings");
    sortUsingRatings.onclick=()=>{
        if(sortUsingRatings.value=="low"){
            let newUrl=`${url}?_sort=ratings&_order=asc`;
            sortingFunction(newUrl);
        }else if(sortUsingRatings.value=="high"){
            let newUrl=`${url}?_sort=ratings&_order=desc`;
            sortingFunction(newUrl);
        }
    }

    let sortUsingUserRatings=getElement("sortUsingUserRatings");
    sortUsingUserRatings.onclick=()=>{
        if(sortUsingUserRatings.value=="low"){
            let newUrl=`${url}?_sort=totalRatings&_order=asc`;
            sortingFunction(newUrl);
        }else if(sortUsingUserRatings.value=="high"){
            let newUrl=`${url}?_sort=totalRatings&_order=desc`;
            sortingFunction(newUrl);
        }
    }
    let sortUsingPrice=getElement("sortUsingPrice");
    sortUsingPrice.onclick=()=>{
        if(sortUsingPrice.value=="low"){
            let newUrl=`${url}?_sort=price&_order=asc`;
            sortingFunction(newUrl);
        }else if(sortUsingPrice.value=="high"){
            let newUrl=`${url}?_sort=price&_order=desc`;
            sortingFunction(newUrl);
        }
    }

    let price5=getElement("price5");
    let price5_10=getElement("price5-10");
    let price11_50=getElement("price11-50");
    let price51_100=getElement("price51-100");
    let price101_200=getElement("price101-200");
    let price201=getElement("price201");
    price5.onclick=()=>{
            sortingFunction(`${url}?price_lte=05`)
    }
    price5_10.onclick=()=>{
        sortingFunction(`${url}?price_gte=05&price_lte=10`)
    }
    price11_50.onclick=()=>{
        sortingFunction(`${url}?price_gte=11&price_lte=50`)
    }
    price51_100.onclick=()=>{
        sortingFunction(`${url}?price_gte=51&price_lte=100`)
        
    }
    price101_200.onclick=()=>{
        sortingFunction(`${url}?price_gte=101&price_lte=200`)
        
    }
    price201.onclick=()=>{
        sortingFunction(`${url}?price_gte=201`)
    }

    let star3=getElement("star3");
    let star4=getElement("star4");
    let star5=getElement("star5");
    star3.onclick=()=>{
            sortingFunction(`${url}?ratings_gte=03&ratings_lte=3`)
    }
    star4.onclick=()=>{
        console.log("heloo from star4")
        sortingFunction(`${url}?ratings_gte=4&ratings_lte=4`)
    }
    star5.onclick=()=>{
        sortingFunction(`${url}?ratings_gte=5&ratings_lte=5`)
    }
}
let sortingFunction=async(url)=>{
    let res=await fetch(url)
    let data=await res.json();
    appendData(data)
}
let id;
let searchInput=document.getElementById("abSearchIP");
searchInput.oninput=()=>{
        if(id){
            clearTimeout(id)
        }
        id=setTimeout(()=>{
            let q=searchInput.value
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
                console.log(data[i])
            }
        }
    }
}