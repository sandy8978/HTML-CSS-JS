let a=[];
let b=[];
let c=[];
for(i=100;i<=1000;i++){
 if (i %2==0){
    a.push(i)
}
 else{
    b.push(i)
}
if ( i %5 == 0){
    c.push(i)
}
    }


console.table(a)

let san = [
    [10,12,13,14,15], 
    [1,2,3,4,5] 
    ];
console.log(san);
san[1] [3]=44
console.log(san);

function sumi (){
    console.log('san');
}
sumi();

let divide = (a, b) => a / b;

let quotient = divide(10, 2);
console.log(quotient); 


function isEvenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // Example usage:
  console.log(isEvenOrOdd(4));  // Output: "Even"
  console.log(isEvenOrOdd(7));  // Output: "Odd"
  console.log(isEvenOrOdd(0));  // Output: "Even"
  


