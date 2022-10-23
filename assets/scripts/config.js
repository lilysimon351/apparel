let baseSwiper, extraSwiper;
let baseInit = false;
let extraInit = false;
function configMode() {
    let mobile = window.matchMedia("(max-width: 1023px)");
  
    if (mobile.matches) {
        if(!baseInit) {
            baseInit = true;
            baseSwiper = new Swiper('.config__base', {
                // Optional parameters
                
                // If we need pagination
                pagination: {
                    el: '.base__pagination',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        grid: {
                            rows: 2,
                            fill: 'row'
                        },
                    },
                    0: {
                        slidesPerView: 1,
                        grid: {
                            rows: 1,
                            fill: 'row'
                        },
                    },
                }
                
            });
        }
        if(!extraInit) {
            extraInit = true;
            extraSwiper = new Swiper('.config__extra', {
                // Optional parameters
                
                // If we need pagination
                pagination: {
                    el: '.extra__pagination',
                    clickable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        grid: {
                            rows: 2,
                            fill: 'row'
                        },
                    },
                    0: {
                        slidesPerView: 1,
                        grid: {
                            rows: 1,
                            fill: 'row'
                        },
                    },
                }
            });
        }
    } else {
        baseSwiper?.destroy();
        extraSwiper?.destroy();
        baseInit = false;
        extraInit = false;
    }
}

window.addEventListener("load", function () {
  configMode();
});

window.addEventListener("resize", function () {
  configMode();
});