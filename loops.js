
  function forLoop(array){
 for (let i = 0; i < 25; i++){
   if (i === 1){
     array.push("I am 1 strange loop.");
   } else{
     array.push("I am "+i+" strange loops.");
   }
 }
 return array;
  }
var n = Math.floor(Math.random() * 100)
function whileLoop(n){
  while (n > 0) {
    console.log(--n)
  }
  return ('done')
  
}

var i = 0
 function doWhileLoop(num) {
 function incrementVariable() {
     return i = i-1;
 }

 do {
   console.log("I run once regardless");
 } while (incrementVariable()< num)
}