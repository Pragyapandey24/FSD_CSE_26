console.log("one");
console.log("two");
console.log("three");
setTimeout(function(){
    console.log("Hello after 5 section");

},5000);
console.log("four");
console.log("five");

function welcome(){
    console.log("welcome to javascript")
}
setTimeout(welcome,3000);

function greet(f_name,l_name){
    console.log("hello",f_name,l_name);

}
setTimeout(greet,2000,'PRAGYA','PANDEY');

