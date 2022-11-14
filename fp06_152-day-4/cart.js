// 

const url = "https://mighty-savannah-51128.herokuapp.com/api/newCart"


let getData = async () => {

    try {

        let res = await fetch(url)
    res = await res.json()
    console.log(res)
    renderDom(res)
        
    } catch (error) {
        console.log(error)
    }
    
}
getData()

    
let productPriceSum = 0;



let showArrowUp = document.getElementById("showAgain");
let showArrowDown = document.getElementById('showArrow');
let contentToShow = document.getElementById('savedItemsInvisibleSection');  

document.getElementById("showArrow").addEventListener('click', function(){
      
    showArrowDown.style.display = 'none'
    showArrowUp.style.display = 'block' 
    contentToShow.style.display = 'block'

    
});

showArrowUp.addEventListener('click', function(){
    
    contentToShow.style.display = 'none'
    showArrowUp.style.display = 'none' 
    showArrowDown.style.display = 'block'

    
});

let popUpBG = document.getElementById('popUpBG')

document.getElementById('availOffer').addEventListener('click', function(){

    popUpBG.style.display = 'none'
})
 
document.getElementById('specialOffer').addEventListener('click', function(){
    
    popUpBG.style.display = 'block'

});


let totalSum = 0;
let d = 0


document.getElementById('availOffer').addEventListener('click', function(){

    let hiddenHurrray = document.getElementById('hiddenHurrray')
    hiddenHurrray.style.display = 'block'

    
    let ele = document.getElementsByName('offer')
    for(let i=0; i<ele.length; i++){
        if(ele[i].checked){
            d = +ele[i].value
            

}

    }
    

})




let itemTotal = document.getElementById('itemTotal');
let showTotal = document.getElementById('showTotal');






let priceObject = {}
// appending Functions  ---------------------
let cards = ({image, name, price, id, category}) => {

    let div = document.createElement('div');
    div.className = 'productDiv'

    let div2 = document.createElement('div');
    div2.className = 'buttonDiv'

    let descText = document.createElement('p');
    descText.innerText = 'Digital Download Emailed after order confirmation. BestBuy.com account required.'
    descText.className = 'descText'

    let img = document.createElement('img');
    img.src = image
    
    priceObject[id] = +price 

    

    let t = 0

    for(let value in priceObject){
        
        t += priceObject[value]
    }
  


    totalSum = t

    


    let title = document.createElement('p');
    title.innerText = name
    title.className = 'productName'

    let quantityBtn = document.createElement('select')
    quantityBtn.className = 'quantityBtn'
    for(let i=0; i<5; i++){
        
        let options = document.createElement('option')
        options.innerText = i+1




        quantityBtn.onchange = () => {
        
            let quantity = +quantityBtn.options[quantityBtn.selectedIndex].value

            
            let quantityPrice = (quantity)*(+price)

        
            
    
            
            t = 0
            for(let value in priceObject){
        
                if(id == value){
                    priceObject[value] = quantityPrice
                }

                t += priceObject[value]
             
            }
            totalSum = t
            itemTotal.innerText = `$${totalSum}`
            showTotal.innerText = `$${totalSum}`
        }

        
                    
            
        
        quantityBtn.append(options)
        
    }
    
    

    let removeBtn = document.createElement('button')
    removeBtn.innerText = 'Remove'
    removeBtn.className = 'linkClr'
    removeBtn.onclick = () => {
        removeProduct(id)
    }
    

    let saveBtn = document.createElement('button')
    saveBtn.innerText = 'Save Item'
    saveBtn.className = 'linkClr'


    let prices = document.createElement('h4')
    prices.innerText = ` $ ${price}`
    prices.className = 'prices'

    

// console.log(totalSum)
    itemTotal.innerText = `$${totalSum}`
    showTotal.innerText = `$${totalSum}`
    
    let pText = document.createElement('p');
    if(category == "Laptops"){
        
        pText.innerText = 'Click here to add insurance in just $99 for this Item'
        pText.className = 'productCategories'
    }
    
    div2.append(removeBtn, saveBtn)

    div.append(img,title, descText, pText, quantityBtn, div2, prices)

    return div;
}



let cont = document.getElementById('container')

let renderDom = (data) => {

    cont.innerHTML = null;

   data.forEach((el) => {

    let divForm = cards(el)

    
    cont.append(divForm)
    })

}



let removeProduct = async(id) => {

    await fetch(`${url}/${id}`, {
        method: "DELETE"
    })

    
    getData()

}





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


let checkout = document.getElementById('checkout')

checkout.addEventListener('click', function(){

    let d = Date()
    console.log(d)

    localStorage.setItem('date', JSON.stringify(d))

    location.href = 'checkout.html'

    
})