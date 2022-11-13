    let product = JSON.parse(localStorage.getItem('afnprod'))

    console.log('product:', product)

    let container = document.getElementById('container')

    let display = document.getElementById('display')

    let div = document.createElement('div')

    let img = document.createElement('img')
    img.src = product.img
    img.className = 'img1'

    let brand = document.createElement('h3')
    brand.innerHTML = product.Brand

    let title = document.createElement('p')
        title.innerHTML = product.title
    title.className = 'name'

    let offer = document.createElement('p')
    offer.innerHTML = product.save
    offer.className = 'offer'

    // let MSRP = document.createElement('del')
    // MSRP.innerHTML = product.MSRP
    // MSRP.className = 'max'

    let price = document.createElement('p')
    price.innerHTML = product.price
    price.className = 'price'

    let review = document.createElement('p')
    review.innerHTML = 'Reviews: '+product.review
    review.className = 'review'

    // let code = document.createElement('p')
    // code.innerHTML = 'Item-Code: '+ product.ItemCode
    // code.className = 'code'

    let btn = document.createElement('button')
    btn.innerHTML = 'Add to Cart'
    // btn.style.color = 'blue'
    // btn.style.backgroundColor = 'white'
    // btn.style.border = '2px solid blue'
    btn.className = 'btn'

    let btn1 = document.createElement('button')
    btn1.innerHTML = 'Buy Now'
    btn1.style.color = 'white'
    btn1.style.backgroundColor = 'blue'
    btn1.style.border = '1px solid blue'
    btn1.className = 'btn1'


container.append(img)

display.append(title, price, offer, review, btn, btn1)