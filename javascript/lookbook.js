//-----------[lookbook]-------------------
//marqee
let ul_marquee = document.querySelector("ul.marqueepics");
console.log(ul_marquee);
console.log(typeof(ul_marquee));
console.log(ul_marquee.innerHTML);

let arr_marquee = [ul_marquee.innerHTML];
console.log(arr_marquee);
arr_marquee.push(ul_marquee.innerHTML);

let li_marquee = document.getElementsByClassName("mpic")[0];


// setInterval(function(){
//     // arr_marqee.push(ul_marqee.innerHTML);
//     ul_marquee.insertAdjacentHTML("beforeend", ul_marquee.innerHTML);
//   }, 3000);

// setInterval(function(){
//     ul_marqee.removeChild(li_marqee);
// }, 6000);
