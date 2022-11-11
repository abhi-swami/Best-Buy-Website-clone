let LaptopsURL=`http://localhost:3000/api/Laptops`;
let TVURL=`http://localhost:3000/api/TV`;
let videoGamesURL=`http://localhost:3000/api/videoGames`;
let cellPhoneURL=`http://localhost:3000/api/cellPhone`;
let HeadphonesURL=`http://localhost:3000/api/Headphones`;
let universalURL=`http://localhost:3000/api/allProducts`;
let form=document.getElementById("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let name=form.name.value
    let image=form.image.value;
    let description=form.description.value;
    let price=form.price.value;
    let actualPrice=form.actualPrice.value;
    let ratings=form.ratings.value;
    let totalRatings=form.totalRatings.value;
    let category=document.getElementById("category").value;
    let id=Date.now()+Math.ceil(Math.random()*100);
    let obj={
        name,image,description,price,actualPrice,category,ratings,totalRatings,id,
    }
    console.log(obj)
    if(category=="Laptops"){
        addNewProducts(LaptopsURL,obj)
    }else if(category=="TV"){
        addNewProducts(TVURL,obj)
    }else if(category=="Video Games"){
        addNewProducts(videoGamesURL,obj)
    }else if(category=="Cell Phone"){
        addNewProducts(cellPhoneURL,obj)
    }else if(category=="Headphones"){
        addNewProducts(HeadphonesURL,obj)
    }else{
        addNewProducts(universalURL,obj)
    }
});
let addNewProducts=async(url,obj)=>{
    await fetch(url,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        },
    });
}
let getElement=(id)=>{
    return document.getElementById(id)
}
let lapii=getElement("laptops")
lapii.onclick=()=>{
    appendCategory(LaptopsURL)
}
let teli=getElement("tv")
teli.onclick=()=>{
    appendCategory(TVURL)
}
let videoGames=getElement("videoGames")
videoGames.onclick=()=>{
    appendCategory(videoGamesURL)
}
let cellPhones=getElement("cellPhones")
cellPhones.onclick=()=>{
    appendCategory(cellPhoneURL)
}
let allCategory=getElement("allCategory")
allCategory.onclick=()=>{
    appendCategory(universalURL)
}
let appendCategory=async(url)=>{
    let res=await fetch(url)
    let data=await res.json();
    console.log(data)
    appendData(data)
}
let genEle=(tag)=>{
    return document.createElement(tag)
}
let card=(({name,image,description,price,actualPrice,category,ratings,totalRatings,id})=>{
    let imageBox=genEle("div")
    let img=genEle("img");
    img.src=image;
    img.classList.add("productImage");
    let productName=genEle("h3");
    productName.innerText=name;
    productName.classList.add("productName");
    let desc=genEle("p");
    desc.innerText=description;
    desc.classList.add("productDescription");
    let p=genEle("span");
    p.innerText=price;
    p.classList.add("productPrice");
    let ap=genEle("span");
    ap.innerText=actualPrice;
    ap.classList.add("actualPrice");
    let categ=genEle("p");
    categ.innerText=category;
    categ.classList.add("category");
    let rat=genEle("p");
    rat.classList.add("rating");
    rat.innerText=ratings;
    let rat_num=genEle("p");
    rat_num.innerText=totalRatings;
    rat_num.classList.add("totalnumbers");

    imageBox.classList.add("imgeDiv")
    let descBox=genEle("div")
    descBox.classList.add("descDiv")
    let priceBox=genEle("div")
    priceBox.classList.add("priceDiv")
})
let appendData=(data)=>{
    data.map((el)=>{
        let pro=card(el)
    })
}