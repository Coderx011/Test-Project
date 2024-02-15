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
if (closeButton) {
closeButton.addEventListener("click",closed);
}


const listItems = document.querySelectorAll(".preview-box-main-inner ul li");
    // Add event listener to each <li> element
    listItems.forEach(function (item) {
        item.addEventListener("click", toggleSelectedClass);
    });

const listedItems = document.querySelectorAll(".drop-down-main ul li");
    // Add event listener to each <li> element
    listedItems.forEach(function (item) {
        item.addEventListener("click", toggleSelectedClass);
    });

 const resetButtons = document.querySelectorAll('.drop-down-footer');

    // Add click event listener to each reset button
    resetButtons.forEach(function (button) {
        button.addEventListener('click', handleResetClick);
    });



    
    
   
    // Prpduct detail function
    const listsize = document.querySelectorAll(".product-avilable-sizes button");
    const productBrand = document.querySelector(".brand-text span"),
    productName = document.querySelector(".price-text > span"),
    productId = document.querySelector(".price-text .product-id-btn"),
    productQuantity = document.querySelector(".product-numbers"),
    productPrice = document.querySelector(".detailed-price .d-price span:nth-child(2)"),
    addCart = document.querySelector(".add-cart");

    listsize.forEach((item) => {
        if (!item.classList.contains("disabled")) {
            item.addEventListener("click", () => {
               
                // Remove 'active' class from all spans
                listsize.forEach((item) => {
                    item.classList.remove("active");
                });
                // Add 'active' class to the clicked span
                item.classList.toggle("active");
            });
        }
    });

addCart.addEventListener("click", () => {
    const activeSizeButton = Array.from(listsize).find(item => item.classList.contains('active'));
    const requiredSize = activeSizeButton ? activeSizeButton.querySelector('span').textContent : null;
;
    if (requiredSize) {
        console.log(`Selected Product Brand: ${productBrand.textContent}\n`,
            `Selected Product Name: ${productName.textContent}\n`,
            `Selected Product ID: ${productId.textContent}\n`,
            `Selected Product Price: ${productPrice.textContent}\n`,
            `Selected Product Price: ${productQuantity.textContent}\n`,
            `Selected Product Size: ${requiredSize}\n`);
    } else {
        alert("Kindly select a size before adding to cart.");
    }
});



   

//   if (productSize) {
//         let selectedvalue = productSize.querySelector('span');
//         console.log(selectedvalue.textContent)
//  } else {
//            console.log(productBrand.textContent , productName.textContent ,productId.textContent , productPrice.textContent ,productSize ,addCart);
//  }
    
    


  




    // ===========DOM=========

});

function selectedProductSize(){

}
// out side function====================================================
function toggleSelectedClass() {
    // Toggle the "selected" class on the clicked <li> element
    this.classList.toggle("active");
}

function clearAllClasses() {
    // Get all <li> elements
    const listItems = document.querySelectorAll(".preview-box-main-inner ul li");

    const previewPrice = document.querySelectorAll(".preview-input-field input");
    let minprice = parseInt(previewPrice[0].getAttribute("value")),
    maxprice = parseInt(previewPrice[1].getAttribute("value"));
    console.log(`This is price range from  ${minprice} to ${maxprice}`)

    // Remove the "selected" class from all <li> elements
    listItems.forEach(function (item) {
        item.classList.remove("active");
    });
}

function selectedItems(){
    const listItems = document.querySelectorAll(".preview-box-main-inner ul li.active"),
    previewPriceinput = document.querySelectorAll(".preview-input-field input");

    
    let minPrice = parseInt(previewPriceinput[0].value),
    maxPrice = parseInt(previewPriceinput[1].value);
    console.log(`This is price range from  ${minPrice} to ${maxPrice}`)

    // Remove the "selected" class from all <li> elements
    listItems.forEach(function (item) {
    activeElement =  item.textContent;
    console.log(activeElement);

    });
}

// fucntion used to reset value of indvidual dropdown



function handleResetClick() {
    // 'this' refers to the clicked reset button
    const clickedButton = this;

    // Traverse the DOM to find the common parent div
    const commonParentDiv = clickedButton.closest('.drop-down-inner');
    const listedItems = commonParentDiv.querySelectorAll(".drop-down-main ul li"); 
    
    listedItems.forEach(function (item) {
        item.classList.remove("active");
    });

}

// ===================icnrenent decremwent========

let counter = 1;

function incrementValue(element) {
    // Get the input element within the same parent
    let inputElement = element.closest('.prduct-quantity-inner');
    let productNumber = inputElement.querySelector(".product-numbers");
    counter++
    // Increment the value
    if (counter <= 5) {
        productNumber.textContent = counter;
    } else {
        alert("Want to order in BUlk");
    }
    
}

function decrementValue(element) {
    // Get the input element within the same parent
    let inputElement = element.closest('.prduct-quantity-inner');
    let productNumber = inputElement.querySelector(".product-numbers");

    counter--;
    // Check if the value is greater than 1 before decrementing
    if (counter > 1) {
        // Decrement the value
        
        productNumber.textContent = counter;
    } else {
        // Set the value to 1 if it's already 1
        productNumber.textContent = 1;
        counter = 1
    }

}




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

