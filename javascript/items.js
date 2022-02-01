// -------- Overlay ----------

var item = document.getElementsByClassName("item");
// console.log(item);
// var item2 = document.querySelectorAll(".item");
// console.log(item2);
let overlay = document.getElementById("overlay");
// console.log(overlay);
let mask = document.getElementById("mask");

var opic = document.getElementById("opic");

var itemname = document.getElementsByClassName("itemname");
var oname = document.getElementById("oname");

var ocolor = document.getElementById("ocolor");
var osize = document.getElementById("osize");
var omaterial = document.getElementById("omaterial");


for(let i = 0; i < item.length; i++){
    // console.log(item[i]);

    item[i].addEventListener("click", function(){
        // console.log("clicked");
        opic.innerHTML = "";

        mask.classList.remove("noshow");
        mask.classList.add("show");
        overlay.classList.remove("noshow");
        overlay.classList.add("show");

        var oitemname = itemname[i].innerHTML;
        oname.innerHTML = oitemname;

        var oitemcolor = document.getElementsByClassName("icolor")[i].innerHTML;
        ocolor.innerHTML = oitemcolor;

        var oitemsize = document.getElementsByClassName("size")[i].innerHTML;
        osize.innerHTML = oitemsize;

        var oitemmaterial = document.getElementsByClassName("material")[i].innerHTML;
        omaterial.innerHTML = oitemmaterial;

        var oitempic = document.getElementsByClassName("ipic")[i].src;
        opic.insertAdjacentHTML("afterbegin", '<img src="'+ oitempic +'">');

    });
};

var xbutton = document.getElementsByClassName("close")[0];
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