// -------- Overlay ----------
document.addEventListener("DOMContentLoaded", function () {

  let gitem = document.getElementsByClassName("gitem");
  let overlay = document.getElementById("overlay");
  let mask = document.getElementById("mask");
  // let opic = document.getElementById("opic");
  let itemname = document.getElementsByClassName("itemname");
  let oname = document.getElementById("oname");
  let ocolor = document.getElementById("ocolor");
  let osize = document.getElementById("osize");
  let omaterial = document.getElementById("omaterial");

  for(let i = 0; i < gitem.length; i++){

      gitem[i].addEventListener("click", function(){
        mask.classList.toggle("noshow");
        overlay.classList.toggle("noshow");

        let oitemname = itemname[i].innerHTML;
        oname.innerHTML = oitemname;

        let oitemcolor = document.getElementsByClassName("icolor")[i].innerHTML;
        ocolor.innerHTML = oitemcolor;

        let oitemsize = document.getElementsByClassName("size")[i].innerHTML;
        osize.innerHTML = oitemsize;

        let oitemmaterial = document.getElementsByClassName("material")[i].innerHTML;
        omaterial.innerHTML = oitemmaterial;

        let swiperel = document.getElementsByClassName("swiper-slide");
        let oitempic = document.getElementsByClassName("ipic")[i].src;
        swiperel[0].setAttribute("src", oitempic);
        let oitempic2 = document.getElementsByClassName("ipic2")[i].src;
        swiperel[1].setAttribute("src", oitempic2);

        // like button
        let l_items = JSON.parse(localStorage.getItem("l_items"));
        let h_filled = document.querySelector("img.heart_filled");

        for(let i = 0; i < l_items.length; i++){
          if (l_items[i].name == oname.innerHTML){
            h_filled.classList.add("-on");
            break;
          }else{
            h_filled.classList.remove("-on");
          }

        };

      });
  };

  let xbutton = document.getElementsByClassName("close")[0];
  // let firstdot = document.querySelector("span.swiper-pagination-bullet");
  xbutton.addEventListener("click", function(){
      mask.classList.toggle("noshow");
      overlay.classList.toggle("noshow");
      let firstdot = document.querySelector("span.swiper-pagination-bullet");
      firstdot.click();
  });

  mask.addEventListener("click", function(){
      mask.classList.toggle("noshow");
      overlay.classList.toggle("noshow");
      let firstdot = document.querySelector("span.swiper-pagination-bullet");
      firstdot.click();
  });

  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
  });

  // Magnifier
  function zoom_on(e){
    let magnifier = document.querySelector("div#magnifier");
    let img_zoom = document.querySelector("img.swiper-slide-active");
    if(magnifier.style.backgroundImage == ""){
      magnifier.style.backgroundImage = `url("${img_zoom.src}")`;
    }else{
      magnifier.style.backgroundImage = `url("${img_zoom.src}")`
    };
    magnifier.style.backgroundPosition = `${magnifier.clientWidth / 2 - e.offsetX * 2}px ${magnifier.clientHeight / 2 - e.offsetY * 2}px`;
    magnifier.classList.add("-on");
    magnifier.style.left = e.offsetX + 40 + "px";
    magnifier.style.top = e.offsetY + 60 +"px";
  };

  function zoom_off(){
    document.getElementById("magnifier").classList.remove("-on");
  };

  function zoom_event(){
    $(".swiper-slide").off("mousemove", zoom_on);
    $(".swiper-slide").off("mouseout", zoom_off);  

    if(window.innerWidth >= 768){
      $(".swiper-slide").on("mousemove", zoom_on);
      $(".swiper-slide").on("mouseout", zoom_off);    
    }
  };

  window.addEventListener("load", function(){
    zoom_event();
  });

  window.addEventListener("resize", function(){
    zoom_event();
  });

  // ----- 按下 Like -----
  document.addEventListener("click", function(e){
    if(e.target.classList.contains("heart")){
      let h_filled = document.querySelector("img.heart_filled");
    
      if (h_filled.classList.contains("-on")){

      h_filled.classList.remove("-on");

      // ******從 localStorage 移除資料******** //
      let l_items = JSON.parse(localStorage.getItem("l_items"));
      let updated_l_items = [];
      
      l_items.forEach(function(item, i){

        if(item.name == oname.innerHTML){
        }else{
          updated_l_items.push(item);
        };
      });

      // 回存至 localStorage
      localStorage.setItem("l_items", JSON.stringify(updated_l_items));

      menulike_check();

      }else{

        h_filled.classList.add("-on");

        // ******資料儲存到 localStorage*********
        let item_id = Date.now();
        let opic = document.getElementsByClassName("swiper-slide");
        let l_item = {
          "item_id": item_id,
          "name": oname.innerHTML,
          "color": ocolor.innerHTML,
          "size": osize.innerHTML,
          "material": omaterial.innerHTML,
          "pic1": opic[0].src,
          "pic2": opic[1].src
        };
        
        let l_items = JSON.parse(localStorage.getItem("l_items")); //抓出來是字串再轉回物件
        // console.log(l_items);
        
        if (l_items) { // 若存在

          l_items.unshift(l_item); //把物件放在陣列裡索引值為 0 的地方
        } else { // 若不存在
          l_items = [l_item];
        }
        localStorage.setItem("l_items", JSON.stringify(l_items));

        menulike_check();
      };

    };

  });

});