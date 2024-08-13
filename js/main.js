const hamburgerContainer = document.querySelector('.hamburger')
hamburgerContainer.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active')
})