//Java Challenge 5
function firstLetter(string){
    string = string.split(" ");
    for (var i = 0; i < string.length; i++) 
    {string[i] = string[i][0].toUpperCase() + string[i].substring(1);}
   return string.join(" ");
}
console.log(firstLetter("the dog is very lazy"));
