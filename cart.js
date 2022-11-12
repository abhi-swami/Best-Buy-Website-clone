let mens = [
   
    {
      "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Green-MAX-Men-Striped-Band-Collar-Slim-Fit-Short-Kurta/p/1000011359476-Green-OLIVEGREEN",
      "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011359476-Green-OLIVEGREEN-1000011359476-15092022_01-2100.jpg",
      "rup": "₹",
      "price": 99,
      "name": "MAX Men Striped Band Collar Slim Fit Short Kurta",
      "id": 1
    
    },
    {
      "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Olive-Green-MAX-Men-Striped-Band-Collar-Slim-Fit-Short-Kurta/p/1000011722997-Green-OLIVEGREEN",
      "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011722997-Green-OLIVEGREEN-1000011722997-02092022_01-2100.jpg",
      "MuiBox-root": "New",
      "rup": "₹",
      "name": "MAX Men Striped Band Collar Slim Fit Short Kurta",
      "price": 55,
      "id": 2
    },
    {
      "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Maroon-MAX-Men-Floral-Printed-Mandarin-Collar-Kurta/p/1000011722831-Red-MAROON",
      "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011722831-Red-MAROON-1000011722831-02092022_01-2100.jpg",
      "MuiBox-root": "New",
      "rup": "₹",
      "name": "MAX Men Floral Printed Mandarin Collar Kurta",
      "price": 79,
      "id": 3
    },
    {
      "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Blue-MAX-Men-Printed-Mandarin-Collar-Kurta/p/1000011722805-Blue-NAVY",
      "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011722805-Blue-NAVY-1000011722805-26082022_01-2100.jpg",
      "MuiBox-root": "New",
      "rup": "₹",
      "name": "MAX Men Printed Mandarin Collar Kurta",
      "price": 89,
      "id": 4
    }
]

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


let totalSum;
let ns = 0;
let lsVal = 0;
document.getElementById('availOffer').addEventListener('click', function(){

    let disc4 = document.getElementById('disc4').value;
    
    let hiddenHurrray = document.getElementById('hiddenHurrray')
    hiddenHurrray.style.display = 'block'

ns = Math.floor(ns - ((4*ns)/100))
    

    calculation(ns, 0)
    
    
})


// All Calculation functions ------------------
let itemTotal = document.getElementById('itemTotal');
let showTotal = document.getElementById('showTotal');

let calculation = (val, ns) => {


    itemTotal.innerText = `$${val+ns}`
    showTotal.innerText = `$${val+ns}`

    lsVal = val+ns
}
 


let newVal = 0;


let arr = []
// appending Functions  ---------------------
let cards = ({product_image, name, price, id}) => {

    let div = document.createElement('div');
    div.className = 'productDiv'

    let div2 = document.createElement('div');
    div2.className = 'buttonDiv'

    let descText = document.createElement('p');
    descText.innerText = 'Digital Download Emailed after order confirmation. BestBuy.com account required.'
    descText.className = 'descText'

    let img = document.createElement('img');
    img.src = product_image


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

            
            let quantityPrice = (quantity-1)*price

            let count = 0;
            for(let i=0; i<30; i++){

            if(arr[i] == id){

                count++
                break
            }
        }
        
        let val=0
        
            if(count == 0){
                newVal+=quantityPrice
                console.log(newVal)
                arr.push(id)
                count = 0
                calculation(newVal, ns)
            }else{


                // val = quantityPrice
                
                console.log(newVal)
                count = 0 
            }
        }
            
            
        
        quantityBtn.append(options)
        
    }
    
    

    let removeBtn = document.createElement('p')
    removeBtn.innerText = 'Remove'
    removeBtn.className = 'linkClr'
    removeBtn.onclick = () => {
        removeProduct(id)
    }
    

    let saveBtn = document.createElement('p')
    saveBtn.innerText = 'Save'
    saveBtn.className = 'linkClr'


    let prices = document.createElement('h4')
    prices.innerText = ` $ ${price}`
    prices.className = 'prices'

    ns+=price

    itemTotal.innerText = `$${ns}`
    showTotal.innerText = `$${ns}`
    div2.append(removeBtn, saveBtn)

    div.append(img,title, descText, quantityBtn, div2, prices)

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

renderDom(mens)

let removeProduct = (id) => {

    let ind = id - 1
    mens.splice(ind, 1)
    console.log(mens)
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
