var header = document.getElementById("header");
header.setAttribute("style", "background-color: rgba(0, 0, 0, 0);")
var bctext = document.querySelector("div.bc-text");
bctext.setAttribute("style", "opacity: .1;");

// ----- Scroll 事件 -------
window.addEventListener("scroll", function(){
    console.log(window.scrollY);

    // ------ Header ------
    let top_block = document.getElementsByClassName("indextop")[0];
    // console.log(top_block.offsetHeight);
    if(window.scrollY >= (top_block.offsetHeight * 0.7)){
        header.setAttribute("style", "background-color: #26273B);");
        header.style.transition = "1s";
    }else{
        header.setAttribute("style", "background-color: rgba(0, 0, 0, 0);")
    };

    // ------ Section 1: Brand Concept ------
    let bc = document.getElementById("bc");
    let pic1 = document.querySelector("img.bc1");
    let pic2 = document.querySelector("img.bc2");
    let pic3 = document.querySelector("img.bc3");
    let narrvl = document.getElementById("narrvl");
    
    // pic1.setAttribute("style", "transform: translateX(-100px);");
    

    if(window.scrollY >= (bc.offsetTop * 0.5)){
        console.log("here");
        // pic1.setAttribute("style", "transform: translateX(100px);")
        let bctext = document.querySelector("div.bc-text");
        bctext.setAttribute("style", "opacity: 1;");
        bctext.style.transition = "3s";
    };
});



// ----- Scroll 事件 結束 -------

//slider
// var slideIndex = 0;
// slidesShow();

// function slidesShow(){
//     var slides = document.getElementsByClassName("slide");
//     var dots = document.getElementsByClassName("dot");
//     for(let i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if(slideIndex > slides.length) {slideIndex = 1}
//     for(let i = 0; i < dots.lenngth; i++){
//     dots[i].className = dots[i].className.replace(" active", "");
//     }    
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(slidesShow, 2500);
// }