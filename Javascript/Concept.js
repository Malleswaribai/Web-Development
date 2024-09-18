/**
 * Javascipt:it is programming language.
 * javascript variables can be declared using let,var,const
 * If we use let scope will be created and we cant redeclare, but for var no scope and can be declared again, for const no scope and cant be redeclared.
 * ->Math.pow(x,y) in js
 * 
 * In erlier day's java script was only being used inside browser. But as time changes javascript is taken out from the brower and it is being used in many places.
 * JS engine : JS engines helps us to excute java script code out side the browser. famous example node.js. it is basically like a compiler. 
 * now javascript is being used in front-end and back-end also and in many other domines. 
 */

// data types : int, string , array , object ,boolean.

let x = 1; 
let y = "jayaram"; 
let z = [1, "jayaram"];  // here the array can contain different data types also . 
let a = {
    name: "jayaram" , 
    age: 21 , 
    marks: [13,20 , 23],
    address : {
        city: "pcp thanda",
        pinCode: 560093
    }
} ; // this is a json Object. javascript object notaion. 

// console.log(a); this is a print statement. 

console.log("Arrays"); 
z.push("hi"); // this will append an element at the end of the list. 
// z.pop() this will remove the last element from the list. 

z.shift() ; // it will pop the element at the start
z.unshift("malleswari");  // it will push a element at the start of list
z.push("Hello")
//  z.reverse(1 , 3); 
z.reverse() ; 
z.sort(); // it will sort the list with in 
// z.length 
console.log(z);

// loops 
console.log("I am for loop");
for (let i =0 ; i<z.length ; i++ ) {
    console.log(z[i]);
}
console.log("I am for each")
z.forEach ( (el) => {
  console.log(el); 
});

console.log("range based loops"); 

for(let el in z) { // here in gives indexes 
    console.log(el);
}

for(let el of z) { // of keyword gives elements. 
    console.log(el);
}
console.log(z);

let s = new Set() ;
s.add(1); 
s.add("Jayaram");
s.add(2); 
s.add(1); 
s.add("malleswari"); 

// s.forEach((el) => {
//     console.log(el);
// })

for( let el of s) {
    console.log(el);
}

if(s.has("malleswari")) {
    console.log("It is present")
}

console.log(s);


let m = new Map(); 

m.set(1 , 2); 
m.set(2,3); 
m.set(3,4); 

m.get(2) ; // it will return the value related to key 2;

m.has(1); // it will return the true if that key exists or else wont'

for(let el of m ) {
    console.log(el);
}

console.log(m);