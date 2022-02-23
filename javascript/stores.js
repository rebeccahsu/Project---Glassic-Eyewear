//-------- Stores tab ----------
let tpbutton = document.getElementById("tpbutton");
let ksbutton = document.getElementById("ksbutton");
// console.log(ksbutton);
let tpdiv = document.getElementsByClassName("tab-tp")[0];
let ksdiv = document.getElementsByClassName("tab-ks")[0];

ksbutton.addEventListener("click", function(){
    // console.log("clicked");
    ksdiv.classList.remove("noshow");
    ksdiv.classList.add("show");
    ksbutton.classList.add("currenttab");
    tpbutton.classList.remove("currenttab");
    tpdiv.classList.remove("show");
    tpdiv.classList.add("noshow");
});

tpbutton.addEventListener("click", function(){
    // console.log("clicked");
    tpdiv.classList.remove("noshow");
    tpdiv.classList.add("show");
    tpbutton.classList.add("currenttab");
    ksbutton.classList.remove("currenttab");
    ksdiv.classList.remove("show");
    ksdiv.classList.add("noshow");
});

// --------- Carousel ------------
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      }
    }
});

