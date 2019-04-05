// Java Challenge 4
function maxInteger(a, b, c) 
 {
  max = 0;
  if (a > b)
  {max = a;}
  else
  {max = b;}
  if (c > max) 
  { max = c;}
  return max;
}
console.log(maxInteger(-6, 7, 18));