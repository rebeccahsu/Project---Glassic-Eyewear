// -------- Overlay ----------

let item = document.getElementsByClassName("item");
// console.log(item);
// var item2 = document.querySelectorAll(".item");
// console.log(item2);
let overlay = document.getElementById("overlay");
// console.log(overlay);
let mask = document.getElementById("mask");

let opic = document.getElementById("opic");

let itemname = document.getElementsByClassName("itemname");
let oname = document.getElementById("oname");

let ocolor = document.getElementById("ocolor");
let osize = document.getElementById("osize");
let omaterial = document.getElementById("omaterial");


for(let i = 0; i < item.length; i++){
    // console.log(item[i]);

    item[i].addEventListener("click", function(){
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
        opic.insertAdjacentHTML("afterbegin", '<img src="'+ oitempic +'">');

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





/*
document.querySelectorAll(".item").forEach(function(item){
    item.addEventListener('click', function(){
        mask.classList.remove("noshow");
        mask.classList.add("show");
        overlay.classList.remove("noshow");
        overlay.classList.add("show");
    })
})
*/