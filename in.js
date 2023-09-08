let age=12

if(age > 20){
    //document.write(greater);
    console.log("greater");
}
else{
    //document.write(lesser);
    console.log("lesser");

}

let number = '45.00'
let result = parseFloat(number);
console.log(result);

let sum9 ={
    name :'sandy',
    firstName: 'R',
    id: 234,
    fullName: function() {
        console.log (this.firstName+" "+this.name);
    }
}
sum9.fullName();


//using object literal
// let person = {
//     name: 'san'
// }

// //using construction function
// function person() {
//     this.name= 'san'
// }
// let person1 = new person();
// let person2 = new person();

// //adding new property to person
// person1.age = 22;



// Constructor function for a Person object
function Per1() {
  this.name = 'sandy';
  this.age = 22;
}

// Adding a method to the prototype
Per1.prototype.gender = 'male'; 
Per1.prototype.brand = 'Rolex';

// Creating instances of Person
const per2 = new Per1();
const per3 = new Per1();

// Both instances share the same 'sayHello' method from the prototype
console.log(per2.gender); // Output: Hello, my name is Alice, and I'm 30 years old.
console.log(per3.gender);
console.log(per2.brand);


let student = {
    firstName: 'sandeep',

get getName() {
    return this.firstName;
    
}
};
console.log(student.firstName);

console.log(student.getName);

// console.log(student.getName());

// console.log(getName);

// console.log(student.get());

sparam (number) newId

let lib = {
    bookid: 21,

    Set Id(newid) {
        this.bookid = newid;
    }
}

console.log(lib.bookid);

lib.changeId = 22;

console.log(lib.bookid);

console.log()


