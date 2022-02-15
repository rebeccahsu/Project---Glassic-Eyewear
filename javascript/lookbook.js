//-----------[lookbook]-------------------
//marqee
var ul_marqee = document.getElementsByClassName("marqeepics")[0];
console.log(ul_marqee);
console.log(typeof(ul_marqee));
console.log(ul_marqee.innerHTML);

var arr_marqee = [ul_marqee.innerHTML];
console.log(arr_marqee);
arr_marqee.push(ul_marqee.innerHTML);


setInterval(function(){
    arr_marqee.push(ul_marqee.innerHTML);
    ul_marqee.insertAdjacentHTML("beforeend", arr_marqee[1]);
    console.log("10s");
  }, 10000);

setInterval(function(){
    arr_marqee.shift();
    console.log("shift");
}, 20000);
