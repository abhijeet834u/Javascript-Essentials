//difference between var, let and const

/*
VAR
1. var is used to declare a variable and to initialize the value of that variable.
2. The scope of a variable declared outside the function is global. So, if change is made in variable in local scope, it affects global veriable
*/
var a = 10;
console.log(a);

if (true){
    var a = 20;
    console.log(a);
}
console.log(a);

/*
let
1. It is similar to var but the let statement allows you to create a variable with the scope limited to the block on which it is used.
It is similar to the variable we declare in other languages like Java, .NET, etc.

*/
let ac =10;
console.log(ac);  // output 10
if(true){
 let a=20;
 console.log(ac); // output 20
}
console.log(ac);  // output 10

/* 
const
1. const statement values can be assigned once and they cannot be reassigned. 
2. The scope of const statement works similar to let statements.
*/

const ab =100;
console.log(ab);  //output 10
ab =20;           //throws type error
console.log(ab); 