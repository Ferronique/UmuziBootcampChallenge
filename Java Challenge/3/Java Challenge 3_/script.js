// Java Challenge 3
function wordCheck(word)
{
  if (word.length < 4)
  {return false;}
  firstWord = word.substring(0, 4);
  if (firstWord == 'Java') 
  {return true;}
   else 
   {
    return false;
  }
}

console.log(wordCheck("JavaScript"));
console.log(wordCheck("This string does not start with Java"));