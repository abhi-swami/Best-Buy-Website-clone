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




let men_data = [
   
    // {
    //   "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Green-MAX-Men-Striped-Band-Collar-Slim-Fit-Short-Kurta/p/1000011359476-Green-OLIVEGREEN",
    //   "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011359476-Green-OLIVEGREEN-1000011359476-15092022_01-2100.jpg",
    //   "rup": "₹",
    //   "price": 999,
    //   "name": "MAX Men Striped Band Collar Slim Fit Short Kurta",
    
    // },
    {
      "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Olive-Green-MAX-Men-Striped-Band-Collar-Slim-Fit-Short-Kurta/p/1000011722997-Green-OLIVEGREEN",
      "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011722997-Green-OLIVEGREEN-1000011722997-02092022_01-2100.jpg",
      "MuiBox-root": "New",
      "rup": "₹",
      "name": "MAX Men Striped Band Collar Slim Fit Short Kurta",
      "price": 799
    },
    {
      "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Maroon-MAX-Men-Floral-Printed-Mandarin-Collar-Kurta/p/1000011722831-Red-MAROON",
      "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011722831-Red-MAROON-1000011722831-02092022_01-2100.jpg",
      "MuiBox-root": "New",
      "rup": "₹",
      "name": "MAX Men Floral Printed Mandarin Collar Kurta",
      "price": 799
    },
    {
      "jss2573 href": "https://www.maxfashion.in/in/en/SHOP-Max-Blue-MAX-Men-Printed-Mandarin-Collar-Kurta/p/1000011722805-Blue-NAVY",
      "product_image": "https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011722805-Blue-NAVY-1000011722805-26082022_01-2100.jpg",
      "MuiBox-root": "New",
      "rup": "₹",
      "name": "MAX Men Printed Mandarin Collar Kurta",
      "price": 899
    }
]

let frequentCards = ({product_image, name, price, id}) => {

    let div = document.createElement('div');
    div.className = 'frequentDiv'

    let img = document.createElement('img');
    img.src = product_image


    let title = document.createElement('p');
    title.innerText = name
    title.className = 'frequentName'
    

    
    let addToCart = document.createElement('button')
    addToCart.innerText = 'Add to Card'
    addToCart.className = 'btnSet'


    let prices = document.createElement('h4')
    prices.innerText = `$${price}`
    prices.className = 'prices'
    

    div.append(img, title, prices,addToCart)
    return div
}

let renderFrequent = (data) => {

    let FBTSlider = document.getElementById('FBTSlider')

    FBTSlider.innerHTML = null;

    data.forEach((el)=> {

        FBTSlider.append(frequentCards(el))

    })
}
renderFrequent(men_data)


document.getElementById('checkout').addEventListener('click', function(){

    location.href= 'checkout.html'

    localStorage.setItem('price', JSON.stringify(lsVal))

    let newDate = Date()
    // console.log(newDate)
    
    localStorage.setItem('date', JSON.stringify(newDate))

})
