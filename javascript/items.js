// -------- Overlay ----------

let gitem = document.getElementsByClassName("gitem");
let overlay = document.getElementById("overlay");
let mask = document.getElementById("mask");
let opic = document.getElementById("opic");
let itemname = document.getElementsByClassName("itemname");
let oname = document.getElementById("oname");
let ocolor = document.getElementById("ocolor");
let osize = document.getElementById("osize");
let omaterial = document.getElementById("omaterial");

// let opicimg = document.querySelector("img#opicimg");
// console.log(opicimg);
// let opicimg2 = document.querySelector("img#opicimg2");

for(let i = 0; i < gitem.length; i++){
    // console.log(item[i]);

    gitem[i].addEventListener("click", function(){
        // console.log("clicked");
        opic.innerHTML = "";

        mask.classList.remove("noshow");
        mask.classList.add("show");
        overlay.classList.remove("noshow");
        overlay.classList.add("show");

        let oitemname = itemname[i].innerHTML;
        oname.innerHTML = oitemname;

        let oitemcolor = document.getElementsByClassName("icolor")[i].innerHTML;
        ocolor.innerHTML = oitemcolor;

        let oitemsize = document.getElementsByClassName("size")[i].innerHTML;
        osize.innerHTML = oitemsize;

        let oitemmaterial = document.getElementsByClassName("material")[i].innerHTML;
        omaterial.innerHTML = oitemmaterial;

        let oitempic = document.getElementsByClassName("ipic")[i].src;
        opic.insertAdjacentHTML("afterbegin", '<li class="owl-item"><img src="'+ oitempic +'"></li>');

        // let oitempic2 = document.getElementsByClassName("ipic2")[i].src;
        // opic.insertAdjacentHTML("beforeend", '<li class="owl-item"><img src="'+ oitempic2 +'"></li>');

        // let oitempic = document.getElementsByClassName("ipic")[i].src;
        
        // console.log(oitempic);
        // opicimg.setAttribute("src", oitempic);

        // let oitempic2 = document.getElementsByClassName("ipic2")[i].getAttribute("src");
        
        // opicimg2.setAttribute("src", oitempic2);
        // opic.classList.add("owl-carousel");
        // opic.classList.add("owl-theme");
    });
};

let xbutton = document.getElementsByClassName("close")[0];
// console.log(xbutton);
xbutton.addEventListener("click", function(){
    mask.classList.remove("show");
    mask.classList.add("noshow");
    overlay.classList.remove("show");
    overlay.classList.add("noshow");
});

mask.addEventListener("click", function(){
    mask.classList.remove("show");
    mask.classList.add("noshow");
    overlay.classList.remove("show");
    overlay.classList.add("noshow");
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
        items: 1
      },
      768: {
        items: 1
      }
    }
});


/*
document.querySelectorAll(".gitem").forEach(function(gitem){
    gitem.addEventListener('click', function(){
        mask.classList.remove("noshow");
        mask.classList.add("show");
        overlay.classList.remove("noshow");
        overlay.classList.add("show");
    })
})
*/