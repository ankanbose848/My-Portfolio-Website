$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
	    autoWidth: false
        },
        700:{
            items:2
        },
        1180:{
            items:4
        }
    }
})

$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('#navbar').addClass('floatingNav');
    } else {
        $('#navbar').removeClass('floatingNav');
    }
});


