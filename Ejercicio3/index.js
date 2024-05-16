//* 1.1
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
// const ulElement = document.createElement('ul')
// countries.forEach((country) => {
//  const liElement = document.createElement('li')
//  liElement.textContent = country
//  ulElement.appendChild(liElement)
// })
// const printCountrys = document.querySelector('div[data-function="printHere"]')
// printCountrys.appendChild(ulElement)

//* 1.2
// let elementToRemove = document.querySelector('.fn-remove-me')
// if (elementToRemove) {
//  elementToRemove.remove()
// }

//* 1.3
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
// const printHereDiv = document.querySelector('div[data-function="printHere"]')
// const ulElement = document.createElement('ul')
// cars.forEach((car) => {
//  const liElement = document.createElement('li')
//  liElement.textContent = car
//  ulElement.appendChild(liElement)
// })
// printHereDiv.appendChild(ulElement)

//* 1.4
// const countries = [
// { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
// { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
// { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
// { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
// { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
//  ]
//  const printHereDiv = document.querySelector('div[data-function="printHere"]')
// countries.forEach((country) => {
// const newDiv = document.createElement('div')
// const TitleElement = document.createElement('h4')
// TitleElement.textContent = country.title
// const imgElement = document.createElement('img')
// imgElement.src = country.imgUrl
// newDiv.appendChild(TitleElement)
// newDiv.appendChild(imgElement)
// printHereDiv.appendChild(newDiv)
// })

//* 1.5
const deleteButton = document.createElement('button')
deleteButton.textContent = 'Eliminar Último Elemento'
deleteButton.id = 'deleteButton'

const printHereDiv = document.querySelector('div[data-function="printHere"]')
document.body.appendChild(deleteButton)
deleteButton.addEventListener('click', () => {
 constdivs = document.querySelectorAll('div[data-function="printHere"] > div')
 if (divs.length > 0) {
  const lastDiv = divs[divs.length - 1]
  lastDiv.remove()
 }
})

//* 1.6
// const countries = [
//  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
//  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
//  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
//  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
//  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
// ]

// const printHereDiv = document.querySelector('div[data-function="printHere"]')
// countries.forEach((country, index) => {
//  const newDiv = document.createElement('div')
//  const TitleElement = document.createElement('h4')
//  TitleElement.textContent = country.title
//  const imgElement = document.createElement('img')
//  imgElement.src = country.imgUrl
//  const deleteButton = document.createElement('button')
//  deleteButton.textContent = 'Eliminar'
//  deleteButton.addEventListener('click', () => {
//   newDiv.remove()
//  })

//  newDiv.appendChild(TitleElement)
//  newDiv.appendChild(imgElement)
//  newDiv.appendChild(deleteButton)
//  printHereDiv.appendChild(newDiv)
// })
