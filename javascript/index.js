var header = document.getElementById("header");
header.setAttribute("style", "background-color: rgba(0, 0, 0, 0);")



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
    
    let slidein = document.querySelectorAll("img.slidein");
    let bctext = document.querySelector("div.bc-text");
    
    if(window.scrollY >= (bc.offsetTop * 0.5)){
        // console.log("here");
        
        
        bctext.classList.add("active");
       
        var interval = 250;
        var i = 1;

        slidein.forEach(function(slide, index){
            var nextslide = setTimeout(function(){
                slide.classList.add("active");

                clearTimeout(nextslide);
            }, interval * i);

            i++;
        });

    }else{
        bctext.classList.remove("active");
        pic1.classList.remove("active");
        pic2.classList.remove("active");
        pic3.classList.remove("active");
    };

    // ------ Section 2: New Arrival ------
    let narrvl = document.getElementById("narrvl");
    let naitems = document.querySelectorAll("div.i-card");

    if(window.scrollY >= (narrvl.offsetTop * 0.9)){
        // console.log("here");
        naitems.forEach(function(item, index){
            item.classList.add("active");
        })
    }else{
        naitems.forEach(function(item, index){
            item.classList.remove("active");
        })
    }


    // ------ Section 4: What's new ------
    let whatsnew = document.getElementById("whatsnew");
    let ncard = document.querySelectorAll("div.n-card");

    if(window.scrollY >= (whatsnew.offsetTop * 0.9)){
        console.log("here");
        ncard.forEach(function(item, index){
            item.classList.add("active");
        })
    }else{
        ncard.forEach(function(item, index){
            item.classList.remove("active");
        })
    }

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