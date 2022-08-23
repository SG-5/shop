import URL from './js/data.js'
import { createProduct } from './js/product.js'
import modalWindow from './js/cart.js';
import { search } from './js/search.js'



function fatchProduct() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(URL), 1000)
  })
}



function drawProduct() {
  fatchProduct()
    .then(res => JSON.parse(res))
    .then(data => {
      let arrProduct = data.map(item => createProduct(item))
      const container = document.createElement('div')
      container.classList.add("container")
      container.append(...arrProduct)
      document.body.append(container)
      modalWindow()
      search()
    })

}

drawProduct()









