let a,b,r;
a = 5;
b = 10;
r=a+b;
console.log(r)
const array0 = new array('a',10,true,{name:"pragya"})
// Data types-1 Primitive 2-Non-Primitive
// let ,var, const-variables

let p,q,c;
p=5;
q=10;
c=p+q;
console.log(c);

//  Array-used to store value of same type

// Empty array
const empty = [];

// Array with values mixed types
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];
const mixed = [1, 'hello', true, null];
const arr01 = ['a', 'b', 'c'];

console.log(arr01[0]); // 'red'
console.log(arr01[2]); // 'blue'
console.log(arr01[5]); // undefined (index out of bounds)

const number = [1, 2];

number.push(3);      // [1, 2, 3]
number.pop();        // [1, 2] (returns 3)
number.unshift(0);   // [0, 1, 2]
number.shift();      // [1, 2] (returns 0)
 const a1=[1,2,3,4,5,6,7];
 a1.slice(2,5);
 
const nums = [1, 2, 3, 4, 5]; // slice
const part = nums.slice(1, 3); 
console.log(part); // [2, 3]

const letters = ["a", "b", "c", "d"]; // splice 
letters.splice(1, 2); 
console.log(letters); // ["a", "d"]

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

// concat joins arrays together
const result = arr1.concat(arr2, arr3);

console.log(result); // [1, 2, 3, 4, 5, 6]
 // we can also use ... to concat
 const r0=[...a1,...arr2,...a3];

 // objects -key value pairs
  let student ={
    name: "Pragya Pandey",
    rollno: 830,
    branch:"CSE"
  }
  console.log(student);
  console.log(student.name);

  // Functions- reusable block of code
   function sum(a,b){
    let r;
    r=a+b;
    return r;
    
   }
   let result0=sum(2,3)
   console.log(result0);

   //function example
function greating_msg(f_name,l_name)
{
    let r = f_name + l_name
    console.log('goodmorning${r}'+r)
}
greating_msg("Pragya","Pandey")


alert('welcome')
undefined

confirm("are you want to exit from here")
//true if OK

confirm("are you want to exit from here")
//false

prompt("Please enter the value of a")
'24'

let a01 = prompt("Enter the value of a")
let b01= prompt("Enter the value of b")
console.log(a+b)

let a03 = parseInt(prompt("Enter the value of a"))
let b03 = parseInt(prompt("Enter the value of b"))
console.log(a+b)
//output  34

let a02 = parseFloat(prompt("Enter the value of a"))
let b02 = parseFloat(prompt("Enter the value of b"))
console.log(a+b)
//output 134.4