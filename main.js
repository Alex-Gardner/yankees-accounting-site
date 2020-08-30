const hamburgerButton = document.querySelector('#mobile-hamburger-button');
const menuNav = document.querySelector('#menu-holder');
const pageRoot = document.querySelector('#outer-holder');
const lightDarkButton = document.querySelector('#light-dark-holder');
const lightDarkText = document.querySelector('#light-dark-text')
const serviceHolderBGIMG = document.querySelector('#service-holder-bg-img')
const serviceItemList = document.querySelectorAll('.service-item');
const testimonialsSplashImg = document.querySelector('#testimonials-splash-img')

// Default Mode to saved local storage
// localStorage.setItem('colorScheme', 'dark')

let colorScheme = localStorage.getItem('colorScheme') || 'light'

function setDefaultMode(modeChoice) {
    if (modeChoice === 'light') {
        localStorage.setItem('colorScheme', 'light')
        // pageRoot.classList.replace('dark', 'light')
        // lightDarkText.innerHTML = "Dark"
    } else if (modeChoice === 'dark') {
        localStorage.setItem('colorScheme', 'dark')
        // pageRoot.classList.replace('light', 'dark')
        // lightDarkText.innerHTML = "Light"
    }
}

(function readDefaultMode() {
    console.log(colorScheme)
    if (colorScheme === 'light') {
        pageRoot.classList.add('light')
        lightDarkText.innerHTML = "Dark"
        if (!testimonialsSplashImg) {} else {testimonialsSplashImg.src = './assets/pexels-pixabay-268819.jpg'}
        if (!serviceHolderBGIMG) {} else {serviceHolderBGIMG.src = './assets/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg'}
        // serviceHolderBGIMG.src = './assets/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg'
    } else if (colorScheme === 'dark') {
        pageRoot.classList.add('dark')
        lightDarkText.innerHTML = "Light"
        if (!testimonialsSplashImg) {} else {testimonialsSplashImg.src = './assets/pexels-taryn-elliott-4183522.jpg'}
        if (!serviceHolderBGIMG) {} else {serviceHolderBGIMG.src = './assets/jamie-street-dO9zecIYnWA-unsplash.jpg'}
        // serviceHolderBGIMG.src = './assets/jamie-street-dO9zecIYnWA-unsplash.jpg'
    }
})();
        

function toggleMenuVisible() {
    menuNav.classList.toggle('visible')
}
function toggleLightDarkMode() {
    console.log(colorScheme)
    if (pageRoot.classList.contains('dark')) {
        setDefaultMode('light')
        pageRoot.classList.replace('dark', 'light')
        lightDarkText.innerHTML = "Dark"
        if (!testimonialsSplashImg) {} else {testimonialsSplashImg.src = './assets/pexels-pixabay-268819.jpg'}
        if (!serviceHolderBGIMG) {} else {serviceHolderBGIMG.src = './assets/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg'}
        // serviceHolderBGIMG.src = './assets/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg'        
    }
    else if (pageRoot.classList.contains('light')) {
        setDefaultMode('dark')
        pageRoot.classList.replace('light', 'dark')
        lightDarkText.innerHTML = "Light"
        if (!testimonialsSplashImg) {} else {testimonialsSplashImg.src = './assets/pexels-taryn-elliott-4183522.jpg'}
        if (!serviceHolderBGIMG) {} else {serviceHolderBGIMG.src = './assets/jamie-street-dO9zecIYnWA-unsplash.jpg'}
        // serviceHolderBGIMG.src = './assets/jamie-street-dO9zecIYnWA-unsplash.jpg'
    }
}

// ---------------------------------------------


serviceItemList.forEach(serviceItem => {
    const proceedLinkHolder = document.createElement('div')
    proceedLinkHolder.classList.add('proceed-img-holder')
    proceedLinkHolder.innerHTML = '<img src="./assets/next-chevron.svg" alt="go to page">' 
    serviceItem.appendChild(proceedLinkHolder)
})