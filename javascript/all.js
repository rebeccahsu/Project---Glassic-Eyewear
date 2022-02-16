"use strict";

// ------ Hamburger ------
let ham_b = document.querySelector("div.ham_b");
ham_b.addEventListener("click", function(){
    let ham_menu = document.querySelector("ul.ham-menu");
    let hbtns = document.querySelectorAll(".hbtn");
    ham_menu.classList.toggle("active");
    hbtns.forEach(function(hbtn){
        hbtn.classList.toggle("active");
      });
    
});

let p_subsel = document.querySelector("ol.ham_subsel");

$("li.pli").on("click", function(){
    $("ol.ham_subsel").slideToggle();
});


let pli_btn = document.querySelector("li.pli");
pli_btn.addEventListener("click", function(){
    let p_vertical = document.querySelector("span.vertical");
    p_vertical.classList.toggle("active");
    let p_horizontal = document.querySelector("span.horizontal");
    p_horizontal.classList.toggle("active");
    let p_title = document.querySelector(".pli a");
    p_title.classList.toggle("currentpage");
});


// ------ Footer RWD ------
let ftitle = document.getElementsByClassName("ftitle");
for(let i = 0; i < ftitle.length; i++){
    let fsub = document.getElementsByClassName("fsub");
    let farrow = document.getElementsByClassName("arrow");
    ftitle[i].addEventListener("click", function(){
        
        // if(fsub[i].style.display == ""){
        //     console.log("1");
        //     fsub[i].style.display = "block";
        //     farrow[i].style.transform = "rotate(180deg)";
        // }else{
        //     console.log("2");
        //     // fsub[i].style.display = "none";
        //     fsub[i].setAttribute("style", "display: none");
        //     console.log("close");
        // }

        let fmenu_name = document.getElementsByClassName("fmenu_name");
        if(fsub[i].style.maxHeight == ""){
            fsub[i].style.maxHeight = fsub[i].scrollHeight + "px"; // 設定 CSS：max-height
            farrow[i].style.transform = "rotate(180deg)";
        }else{
            fsub[i].style.maxHeight = ""; // 移除 CSS： max-height
            farrow[i].style.transform = "rotate(0deg)";
        }
        fmenu_name[i].classList.toggle("currentpage");
    });
}


// ----- Scroll 事件: 動畫 active-------

// function scroll(element){
//     window.addEventListener("scroll", function(){
//     if( ((this.scrollY + this.innerHeight) - element.offsetHeight / 3) > element.offsetTop){
//             // console.log("here");
//             element.classList.add("active");
//         }else{
//             element.classList.remove("active");
//         };
//     // console.log(window.scrollY + window.innerHeight)
//     // console.log("高度/3: " + (element.offsetHeight/3))
//     // console.log("頂部位置: " + element.offsetTop)   
//     }); 
// }

    window.addEventListener("scroll", function(){
        let slidein = document.getElementsByClassName("slidein");
        for(let i = 0; i < slidein.length; i++){
            if( ((this.scrollY + this.innerHeight) - slidein[i].offsetHeight / 3) > slidein[i].offsetTop){
                    // console.log("here");
                
                slidein[i].classList.add("active");
            }else{
                slidein[i].classList.remove("active");
            };
        }
    
        let fadein = document.getElementsByClassName("fadein");
        for(let i = 0; i < fadein.length; i++){
            if( ((this.scrollY + this.innerHeight) - fadein[i].offsetHeight / 3) > fadein[i].offsetTop){
                // console.log("here");
            
                fadein[i].classList.add("active");
            }else{
                fadein[i].classList.remove("active");
            };
        }
    
        let shrink = document.getElementsByClassName("shrink");
        for(let i = 0; i < shrink.length; i++){
            if( ((this.scrollY + this.innerHeight) - shrink[i].offsetHeight / 3) > shrink[i].offsetTop){
                // console.log("here");
            
                shrink[i].classList.add("active");
            }else{
                shrink[i].classList.remove("active");
            };
        }
        
    });