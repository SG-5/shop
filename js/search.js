// search  product
export function search() {
  const container = document.querySelector(".container")
  const searchButton = document.getElementById("search-button")
  const searchImput = document.getElementById("search-imput")
  const titlePhone = [...document.querySelectorAll(".title")]
  const phone = [...document.querySelectorAll(".display")]


  searchButton.addEventListener('click', (e) => {
    let val = searchImput.value.trim().toLowerCase()
    let result = titlePhone.map((item, index) => {
      let lowercaseProduct = item.innerHTML.toLocaleLowerCase()

      if (!(lowercaseProduct.includes(val) && val.length >= 3)) {
        phone[index].style.display = 'none'
      }
    })

  })
}
