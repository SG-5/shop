// create modal window (cart ) and add product in cart
export default function cart() {


  const cart = document.querySelector('.card-button')
  const modalOverlay = document.createElement('div')
  const modalWindow = document.createElement('div')
  const modalHeader = document.createElement('div')

  modalWindow.append(modalHeader)
  modalHeader.innerText = "SHOPPING BAG"
  modalHeader.classList.add('modal-header')
  modalWindow.classList.add('modal-window')
  modalOverlay.append(modalWindow)
  document.body.append(modalOverlay)



  document.addEventListener('click', (event) => {

    const modalbody = document.createElement('div')
    modalbody.classList.add('modal-body')

    const deleteButton = document.createElement('button')
    deleteButton.classList = 'delete-button'

    const image = document.createElement('img')
    const title = document.createElement('span')
    const price = document.createElement('span')




    if (event.target.className === 'add-button') {
      modalWindow.append(modalbody)
      modalbody.append(image, title, price, deleteButton)


      for (let i of event.target.parentNode.children) {
        if (i !== event.target) {

          [...i.children].map((elem, index) => {


            if (elem.src) {

              image.setAttribute('src', elem.src)

            }

            if (elem.classList.contains('title')) {

              title.innerText = elem.innerText

            }
            if (elem.classList.contains('price')) {

              price.innerText = elem.innerText

            }

          })
        }
      }


    }
    // remove product from cart
    if (event.target.className === 'delete-button') {
      event.target.parentNode.remove()
    }

  })



// open and close modal window
  document.addEventListener('click', (e) => {

    if (e.target === cart) {
      modalWindow.style.display = 'block'
      document.body.style.overflow = 'hidden'
      modalOverlay.classList.add('modal-overlay')
      modalOverlay.style.overflow = 'auto'
    }
    if (e.target === modalOverlay) {
      modalWindow.style.display = 'none'
      modalOverlay.classList.remove('modal-overlay')
      document.body.style.overflow = 'auto'
    }

  })



}




