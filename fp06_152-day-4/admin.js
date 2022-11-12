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
let headPhones=getElement("headPhones")
headPhones.onclick=()=>{
    appendCategory(HeadphonesURL)
}
let allCategory=getElement("allCategory")
allCategory.onclick=()=>{
    appendCategory(universalURL)
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
    rat_num.innerText=`(${totalRatings})`;
    rat_num.classList.add("totalnumbers");
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
    priceBtn.innerText="Update Price";
    priceBtn.onclick=()=>{
        changePrice(id,url)
    }
    let ratingBtn=genEle("button");
    ratingBtn.innerText="Update Rating";
    ratingBtn.onclick=()=>{

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
let deleteItem=async(id)=>{
    await fetch(`${url}/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    });
    appendCategory(url)
}
let changePrice=async(id,url)=>{
    console.log(url)
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