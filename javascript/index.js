// -------- Loading page ----------
window.addEventListener("load", function(){

    setTimeout(function () {
        $(".loadcontent").fadeOut();
        $(".bar1").attr("style", "animation: bar 1.5s ease;");
        $(".bar2").attr("style", "animation: bar 1.5s .3s ease;");
        $(".bar3").attr("style", "animation: bar 1.5s .6s ease;");
    }, 500);

    setTimeout(function(){
        $(".bar").css("width", "0%");
    }, 2000);

    setTimeout(function(){
        $(".loadingpage").remove();
    }, 2200);
});

// ------ Brand Concept carousel --------
let bc_input = document.querySelectorAll("input.bcslider");

function bc_click(i){
    setTimeout(function(){

        bc_input[i].click();
        i++;

        if(i <= 2){
            bc_click(i);
        }

        if(i > 2){
            let i = 0;
            bc_click(i);
        }
    }, 4000);
}
window.addEventListener("load", bc_click(1));
// document.addEventListener("load", bc_click(1));

// ----- Scroll 事件 -------
var header = document.getElementById("header");
header.setAttribute("style", "background-color: rgba(0, 0, 0, 0);")

window.addEventListener("scroll", function(){
    // console.log(window.scrollY);

    // ------ Header ------
    let top_block = document.getElementsByClassName("indextop")[0];
    // console.log(top_block.offsetHeight);
    if(window.scrollY >= (top_block.offsetHeight * 0.7)){
        header.setAttribute("style", "background-color: #26273B);");
        header.style.transition = "1s";
    }else{
        header.setAttribute("style", "background-color: rgba(0, 0, 0, 0);")
    };

    // ------ Section 2: New Arrival ------
    let narrvl = document.getElementById("narrvl");
    let naitems = document.querySelectorAll("div.i-card");

    if(window.scrollY >= (narrvl.offsetTop * 0.8)){
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
        // console.log("here");
        ncard.forEach(function(item, index){
            item.classList.add("active");
        })
    }else{
        ncard.forEach(function(item, index){
            item.classList.remove("active");
        })
    }

});