//* 1.1
// document.addEventListener('DOMContentLoaded', () => {
//  const clickInput = document.querySelector('.click')
//  const focusInput = document.querySelector('.focus')
//  const valueInput = document.querySelector('.value')
// const btnToClick = document.getElementById('btnToClick')

//  clickInput.addEventListener('click', () => {
//   alert('Input clicked')
//  })

//  focusInput.addEventListener('focus', () => {
//   console.log('Focus input value:', focusInput.value)
//  })

//  btnToClick.addEventListener('click', (event) => {
//   console.log('Button clicked', event)
//  })
// })

//* 1.2
// document.addEventListener('DOMContentLoaded', () => {
//  const clickInput = document.querySelector('.click')
//  const focusInput = document.querySelector('.focus')
//  const valueInput = document.querySelector('.value')

//  clickInput.addEventListener('click', () => {
//   alert('Input clicked')
//  })

//  focusInput.addEventListener('focus', () => {
//   console.log('Focus inpiut value:', focusInput.value)
//  })
// })

//* 1.3
document.addEventListener('DOMContentLoaded', () => {
 const clickInput = document.querySelector('.click')
 const focusInput = document.querySelector('.focus')
 const valueInput = document.querySelector('.value')
 const btnToClick = document.getElementById('btnToClick')

 clickInput.addEventListener('click', () => {
  alert('Input clicked')
 })

 focusInput.addEventListener('focus', () => {
  console.log('Focus input value:', focusInput.value)
 })

 valueInput.addEventListener('input', () => {
  console.log('Input value:', valueInput.value)
 })

 btnToClick.addEventListener('click', (event) => {
  console.log('Button clicked', event)
 })
})
