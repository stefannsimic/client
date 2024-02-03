if ($('.team-slider').length > 0) {
    $('.team-slider').owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        nav: true,
        navText:['<span class="fas fa-arrow-circle-left"></span>', '<span class="fas fa-arrow-circle-right"></span>'],
   responsive: {
          320:{
                items:1,
                dots:false,
                nav:true,
            },
            768:{
                dots:true,
                nav:false
            }
        }
    });
}



if ($('.client-slider').length > 0) {
    $('.client-slider').owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
    });
}