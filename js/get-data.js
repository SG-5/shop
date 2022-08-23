// get data from  https://yerevanmobile.am/


const listProductName=[...document.querySelectorAll('.product-item-link')]
const title = listProductName.map(item => ({ title: item.innerText }))

const listOfImg=[...document.querySelectorAll('.product-image-photo')]
const images = listOfImg.map(item => ({src: item.src}))

const listProductPrice=[...document.querySelectorAll('.price')]
const price = listProductPrice.map(item =>({ price: item.innerText }))
//price.push(price[2],price[8])

let data = title.map((item, index) => (
  {...item, ...images[index], ...price[index]}
))

let productData=JSON.stringify(data)