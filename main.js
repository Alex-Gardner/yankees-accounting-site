const hamburgerButton = document.querySelector('#mobile-hamburger-button');
const menuNav = document.querySelector('#menu-holder');
const pageRoot = document.querySelector('#outer-holder');
const lightDarkButton = document.querySelector('#light-dark-holder');
const lightDarkText = document.querySelector('#light-dark-text')
const serviceHolderBGIMG = document.querySelector('#service-holder-bg-img')
const serviceItemList = document.querySelectorAll('.service-item');
const testimonialsSplashImg = document.querySelector('#testimonials-splash-img')
const contentPageSplashImg = document.querySelector('#contact-splash-image');
const bizAcquisitionSplashImg = document.querySelector('#purchase-sales-biz-acq-dec-img')
const slideInItems = document.querySelectorAll('.slide-right, .slide-left')

/* Useful debounce function in top level scope - taken from: 
https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086*/

const debounce = (func, wait) => {
    let timeout;
  
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };


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
        if (!testimonialsSplashImg) {} else {testimonialsSplashImg.src = './assets/pexels-pixabay-268819.webp'}
        if (!serviceHolderBGIMG) {} else {serviceHolderBGIMG.src = './assets/nastuh-abootalebi-yWwob8kwOCk-unsplash.webp'}
        if (!contentPageSplashImg) {} else {contentPageSplashImg.src = './assets/contact-page-mask-light.webp'}
        if (!bizAcquisitionSplashImg) {} else {bizAcquisitionSplashImg.src = './assets/micheile-henderson-lZ_4nPFKcV8-unsplash.webp'}
    } else if (colorScheme === 'dark') {
        pageRoot.classList.add('dark')
        lightDarkText.innerHTML = "Light"
        if (!testimonialsSplashImg) {} else {testimonialsSplashImg.src = './assets/pexels-taryn-elliott-4183522.webp'}
        if (!serviceHolderBGIMG) {} else {serviceHolderBGIMG.src = './assets/jamie-street-dO9zecIYnWA-unsplash.webp'}
        if (!contentPageSplashImg) {} else {contentPageSplashImg.src = './assets/contact-page-mask-dark.webp'}
        if (!bizAcquisitionSplashImg) {} else {bizAcquisitionSplashImg.src = './assets/william-daigneault-oWrZoAVOBS0-unsplash.webp'}
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
        if (!testimonialsSplashImg) {} else {testimonialsSplashImg.src = './assets/pexels-pixabay-268819.webp'}
        if (!serviceHolderBGIMG) {} else {serviceHolderBGIMG.src = './assets/nastuh-abootalebi-yWwob8kwOCk-unsplash.webp'}
        if (!contentPageSplashImg) {} else {contentPageSplashImg.src = './assets/contact-page-mask-light.webp'}               
        if (!bizAcquisitionSplashImg) {} else {bizAcquisitionSplashImg.src = './assets/micheile-henderson-lZ_4nPFKcV8-unsplash.webp'}               
    }
    else if (pageRoot.classList.contains('light')) {
        setDefaultMode('dark')
        pageRoot.classList.replace('light', 'dark')
        lightDarkText.innerHTML = "Light"
        if (!testimonialsSplashImg) {} else {testimonialsSplashImg.src = './assets/pexels-taryn-elliott-4183522.webp'}
        if (!serviceHolderBGIMG) {} else {serviceHolderBGIMG.src = './assets/jamie-street-dO9zecIYnWA-unsplash.webp'}
        if (!contentPageSplashImg) {} else {contentPageSplashImg.src = './assets/contact-page-mask-dark.webp'}        
        if (!bizAcquisitionSplashImg) {} else {bizAcquisitionSplashImg.src = './assets/william-daigneault-oWrZoAVOBS0-unsplash.webp'}        
    }
}

// ---------------------------------------------

(function applySlideAnimations() {
    if (!slideInItems) {return}
    const slideInOptions = {
        threshold: .8
    };
    const slideInOberver = new IntersectionObserver (function(entries, slideInOberver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {return}
            else {
                entry.target.classList.add('appear');
                slideInOberver.unobserve(entry.target);
            }
        })
    }, slideInOptions)

    slideInItems.forEach(item => {
        slideInOberver.observe(item)
    })
})();


serviceItemList.forEach(serviceItem => {
    const proceedLinkHolder = document.createElement('div')
    proceedLinkHolder.classList.add('proceed-img-holder')
    proceedLinkHolder.innerHTML = '<img src="./assets/next-chevron.svg" alt="go to page">' 
    serviceItem.appendChild(proceedLinkHolder)
})

// ----------------- HR Page ------------------------------
const hrButtonIcons = document.querySelectorAll('.hr-movable-icon');
const hrPageMainSection = document.querySelector('#hr-information-content-holder')
const hrIconsButton = document.querySelector('#hr-movable-icons-btn');
const svgHROfficeHolder = document.querySelector('#svg-office-holder');

if (hrButtonIcons) {
    let currentStation = 0;
    let clickCounter = 0;
    function changeHRIconStation() {
        clickCounter++;
        hrPageMainSection.classList.replace(`hr-station-${currentStation }`, `hr-station-${(currentStation + 1) % 4}`);
        currentStation = (currentStation + 1) % 4;
    }
    function visibleHRWorkers() {
        if (svgHROfficeHolder.classList.contains('holder-hidden')) {
            svgHROfficeHolder.classList.replace('holder-hidden', 'visible-state')
        }
    }
    function fadeInPersonSVG() {
        if (clickCounter <= 4) {
            svgHROfficeHolder.classList.add(`office-holder-click-${clickCounter}`)
        }
    }
    function stopButtonGlow() {
        if (clickCounter >= 3) {
            hrIconsButton.classList.remove('dancing-shadow')
        }
    }
    // function changeHRState() {
    //     changeHRIconStation();
    //     visibleHRWorkers();
    //     fadeInPersonSVG();
    //     stopButtonGlow();
    // }
    var changeHRState = debounce(function() {
        changeHRIconStation();
        visibleHRWorkers();
        fadeInPersonSVG();
        stopButtonGlow();
    }, 200)
    hrIconsButton.onclick = changeHRState;
    // on button click, advance station - (currentstation +1) % 4
    // replace currentStation className with currentStation's className
}