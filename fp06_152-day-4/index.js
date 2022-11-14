// nav bar menu section
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

let dealOfThedayImage=document.getElementById("dealOfThedayImage")
dealOfThedayImage.onclick=()=>{
    window.location.href="dealofday.html"
}
let iphoneImage=document.getElementById("iphoneImage")
iphoneImage.onclick=()=>{
    window.location.href="apple.html"
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
let arr=[
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-laptops-686b0d25-dbcf-484f-8c88-046275bf8ef5.jpg;maxWidth=220`,
        productName:"Computers & Laptops"   
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-tv-364a6674-a730-4b5b-a7c9-94d55f7e82b5.jpg;maxWidth=220`,
        productName:"TVs & Projectors"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-apple-d28633c9-bbe5-4f83-a0f6-55b738306ae1.jpg;maxWidth=220`,
        productName:"Apple"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-vg-d7f85256-6a3f-4f54-872d-c89c69954d73.jpg;maxWidth=220`,
        productName:"Video Games & VR"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-phones-4e886f8b-2e80-47db-b8eb-1d10332ffd44.jpg;maxWidth=220`,
        productName:"Cell Phone"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-mappls-561d66ab-817b-4d28-b076-5d889afff7a2.jpg;maxWidth=220`,
        productName:"Major Appliances"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-headphones-025fb4ed-2665-4381-9384-b921e801d758.jpg;maxWidth=220`,
        productName:"Headphones"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-pcgaming-be2db030-1456-4789-a265-0f7da417405f.jpg;maxWidth=220`,
        productName:"PC Gaming"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-tablets-79bf758a-ebc9-46bb-ba84-3782cdfd09ca.jpg;maxWidth=220`,
        productName:"Tablets & E-Readers"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-cameras-0135d468-d14a-4a26-8b44-dd723c2b0953.jpg;maxWidth=220`,
        productName:"Cameras & Camcorders "
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-speakers-4589e35d-d21d-49b6-8a2f-e747da604278.jpg;maxWidth=220`,
        productName:"Sound Bars & Speakers"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-wearabletech-b007a144-b78a-42a9-9233-b97f66bce317.jpg;maxWidth=220`,
        productName:"Wearable Technology"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-smappls-bfa220bd-fca3-447c-ab2e-3c88aaebea36.jpg;maxWidth=220`,
        productName:"Small Appliances"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-printers-c8eac98d-636f-4487-88d6-f77494875b92.jpg;maxWidth=220`,
        productName:"Printers & Computer Accessories"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-smarthome-99f9e854-2362-44a8-ba2c-9242be12c596.jpg;maxWidth=220`,
        productName:"Smart Home, Security & Wi-FI"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-toys-dbd5f58e-beb9-4ca2-8d48-3db5e29c5e63.jpg;maxWidth=220`,
        productName:"Games & Toys"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-etranspo-4be6c360-45af-4d45-8429-6b20915e6763.jpg;maxWidth=220`,
        productName:"Electric Transportation"
    },
    {
        ProductImage:`https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-health-1c7229b6-26c8-44a1-94ea-62315c8c6a4b.jpg;maxWidth=220`,
        productName:"Health & Fitness"
    },
]
let newArrival=[
    {
        productImage:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6520/6520136_rd.jpg;maxHeight=400;maxWidth=400`,
        productName:"Meta Quest Pro"
    },
    {
        productImage:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6491/6491968_sd.jpg;maxHeight=400;maxWidth=400`,
        productName:"Buy Reindeer Gift Card"
    },
    {
        productImage:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5200/5200904_sd.jpg;maxHeight=400;maxWidth=400`,
        productName:"Apple - 10.9-Inch iPad (Latest Model)"
    },
    {
        productImage:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6521/6521287_sd.jpg;maxHeight=400;maxWidth=400`,
        productName:"Gap - $50 Gift Card (Digital Delivery)"
    },
    {
        productImage:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6524/6524895_sd.jpg;maxHeight=400;maxWidth=400`,
        productName:"Nintendo Switch Online + Expansion Pack "
    },
]
let generateElement=(tag)=>{
    return document.createElement(tag)
}
let appendData=(data)=>{
    let container=document.getElementById("abCatSubDiv2")
    container.innerHTML=null;
    data.map(({ProductImage,productName})=>{
        let box=generateElement("div")
        box.classList.add("productHoverContent");
        let imageBox=generateElement("div")
        imageBox.classList.add("abproductImageDiv");
        let image=generateElement("img");
        image.classList.add("abProductRoundImage")
        image.src=ProductImage;
        imageBox.append(image)
        let p=generateElement("p");
        p.classList.add("abPCproductName")
        p.innerText=productName;
        box.append(imageBox,p);
        container.append(box)
    })
};
appendData(arr);
let appendNewArrival=(data)=>{
    let container=document.getElementById("abNewArrivalSubDiv2")
    container.innerHTML=null;
    data.map(({productImage,productName})=>{
        let box=generateElement("div")
        box.classList.add("abNewArrivalCardDiv");
        let image=generateElement("img");
        image.classList.add("abNewArrivalCardImage")
        image.src=productImage;
        let p=generateElement("p");
        p.classList.add("abNewArrivalCardProduct")
        p.innerText=productName;
        box.append(image,p);
        container.append(box)
    })
};
appendNewArrival(newArrival);

// trending items---------------------------------------------------------------------------------->


let trendingItems=[
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6514/6514052_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"Samsung - 75 inche Class TU690T Series LED 4K UHD Smart Tizen TV",
        ratings:5,
        numberOfRatigs:'58',
        price:579.99,
        actualPrice:670,
    },
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6504/6504563_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"Acer - Predator Helios 300 - 15.6 inches FHD 165Hz Gaming Laptop - Intel",
        ratings:5,
        numberOfRatigs:'106',
        price:999.99,
        actualPrice:1250,
    },
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4265/4265400_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"Apple - 11-Inch iPad Pro with Wi-Fi - 128GB - Space Gray",
        ratings:5,
        numberOfRatigs:'2,206',
        price:699.99,
        actualPrice:800,
    },
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6373/6373460_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"Apple - AirPods Max - Space Gray",
        ratings:5,
        numberOfRatigs:'2,996',
        price:499.99,
        actualPrice:550,
    },
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6508/6508652_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"Dell - Inspiron 15.6 Laptop - AMD Ryzen 5 - 8GB Memory - 256GB",
        ratings:5,
        numberOfRatigs:'126',
        price:349.99,
        actualPrice:567,
    },
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494432_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"Samsung - Galaxy S22+ 128GB (Unlocked) - Phantom Black",
        ratings:4,
        numberOfRatigs:'135',
        price:769.99,
        actualPrice:1050,
    },

]

let genEle=(tag)=>{
    return document.createElement(tag)
}

let appendTrendingItems=(data)=>{
    let container=document.getElementById("ab-trending-product-container")
    container.innerHTML=null;
    // console.log(container)
    data.map(({image,name,ratings,numberOfRatigs,price,actualPrice})=>{
        // console.log(name,image,ratings,numberOfRatigs,price)
        let mainbox=genEle("div")
        mainbox.classList.add("product-card");

        let subBox1=genEle("div")
        subBox1.classList.add("product-image-div");
        let img=genEle("img");
        img.classList.add("product-image")
        img.src=image;
        let cartButton=genEle("button");
        cartButton.classList.add("card-add-to-cart-btn");
        cartButton.innerText="Add To Cart";
        subBox1.append(img,cartButton)

        let subBox2=genEle("div")
        subBox2.classList.add("product-info");
        let brand=genEle("p");
        brand.innerText=name;
        brand.classList.add("product-name");
        let r=genEle("span");
        ratings=+ratings
        console.log(ratings)
        if(ratings==4){
            r.innerHTML=`<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>`;
        }else if(ratings==5){
            r.innerHTML=`<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> `;
        }
        r.classList.add("product-rating");
        let nr=genEle("span");
        nr.innerText=`(${numberOfRatigs})`;
        let product_price=genEle("span");
        product_price.innerText=`$${price}`;
        product_price.classList.add("product-price");
        let product_actual_price=genEle("span");
        price=+price;
        product_actual_price.innerText=`$${actualPrice}`;
        product_actual_price.classList.add("product-actual-price");
        let priceTag=genEle("p");
        priceTag.append(product_price,product_actual_price)
        subBox2.append(brand,r,nr,priceTag)

        mainbox.append(subBox1,subBox2);
        container.append(mainbox);
        // console.log(mainbox)

    })
}
appendTrendingItems(trendingItems)

let  productContainers = [...document.querySelectorAll('#ab-trending-product-container')];
let nxtBtn = [...document.querySelectorAll('.nxt-btn')];
let preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})




// bestsellleproducts------------------------------------------------------------------------------------>


let bestSellingProduct=[
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"Apple - AirPods Pro (1st generation) with Magsafe Charging Case - White",
        ratings:5,
        numberOfRatigs:'13,206',
        price:209.99,
        actualPrice:250,
    },
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6448/6448758_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"Insignia™ - 43 Class F30 Series LED 4K UHD Smart Fire TV",
        ratings:5,
        numberOfRatigs:'1,544',
        price:219.99,
        actualPrice:300,
    },
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500335_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"Lenovo - Chromebook 3 11.6 HD Laptop - Celeron N4020 - 4GB Memory -",
        ratings:4,
        numberOfRatigs:'575',
        price:139,
        actualPrice:200,
    },
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509757_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"Doctor Strange in the Multiverse of Madness [SteelBook][Digital",
        ratings:5,
        numberOfRatigs:'705',
        price:43.99,
        actualPrice:61,
    },
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6472/6472653_rd.jpg;maxHeight=272;maxWidth=400`,
        name:"ZAGG - InvisibleShield Glass+ Defense Screen Protector for Apple",
        ratings:5,
        numberOfRatigs:'1,497',
        price:24.9,
        actualPrice:51,
    },
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6361/6361905_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"OtterBox - Commuter Series Case for Apple® iPhone® 11/XR - Black",
        ratings:5,
        numberOfRatigs:'1560',
        price:36.9,
        actualPrice:70,
    }
]

let appendBestSelling=(data)=>{
    let container=document.getElementById("product-container")
    container.innerHTML=null;
    // console.log(container)
    data.map(({image,name,ratings,numberOfRatigs,price,actualPrice})=>{
        // console.log(name,image,ratings,numberOfRatigs,price)
        let mainbox=genEle("div")
        mainbox.classList.add("product-card");

        let subBox1=genEle("div")
        subBox1.classList.add("product-image-div");
        let img=genEle("img");
        img.classList.add("product-image")
        img.src=image;
        let cartButton=genEle("button");
        cartButton.classList.add("card-add-to-cart-btn");
        cartButton.innerText="Add To Cart";
        subBox1.append(img,cartButton)

        let subBox2=genEle("div")
        subBox2.classList.add("product-info");
        let brand=genEle("p");
        brand.innerText=name;
        brand.classList.add("product-name");
        let r=genEle("span");
        if(ratings==2){
            r.innerHTML=`<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>`;
        }else if(ratings==3){
            r.innerHTML=`<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>`;
        }
        else if(ratings==4){
            r.innerHTML=`<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>`;
        }else if(ratings==5){
            r.innerHTML=`<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> `;
        }

        r.classList.add("product-rating");
        let nr=genEle("span");
        nr.innerText=`(${numberOfRatigs})`;
        let product_price=genEle("span");
        product_price.innerText=`$${price}`;
        product_price.classList.add("product-price");
        let product_actual_price=genEle("span");
        price=+price;
        product_actual_price.innerText=`$${actualPrice}`;
        product_actual_price.classList.add("product-actual-price");
        let priceTag=genEle("p");
        priceTag.append(product_price,product_actual_price)
        subBox2.append(brand,r,nr,priceTag)

        mainbox.append(subBox1,subBox2);
        container.append(mainbox);
        // console.log(mainbox)

    })
}
appendBestSelling(bestSellingProduct)

let bestProductContainers = [...document.querySelectorAll('#product-container')];
let bestnxtBtn = [...document.querySelectorAll('.best-nxt-btn')];
let bestpreBtn = [...document.querySelectorAll('.best-pre-btn')];

bestProductContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    bestnxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    bestpreBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// search products
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