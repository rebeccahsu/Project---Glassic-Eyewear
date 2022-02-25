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
        // opic.innerHTML = "";

        

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

        // let oitempic = document.getElementsByClassName("ipic")[i].src;
        // opic.insertAdjacentHTML("afterbegin", '<img src="'+ oitempic +'">');

        // let oitempic2 = document.getElementsByClassName("ipic2")[i].src;
        // opic.insertAdjacentHTML("beforeend", '<img src="'+ oitempic2 +'">');

        let swiperel = document.getElementsByClassName("swiper-slide");

        let oitempic = document.getElementsByClassName("ipic")[i].src;
        
        // opicimg.setAttribute("src", oitempic);
        swiperel[0].setAttribute("src", oitempic);

        let oitempic2 = document.getElementsByClassName("ipic2")[i].src;
        
        // opicimg2.setAttribute("src", oitempic2);
        swiperel[1].setAttribute("src", oitempic2);
        // opic.classList.add("owl-carousel");
        // opic.classList.add("owl-theme");

    });
};

let xbutton = document.getElementsByClassName("close")[0];
// let firstdot = document.querySelector("span.swiper-pagination-bullet");
// console.log(xbutton);
xbutton.addEventListener("click", function(){
    mask.classList.remove("show");
    mask.classList.add("noshow");
    overlay.classList.remove("show");
    overlay.classList.add("noshow");
    let firstdot = document.querySelector("span.swiper-pagination-bullet");
    firstdot.click();
});

mask.addEventListener("click", function(){
    mask.classList.remove("show");
    mask.classList.add("noshow");
    overlay.classList.remove("show");
    overlay.classList.add("noshow");
    let firstdot = document.querySelector("span.swiper-pagination-bullet");
    firstdot.click();
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
});