new Swiper('.choise__slider', {
    // Optional parameters
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    loopAdditionalSlides: 1,
    pagination: {
      el: '.choise__pagination',
      clickable: true
    },

});

let catalogSwiper;
let catalogInit = false;
function swiperMode() {
  let mobile = window.matchMedia("(max-width: 767px)");
  
  if (mobile.matches) {
    if (!catalogInit) {
    catalogInit = true;
        catalogSwiper = new Swiper('.catalog__slider', {
            // Optional parameters
            centeredSlides: true,
            loop: true,
            spaceBetween: 40,
            loopAdditionalSlides: 1,
            // If we need pagination
            pagination: {
                el: '.catalog__pagination',
                clickable: true
            },
        });
    }   
  } else {
    catalogSwiper?.destroy();
    catalogInit = false;
  }
}

window.addEventListener("load", function () {
  swiperMode();
});

window.addEventListener("resize", function () {
  swiperMode();
});


new Swiper('.producer__slider', {
    // Optional parameters
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    // slidesPerView: 3,
    initialSlide: 1,
    spaceBetween: 0,
    setWrapperSize: true, 
    // Responsive breakpoints
    breakpoints: {
        768: {
            spaceBetween: 0,
        },
        300: {
            spaceBetween: 0,
            slidesPerView: 1
        },
    },
    // If we need pagination
    pagination: {
      el: '.producer__pagination',
      clickable: true
    },

});