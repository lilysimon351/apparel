new Swiper('.choise__slider', {
    // Optional parameters
    centeredSlides: true,
    spaceBetween: 40,
    loop: true,
    // If we need pagination
    pagination: {
      el: '.choise__pagination',
      clickable: true
    },

});

let catalogSwiper, gallerySwiper;
let init = false;
function swiperMode() {
  let mobile = window.matchMedia("(max-width: 767px)");
  
  if (mobile.matches) {
    if (!init) {
      init = true;
      catalogSwiper = new Swiper('.catalog__slider', {
        // Optional parameters
        centeredSlides: true,
        loop: true,
        spaceBetween: 40,
        
        // If we need pagination
        pagination: {
          el: '.catalog__pagination',
          clickable: true
        },
    });
    gallerySwiper = new Swiper('.gallery__slider', {
        // Optional parameters
        centeredSlides: true,
        loop: true,
        spaceBetween: 40,
        
        // If we need pagination
        pagination: {
          el: '.gallery__pagination',
          clickable: true
        },
    });
    }
  } else {
    catalogSwiper?.destroy();
    init = false;
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