"use strict";

// ------ Hamburger ------
let ham_b = document.querySelector("div.ham_b");
ham_b.addEventListener("click", function(){
    let ham_menu = document.querySelector("ul.ham-menu");
    let ham_b1 = document.querySelector("span.hb_1");
    let ham_b2 = document.querySelector("span.hb_2");
    let ham_b3 = document.querySelector("span.hb_3");

    let ham_subsel = document.querySelector("ol.ham_subsel");
    
    // if(ham_menu.classList.contains("noshow")){
    //     ham_menu.classList.remove("noshow");
    //     ham_menu.classList.add("menuactive");

    //     ham_b1.setAttribute("style", "transform: translateY(11px) rotate(135deg);");
    //     ham_b2.setAttribute("style", "transform: scale(0);");
    //     ham_b3.setAttribute("style", "transform: translateY(-5px) rotate(-135deg);");

    //     ham_subsel.setAttribute("style", "opacity: 1;");
    // }else{
    //     ham_menu.classList.add("noshow");
    //     ham_b1.setAttribute("style", "transform: none;");
    //     ham_b2.setAttribute("style", "transform: none;");
    //     ham_b3.setAttribute("style", "transform: none;");
    // };

    if(ham_menu.classList.contains("menuactive")){
        ham_menu.classList.remove("menuactive");

        ham_b1.setAttribute("style", "transform: none;");
        ham_b2.setAttribute("style", "transform: none;");
        ham_b3.setAttribute("style", "transform: none;");
    }else{
        ham_menu.classList.add("menuactive");
        ham_b1.setAttribute("style", "transform: translateY(11px) rotate(135deg);");
        ham_b2.setAttribute("style", "transform: scale(0);");
        ham_b3.setAttribute("style", "transform: translateY(-5px) rotate(-135deg);");
    };
    // ham_menu.classList.toggle("noshow");
    
});

let product_li = document.querySelector("li.pli");
product_li.addEventListener("click", function(){
    let p_subsel = document.querySelector("ol.ham_subsel");
    let p_title = document.querySelector(".pli a");
    let plus = document.querySelector("span.plus");
    let minus = document.querySelector("span.minus");

    if(p_subsel.classList.contains("noshow")){
        p_subsel.classList.remove("noshow");
        p_title.setAttribute("style", "color: #F0EBD8;")
        plus.setAttribute("style", "background-color: #F0EBD8;")
        minus.setAttribute("style", "opacity: 0;");
    }else{
        p_subsel.classList.add("noshow");
        p_title.setAttribute("style", "color: #C4A87E;")
        plus.setAttribute("style", "background-color: #C4A87E;")
        minus.setAttribute("style", "opacity: 1;")
    };

    // p_subsel.classList.toggle("noshow");
});

// ------ Footer RWD ------
let ftitle = document.getElementsByClassName("ftitle");
for(let i = 0; i < ftitle.length; i++){
    let fsub = document.getElementsByClassName("fsub");
    let farrow = document.getElementsByClassName("arrow");
    ftitle[i].addEventListener("click", function(){
        if(fsub[i].style.display = "none"){
            fsub[i].style.display = "block";
            farrow[i].style.transform = "rotate(180deg)";
        }else{
            // fsub[i].style.display = "none";
            fsub[i].setAttribute("style", "display: none");
            console.log("none");
        }
    });
}


// ----- Scroll 事件: 動畫 active-------
function scroll(element){
    window.addEventListener("scroll", function(){
    if( ((this.scrollY + this.innerHeight) - element.offsetHeight / 3) > element.offsetTop){
            // console.log("here");
            element.classList.add("active");
        }else{
            element.classList.remove("active");
        };
    // console.log(window.scrollY + window.innerHeight)
    // console.log("高度/3: " + (element.offsetHeight/3))
    // console.log("頂部位置: " + element.offsetTop)   
    }); 
}

let slidein = document.getElementsByClassName("slidein");
for(let i = 0; i < slidein.length; i++){
    scroll(slidein[i]);
}
console.log(slidein[3]);
console.log(slidein[4]);

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

// //-----------[lookbook]-------------------
// //marqee
// var ul_marqee = document.getElementsByClassName("marqeepics")[0];
// console.log(ul_marqee);
// console.log(typeof(ul_marqee));
// console.log(ul_marqee.innerHTML);

// var arr_marqee = [ul_marqee.innerHTML];
// console.log(arr_marqee);
// arr_marqee.push(ul_marqee.innerHTML);


// setInterval(function(){
//     arr_marqee.push(ul_marqee.innerHTML);
//     ul_marqee.insertAdjacentHTML("beforeend", arr_marqee[1]);
//     console.log("10s");
//   }, 10000);

// setInterval(function(){
//     arr_marqee.shift();
//     console.log("shift");
// }, 20000);
