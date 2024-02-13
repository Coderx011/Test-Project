
$(document).ready(function(){
$('.custom1').owlCarousel({
    loop:true,
    margin:20,
    item:1,
    dotEach:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    
});

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    dotEach:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

});