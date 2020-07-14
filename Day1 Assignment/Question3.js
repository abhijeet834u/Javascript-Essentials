/*
Write a brief intro on available data types in Javascript

The String Data Type  --> It is used to store words or sentence
Ex: var a = "I am string example";

The Number Data Type --> It is used to store all types of numeric values like integer, float, expontial number
Ex: var a = 25;
    var b = -80.5;
    var c = 5e+6;

The Boolean Data Type --> It is used value in bit as true or false, nothing else.

The Undefined Data Type --> If a variable has been declared, but has not been assigned a value, has the value
Ex: var n;
    alert(n) //Output:undefined

The Null Data Type --> This is another special data type that can have only one value-the null value. A null value means that there is no value. 
It is not equivalent to an empty string ("") or 0, it is simply nothing.
Ex: var s = null

The Object Data Type --> An object contains properties, defined as a key-value pair. 
A property key (name) is always a string, but the value can be any data type, like strings, numbers, booleans, or complex data types like arrays, function and other objects
Ex: var person = {"name": "Abhijeet", "surname": "Chimanaksr", "age": "16"};

The Array Data Type --> An array is a type of object used for storing multiple values in single variable. 
Each value (also called an element) in an array has a numeric position, known as its index, 
and it may contain data of any data type-numbers, strings, booleans, functions, objects, and even other arrays. 
The array index starts from 0, so that the first array element is arr[0] not arr[1]

Ex: var colors = ["Red", "Yellow", "Green", "Orange"];
    alert(colors[0]);   // Output: Red

The Function Data Type --> The function is callable object that executes a block of code. Since functions are objects, so it is possible to assign them to variables
Ex: var greeting = function(){ 
    return "Hello World!"; 
    }
 
    // Check the type of greeting variable
    alert(typeof greeting) // Output: function
    alert(greeting());     // Output: Hello World!

The typeof Operator --> The typeof operator can be used to find out what type of data a variable or operand contains. 
It can be used with or without parentheses (typeof(x) or typeof x).

Ex:
typeof 15;  // Returns: "number"
typeof NaN;  // Returns: "number". Despite being "Not-A-Number"
 
typeof '';  // Returns: "string"
typeof 'hello';  // Returns: "string"
typeof '12';  // Returns: "string". Number within quotes is typeof string
 
// Booleans
typeof true;  // Returns: "boolean"
typeof false;  // Returns: "boolean"
 
// Undefined
typeof undefined;  // Returns: "undefined"
typeof undeclaredVariable; // Returns: "undefined"
 
// Null
typeof Null;  // Returns: "object"
 
// Objects
typeof {name: "Abhijeet", age: 18};  // Returns: "object"
 
// Arrays
typeof [1, 2, 4];  // Returns: "object"
 
// Functions
typeof function(){};  // Returns: "function"

*/