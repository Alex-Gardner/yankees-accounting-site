const hamburgerButton = document.querySelector('#mobile-hamburger-button');
const menuNav = document.querySelector('#menu-holder');
const pageRoot = document.querySelector('#outer-holder');
const lightDarkButton = document.querySelector('#light-dark-holder');
const lightDarkText = document.querySelector('#light-dark-text')
const serviceHolderBGIMG = document.querySelector('#service-holder-bg-img')


function toggleMenuVisible() {
    menuNav.classList.toggle('visible')
}
function toggleLightDarkMode() {
    if (pageRoot.classList.contains('dark')) {
        pageRoot.classList.replace('dark', 'light')
        lightDarkText.innerHTML = "Dark"
    }
    else if (pageRoot.classList.contains('light')) {
        pageRoot.classList.replace('light', 'dark')
        lightDarkText.innerHTML = "Light"
    }
    if (pageRoot.classList.contains('light')) {
        serviceHolderBGIMG.src = './assets/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg'
    }
    else if (pageRoot.classList.contains('dark')) {
        serviceHolderBGIMG.src = './assets/jamie-street-dO9zecIYnWA-unsplash.jpg'
    }
}
