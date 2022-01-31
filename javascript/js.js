// Overlay
let i;
var item = document.getElementsByClassName("item");
// console.log(item);
let overlay = document.getElementById("overlay");
// console.log(overlay);
let mask = document.getElementById("mask");

for(let i = 0; i < item.length; i++){
    // console.log(item[i]);

    item[i].addEventListener("click", function(){
        // console.log("clicked");
        mask.classList.remove("noshow");
        mask.classList.add("show");
        overlay.classList.remove("noshow");
        overlay.classList.add("show");
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