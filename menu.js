let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let orverlay = document.getElementById("orverlay-menu")

btnMenu.addEventListener('click', () =>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})

orverlay.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})