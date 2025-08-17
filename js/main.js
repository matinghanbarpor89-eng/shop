(function ($) {
    "use strict";
    // preloader
    $(window).on('load', function() {  
        $('#loading').fadeOut();
        $('#loading-center').delay(350).fadeOut('slow'); 
    }); 
    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    // search-box
    $(".s-box").click(function(){
        $(".search-box").fadeToggle();
    });
     // search-box
     $(".quice-views").click(function(){
        $(".product-quice-view-area").fadeToggle();
    });
    
    //hero slide
    $('.hero-slider ').owlCarousel({
        items:1,
			autoplay:true,
			autoplayTimeout:5000,
			smartSpeed: 400,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			merge:true,
			dots:false,
			navText: ['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right"></i>'],
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:1,
				},
				1170: {
					items:1,
				},
			}

    })

    //slider product

        $('.slide-pro').owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:5000,
			smartSpeed: 400,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			merge:true,
			dots:false,
			navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
				},
				1170: {
					items:4,
				},
			}
		});


    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });

    // sticky
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 2) {
            $("#header-sticky").removeClass("sticky");
        } else {
            $("#header-sticky").addClass("sticky");
        }
    });

    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    

    //pop up img
    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
      });

     
    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });

    // filter items on button click
    $('.portfolio-filter').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    $('.portfolio-filter').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
    // WOW active
    new WOW().init();

     /* START MAP JS */
			google.maps.event.addDomListener(window, 'load', init);
			function init() {
				var mapOptions = {
					zoom: 15,
					scrollwheel: false,
					center: new google.maps.LatLng(53.557899, -113.487289)
					
				};
				var mapElement = document.getElementById('map');
				var map = new google.maps.Map(mapElement, mapOptions);
				var marker = new google.maps.Marker({
					map: map,
					draggable: true,
					animation: google.maps.Animation.BOUNCE,
					position: new google.maps.LatLng(53.557899, -113.487289)
				});
				marker.setAnimation(google.maps.Animation.BOUNCE);
			};			
		/* END MAP JS */
     


})(jQuery);
