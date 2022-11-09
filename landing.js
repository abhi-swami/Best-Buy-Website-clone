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
