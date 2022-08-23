// create product-card 
export function createProduct({ src, title, price }) {
  const displayBlock = document.createElement('div')
  displayBlock.classList.add("display")

  const cardProduct = document.createElement('div')
  cardProduct.classList.add('cardProduct')

  const img = document.createElement('img')
  img.setAttribute('src', `${src}`)


  const nameProduct = document.createElement('p')
  nameProduct.innerHTML = `${title}`
  nameProduct.classList.add('title')

  const priceProduct = document.createElement('span')
  priceProduct.innerHTML = `${price}`
  priceProduct.classList.add('price')

  const addButton = document.createElement('div')
  addButton.innerText = 'Add to Cart'
  addButton.classList.add('add-button')

  cardProduct.append(img, nameProduct, priceProduct)
  displayBlock.append(cardProduct, addButton)



  return displayBlock
}