




// Slider

(function(){
    
    let sliderContainer = document.querySelector('.slider-wrapper');

    let slides = document.querySelectorAll('.slider-wrapper .text');

    let prev = document.querySelector('.prev');

    let next = document.querySelector('.next');

    let sliderIndex = 0


    let slideWidth = sliderContainer.offsetWidth;

    slides.forEach(slide => {

        slide.style.width = slideWidth + "px";

        console.log(slide.offsetWidth)

    })

    sliderContainer.style.width = slides.length - 1 * slideWidth + "px";

    next.addEventListener('click',() => {
        
        sliderIndex == slides.length - 1 ? sliderIndex = 0 : sliderIndex++;

        sliderContainer.style.marginRight = -(sliderIndex * slideWidth) + "px";

    })

    prev.addEventListener('click',() => {
        
        sliderIndex == 0 ? sliderIndex = slides.length - 1 : sliderIndex--;
        
        sliderContainer.style.marginRight = -(sliderIndex * slideWidth) + "px";

    })

})()

// toggler
let toggler = document.querySelector('.toggler');
let nav = document.getElementById('nav');
let searchBox = document.querySelector('.search-box');

toggler.addEventListener('click',() => {

    nav.classList.toggle('active');
    searchBox.classList.toggle('hidden');
  
})