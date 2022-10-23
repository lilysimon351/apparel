let gallerySwiper;
let galleryInit = false;
function galleryMode() {
  let mobile = window.matchMedia("(max-width: 767px)");
  
    if (mobile.matches) {
      
        if(!galleryInit) {
            galleryInit = true;
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
    gallerySwiper?.destroy();
    galleryInit = false;
  }
}

window.addEventListener("load", function () {
  galleryMode();
});

window.addEventListener("resize", function () {
  galleryMode();
});