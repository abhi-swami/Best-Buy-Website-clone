

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


let showPrice = document.getElementById('showPrice')
let totalPrice = document.getElementById('totalPrice')

showPrice.innerText = `$${data}`
totalPrice.innerText = `$${data}`

