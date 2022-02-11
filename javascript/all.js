// Hamburger


// ----- Scroll 事件: 動畫 active-------
function scroll(element){
    window.addEventListener("scroll", function(){
    if( ((this.scrollY + this.innerHeight) - element.offsetHeight / 3) > element.offsetTop){
            // console.log("here");
            element.classList.add("active");
        }else{
            element.classList.remove("active");
        };
    console.log(window.scrollY + window.innerHeight)
    console.log("高度/3: " + (element.offsetHeight/3))
    console.log("頂部位置: " + element.offsetTop)   
    }); 
    
}

let slidein = document.getElementsByClassName("slidein");
for(let i = 0; i < slidein.length; i++){
    scroll(slidein[i]);
}

let fadein = document.getElementsByClassName("fadein");
for(let i = 0; i < fadein.length; i++){
    scroll(fadein[i]);
}

let shrink = document.getElementsByClassName("shrink");
for(let i = 0; i < shrink.length; i++){
    scroll(shrink[i]);
}

//-----------[index]-----------------
/*
let bctext = document.querySelector("div.bc-text");
scroll(bctext);

let ncard = document.querySelectorAll("div.n-card");
ncard.forEach(function(item, index){
    scroll(item);
});
*/

//-----------[About us]-----------------


/*let bc_content = document.querySelector("div.cbc");
let bc_img = document.getElementById("bcimg");
scroll(bc_content);
scroll(bc_img);

let cms_content = document.querySelector("div.cms");
let cms_img = document.getElementById("cmsimg");
scroll(cms_content);
scroll(cms_img);


let fd_content = document.querySelector("div.cfd");
let fd_img = document.getElementById("fdimg");
scroll(fd_content);
scroll(fd_img);
*/

//-----------[Eyeglasses]-----------------
// let emodels = document.querySelectorAll("img.emodel");
// for(let i = 0; i < emodels.length; i++){
//     scroll(emodels[i]);
// };
// let emodel = document.querySelector("img.emodel");
// scroll(emodel);