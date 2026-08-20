//callback function
function greet(name){
    console.log("Hello"+name);
}

function processUser(callback){
    callback("Pragya");
}

processUser(greet);

function calculate(a,b,callback){
    let result = a+b;
    callback(result);
}

function display(result){
    console.log("Result=",result);
}

calculate(10,20,display);