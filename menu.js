let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let dropdown = document.getElementById('dropdown')

btnMenu.addEventListener('click', () => {
  menu.classList.add('abrir-menu')
  overlay.style.display = 'block' // Mostra o overlay
})

menu.addEventListener('click', () => {
  menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
  menu.classList.remove('abrir-menu')
  overlay.style.display = 'none' // Esconde o overlay
})

dropdown.addEventListener('click', function (event) {
  event.stopPropagation()
  let dropdownContent = document.getElementById('dropdown-content')
  dropdownContent.style.display =
    dropdownContent.style.display === 'block' ? 'none' : 'block'
})

// Fechar o submenu quando clicar fora
window.addEventListener('click', function (event) {
  let dropdownContent = document.getElementById('dropdown-content')
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none'
  }
})

menu.addEventListener('click', () => {
  menu.classList.remove('abrir-menu')
  overlay.style.display = 'none' // Esconde o overlay
})

const menuLinks = document.querySelectorAll('.scroll-link')

menuLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    const targetId = this.getAttribute('href')
    const targetElement = document.querySelector(targetId)

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
})
