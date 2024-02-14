document.addEventListener("DOMContentLoaded", function() {
    const rangeInput = document.querySelectorAll(".price-range-input input"),
priceInput = document.querySelectorAll(".input-field input"),
range = document.querySelector(".price-slider .price-progress-bar");
let priceGap = 1000;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
// preview box slider
const preinputrange = document.querySelectorAll(".preview-price-range-input input"),
previewPriceinput = document.querySelectorAll(".preview-input-field input"),
prange = document.querySelector(".preview-price-slider .progress-bar");
let ppricegap = 5000;
previewPriceinput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(previewPriceinput[0].value),
        maxPrice = parseInt(previewPriceinput[1].value);
        
        if((maxPrice - minPrice >= ppricegap) && maxPrice <= preinputrange[1].max){
            if(e.target.className === "input-min"){
                preinputrange[0].value = minPrice;
                prange.style.left = ((minPrice / preinputrange[0].max) * 100) + "%";
            }else{
                preinputrange[1].value = maxPrice;
                prange.style.right = 100 - (maxPrice / preinputrange[1].max) * 100 + "%";
            }
        }
    });
});

preinputrange.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(preinputrange[0].value),
        maxVal = parseInt(preinputrange[1].value);
        if((maxVal - minVal) < ppricegap){
            if(e.target.className === "range-min"){
                preinputrange[0].value = maxVal - ppricegap
            }else{
                preinputrange[1].value = minVal + ppricegap;
            }
        }else{
            previewPriceinput[0].value = minVal;
            previewPriceinput[1].value = maxVal;
            prange.style.left = ((minVal / preinputrange[0].max) * 100) + "%";
            prange.style.right = 100 - (maxVal / preinputrange[1].max) * 100 + "%";
        }
    });
});


const filterButton = document.querySelector('.filters-inner .filter'),
      shadow = document.querySelector('.shadow'),
      previewBox = document.querySelector('.preview-box-wrapper'),
      closeButton = document.querySelector('.preview-box-header span.close');
      Wersternwear = document.querySelector('.navbar-nav .nav-item .western-wear');
      megamenu = document.querySelector('.mega-menu-wrapper');

 let opener =  () => {
    shadow.classList.add("active");
    previewBox.classList.add("active");
    document.querySelector('body').style.overflowY = "hidden";
};


let closed = () => {
    shadow.classList.remove("active");
    previewBox.classList.remove("active");
    document.querySelector('body').style.overflowY = "auto";
};

if (filterButton) {
    filterButton.addEventListener("click", opener);
}

closeButton.addEventListener("click",closed);
});



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
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    
    });

