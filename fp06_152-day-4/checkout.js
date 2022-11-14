

let returnToCart = () => {
    location.href = 'cart.html' 
}

document.getElementById('pyoBtn').addEventListener('click', function(){

    
    let popBg = document.getElementById('popBg')

    popBg.style.display = 'block'

})

let continueShopping = () => {
    location.href = 'index.html'
}


let data = JSON.parse(localStorage.getItem('price'));

const url = 'https://mighty-savannah-51128.herokuapp.com/api/newCart'

let showPrice = document.getElementById('showPrice')
let totalPrice = document.getElementById('totalPrice')

let setPrice = async(url) => {


    let res = await fetch(url)
    res = await res.json()

    

    let sum = 0;
    res.forEach(el => {
        sum+= el.price
    })

    console.log(sum)

    showPrice.innerText = `$${sum}`
    totalPrice.innerText = `$${sum}`

}
setPrice(url)