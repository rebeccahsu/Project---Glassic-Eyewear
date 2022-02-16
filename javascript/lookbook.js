//-----------[lookbook]-------------------
//marquee
let ul_pics = document.querySelector("ul.marqueepics");
console.log(ul_pics);
console.log(ul_pics.innerHTML);

let arr_pics = [ul_pics.innerHTML];
console.log(arr_pics);
// arr_pics.push(ul_pics.innerHTML);
// console.log(arr_pics);

let li_pic = document.getElementsByClassName("mpic")[0];



setInterval(function(){
    arr_pics.push(ul_pics.innerHTML);
    console.log("add");
    console.log(arr_pics);
    // ul_pics.insertAdjacentHTML("beforeend", ul_pics.innerHTML);
  }, 3000);

setInterval(function(){
    arr_pics.shift(ul_pics.innerHTML);
    console.log("delete");
    console.log(arr_pics);
    // ul_pics.removeChild(li_pic);
}, 6000);

console.log(arr_pics);
// ul_pics.insertAdjacentHTML("afterbegin", arr_pics.innerHTML);

// setInterval(function(){
//     arr_pics.push(li_pic.innerHTML);
//     console.log("add");
//     // ul_pics.insertAdjacentHTML("beforeend", ul_pics.innerHTML);
//   }, 3000);

// setInterval(function(){
//     arr_pics.shift(ul_pics.innerHTML);
//     console.log("delete");
//     // ul_pics.removeChild(li_pic);
// }, 6000);