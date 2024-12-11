//js: it is a programming language, in earlier days it is used inside the browser but as time change js is takenn out of the browser
// it is used in mulltiple domines
//js engines:which will execute the js code outside the browser like node js it is just like compiler
// data types: int ,string,bolean, array, object
//varibales cann be declared in js as let , var, const
let a=21;
let b="malli";
let array=[3,"malli",44,396];
let object={
    name:"malleswari",
    age:333,
    arr:[3,"jai",4,"mudavath"],
    objects:{
        name:"mudavath",
        pincode:"5934569"
    }
};
let s= new Set();
s.add(3);
s.add("malli");
s.add("mudavvath");
s.add(777);
s.add(4);
console.log(s);
// if(s.hash("malli")){
//     console.log("element is present");
// }
let m=new Map();
m.set(1,2);
m.set(9,"malli");
m.set(3,77);
let x=m.get(2);
console.log(x);
for(let el of m){
    console.log(el);
}