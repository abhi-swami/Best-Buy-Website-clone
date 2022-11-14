
let bestSellingProduct=[
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900942_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"Apple - AirPods Pro (1st generation) with Magsafe Charging Case - White",
        ratings:4,
        numberOfRatigs:'13,206',
        price:209.99,
        actualPrice:250,
    },
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6448/6448758_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"Insignia™ - 43 Class F30 Series LED 4K UHD Smart Fire TV",
        ratings:4,
        numberOfRatigs:'1,544',
        price:219.99,
        actualPrice:300,
    },
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6500/6500335_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"Lenovo - Chromebook 3 11.6 HD Laptop - Celeron N4020 - 4GB Memory -",
        ratings:3,
        numberOfRatigs:'575',
        price:139,
        actualPrice:200,
    },
    {
        image:`https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509757_sd.jpg;maxHeight=272;maxWidth=400`,
        name:"Doctor Strange in the Multiverse of Madness [SteelBook][Digital",
        ratings:4,
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
    ,
    {
        image:`https://th.bing.com/th/id/OIP.Hr-HcIvUa_RIaA1_Jqe-HgHaN5?pid=ImgDet&w=167&h=313&c=7&dpr=1.3`,
        name:"Nokia 1100 - Rare series of Nokia phones® 1100 - Black",
        ratings:5,
        numberOfRatigs:'17760',
        price:40,
        actualPrice:20,
    },
    {
        image:`https://th.bing.com/th/id/OIP.DKHrOC89NIylVxYqRyzjoQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7`,
        name:"Nokia Lumia  925 Smartphone | Lumia 925, Windows phone - Black",
        ratings:4,
        numberOfRatigs:'1560',
        price:92,
        actualPrice:120,
    }


]






let genEle=(tag)=>{
    return document.createElement(tag)
}

let appendBestSelling=(data)=>{
    let container=document.getElementById("product-container")
    container.innerHTML=null;
    
    data.map(({image,name,ratings,numberOfRatigs,price,actualPrice})=>{


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
        // r.innerText=ratings;
        r.classList.add("product-rating");
        if(ratings==2){
            r.innerHTML=`<i class="fa-solid fa-star" style="color: rgb(220, 220, 9);"></i> <i class="fa-solid fa-star" style="color: rgb(220, 220, 9);"></i>`;
        }else if(ratings==3){
            r.innerHTML=`<i class="fa-solid fa-star" style="color: rgb(220, 220, 9);"></i> <i class="fa-solid fa-star" style="color: rgb(220, 220, 9);"></i> <i class="fa-solid fa-star" style="color: rgb(220, 220, 9);"style="color: rgb(220, 220, 9);"></i>`;
        }
        else if(ratings==4){
            r.innerHTML=`<i class="fa-solid fa-star" style="color: rgb(220, 220, 9);"></i> <i class="fa-solid fa-star" style="color: rgb(220, 220, 9);"></i> <i class="fa-solid fa-star" style="color: rgb(220, 220, 9);"></i> <i class="fa-solid fa-star" style="color: rgb(220, 220, 9);"></i>`;
        }else if(ratings==5){
            r.innerHTML=`<i class="fa-solid fa-star" style="color: rgb(220, 220, 9);"></i> <i class="fa-solid fa-star" style="color: rgb(220, 220, 9);"></i> <i class="fa-solid fa-star" style="color: rgb(220, 220, 9);"></i> <i class="fa-solid fa-star" style="color: rgb(220, 220, 9);"></i> <i class="fa-solid fa-star" style="color: rgb(220, 220, 9);"></i> `;
        }
        
        let nr=genEle("span");
        nr.innerText=`(${numberOfRatigs})`;
        nr.classList.add('nr')
        
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

const url = "https://mighty-savannah-51128.herokuapp.com/api/newCart"

let prodArr = JSON.parse(localStorage.getItem('prodData')) || [];

let getData = async (url) => {

    let res = await fetch(url)
    res = await res.json()
    console.log(res)
    renderDom(res)
    renderDom2(res)
}
getData(url)

// let d = JSON.parse(localStorage.getItem('date')) || [];

let cards = ({image, id, price, name, description}) => {

    let d = JSON.parse(localStorage.getItem('date')) || [];

    let div = document.createElement('div')
    div.classList.add('prodDiv')


    let img = document.createElement('img')
    img.src = image
    img.classList.add('prodImg')

    let title = document.createElement('h4')
    title.innerText = name
    title.classList.add('prodName')

    let desc = document.createElement('p')
    desc.innerText = description
    desc.classList.add('prodDesc')


    let prices = document.createElement('p')
    prices.innerText = `$${price}`
    prices.classList.add('prodPrice')

    let date = document.createElement('p')
    date.innerText = `Ordered on: ${d}`
    date.classList.add('prodDate')

    let cancelText = document.createElement('p')
    cancelText.innerText = 'Cancel Item'
    cancelText.onclick = () => {

        let newObj = {
            image,
            name,
            price

        }
        prodArr.push(newObj);

        localStorage.setItem('prodData', JSON.stringify(prodArr));

        cancelTextFunc(id)
    }
    cancelText.classList.add('prodCancel')



    let box = document.createElement('div')
    box.append(date, cancelText)
    box.className = 'bottomBox'

    let topBox = document.createElement('div')
    topBox.append(img, title,desc, prices)
    topBox.className = 'topBox'

    div.append( topBox, box)
    return div
}


let ifNoProduct = document.getElementById('ifNoProduct')
let allProductsShow = document.getElementById('allProductsShow')
let inProgressProducts = document.getElementById('inProgressProducts')
let canceledProd = document.getElementById('canceledProd')

let renderDom = (data) => {

    allProductsShow.innerHTML = null

    data.forEach(el => {

        allProductsShow.append(cards(el))

    })
}

let renderDom2 = (data) => {

    inProgressProducts.innerHTML = null

    data.forEach(el => {

        inProgressProducts.append(cards(el))

    })
}




let canceledCards = ({image, price, name}) => {


    let div = document.createElement('div')
    div.classList.add('canceledProdDiv')


    let img = document.createElement('img')
    img.src = image
    img.classList.add('canceledProdImg')

    let title = document.createElement('h4')
    title.innerText = name
    title.classList.add('canceledProdName')


    let prices = document.createElement('p')
    prices.innerText = `$${price}`
    prices.classList.add('canceledProdPrice')

    div.append(img, title, prices)
    return div
}



let renderDom3 = (data) => {

    canceledProd.innerHTML = null

    data.forEach(el => {

        canceledProd.append(canceledCards(el))

    })
}

renderDom3(prodArr)


let allOrders = document.getElementById('allOrders')
let inProgress = document.getElementById('inProgress')
let canceled = document.getElementById('canceled')

allOrders.addEventListener('click', function() {

    ifNoProduct.style.display = 'none'

    allOrders.style.transition = '0.3s'
    allOrders.style.color = 'black'
    allOrders.style.fontSize = '18px'

    inProgress.style.transition = '0.1s'
    inProgress.style.color = '#0046BE'
    inProgress.style.fontSize = '15px'
    
    canceled.style.transition = '0.1s'
    canceled.style.color = '#0046BE'
    canceled.style.fontSize = '15px'

    allProductsShow.style.display = 'block'
    inProgressProducts.style.display = 'none'
    canceledProd.style.display = 'none'

})


inProgress.addEventListener('click', function() {

    ifNoProduct.style.display = 'none'

    inProgress.style.transition = '0.3s'
    inProgress.style.color = 'black'
    inProgress.style.fontSize = '18px'
    
    canceled.style.transition = '0.1s'
    canceled.style.color = '#0046BE'
    canceled.style.fontSize = '15px'


    allOrders.style.transition = '0.1s'
    allOrders.style.color = '#0046BE'
    allOrders.style.fontSize = '15px'

    allProductsShow.style.display = 'none'
    inProgressProducts.style.display = 'block'
    canceledProd.style.display = 'none'




})

canceled.addEventListener('click', function() {

    ifNoProduct.style.display = 'none'

    canceled.style.transition = '0.3s'
    canceled.style.color = 'black'
    canceled.style.fontSize = '18px'


    allOrders.style.transition = '0.1s'
    allOrders.style.color = '#0046BE'
    allOrders.style.fontSize = '15px'

    inProgress.style.transition = '0.1s'
    inProgress.style.color = '#0046BE'
    inProgress.style.fontSize = '15px'
    
    allProductsShow.style.display = 'none'
    inProgressProducts.style.display = 'none'
    canceledProd.style.display = 'block'





})

let cancelTextFunc = async (id) => {

    
    await fetch (`${url}/${id}`, {
        method: "DELETE"
    })
    renderDom()
}
