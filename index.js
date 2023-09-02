//number
var num1=209;
var num2=23;
var sum=num1 + num2;
console.log(sum);
console.log(typeof(sum));

//string
let x='sandeep';
const y = ' sandy';
sum = x+y;
console.log(sum);
console.log(typeof(sum));

//BigInt
let n = 98765432987654345678n;
sum = n + 1n;
console.log(sum);
console.log(typeof(sum));

//boolean
let b=(10 > 9)
console.log(b);
console.log(typeof(b));

//undefined
let u=undefined ;
console.log(u);
console.log(typeof(u));

//object
const student = {
    firstName: 'sandeep',
    lastName : null,
    class: 10
};
console.log(student);

//operator
// Logical AND (&&) operator
const isTrue = true;
const isFalse = false;

if (isTrue && isFalse) {
    console.log("Both conditions are true.");
} else {
    console.log("At least one condition is false.");
}

// Logical OR (||) operator
const hasApple = true;
const hasBanana = false;

if (hasApple || hasBanana) {
    console.log("Has at least one fruit.");
} else {
    console.log("Has no fruits.");
}

// Logical NOT (!) operator
const hasCookies = false;

if (!hasCookies) {
    console.log("Does not have cookies.");
} else {
    console.log("Has cookies.");
}




let age=12

if(age>=20){
    //document.write(greater);
    console.log("greater");
}
else{
    //document.write(lesser);
    console.log("lesser");

}

let myarray = [20,21,22,23,'sandeep'];

console.log(myarray);
console.log(myarray.length);//length will show the count of array
//pop remove the last element of an array
myarray.pop()
console.log(myarray);
console.log(myarray.length);

myarray.slice(1,3)
let my=myarray.slice(0,2);
console.log(my);
console.log(my.length);

console.log(myarray);

myarray.shift()//shift will remove the first element of an array
console.log(myarray);

myarray.unshift(1)//UNSHIFT WILL ADD THE ELEMENT IN THE FIRST OF AN ARRAY
console.log(myarray);

console.log(myarray);
console.log(myarray.indexOf(21));

let myarray1 = [2,3,4,5,6];
console.log(myarray1[3]);
console.log(myarray);

let array = myarray + myarray1
console.log(array);

//concatinating it will combine the two arrays
let array1 = [...myarray,...myarray1];
console.log(array1);

let arr1 = [1,2,3,4,5];
console.log(arr1.length);
let arr2 = [5,6,7,8,9,];
console.log(arr2.length);
//replaceing the arr1 elements with arr2 elements using for loop
for(i=0; i < arr2.length; i++){
arr1[i] = arr2[i];
}
console.log(arr1);

//2d array 
let san = [
    [10,12,13,14,15], 
    [1,2,3,4,5] 
    ];
console.log(san);
san[1] [3]=44//changing the elements by using the index position
console.log(san);

let 



