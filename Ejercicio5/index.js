document.addEventListener('DOMContentLoaded', () => {
 const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
 ]

 const ulElement = document.createElement('ul')

 albums.forEach((album) => {
  const liElement = document.createElement('li')
  liElement.textContent = album
  ulElement.appendChild(liElement)
 })
 document.body.appendChild(ulElement)
})
