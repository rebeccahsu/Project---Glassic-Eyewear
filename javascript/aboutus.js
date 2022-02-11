/*
window.addEventListener("scroll", function(){
    console.log(this.scrollY);

    //------ 1: Brand concept intro --------
    let bc_content = document.querySelector("div.cbc");
    let bc_img = document.getElementById("bcimg");
    
    if(this.scrollY >= (bc_img.offsetTop * 0.6)){
        // console.log("here");
        bc_content.classList.add("active");
        bc_img.classList.add("active");
    }else{
        bc_content.classList.remove("active");
        bc_img.classList.remove("active");
    };

    //------ 2: Craftsmanship --------
    let cms_content = document.querySelector("div.cms");
    let cms_img = document.getElementById("cmsimg");
    
    if(this.scrollY >= (cms_img.offsetTop * 0.6)){
        cms_content.classList.add("active");
        cms_img.classList.add("active");
    }else{
        cms_content.classList.remove("active");
        cms_img.classList.remove("active");
    };

    //------ 3: Founder/Designer --------
    let fd_content = document.querySelector("div.cfd");
    let fd_img = document.getElementById("fdimg");
    
    if(this.scrollY >= (fd_img.offsetTop * 0.8)){
        fd_content.classList.add("active");
        fd_img.classList.add("active");
    }else{
        fd_content.classList.remove("active");
        fd_img.classList.remove("active");
    };
});

*/

// ----- Scroll 事件 結束 -------