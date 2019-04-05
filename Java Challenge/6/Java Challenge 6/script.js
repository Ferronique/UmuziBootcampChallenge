//Java Challenge 6
function time(integer){
var hour = Math.floor(integer / 60);
  var min = integer % 60;
  return hour + " : " + min;
}  
console.log(time(5667));

