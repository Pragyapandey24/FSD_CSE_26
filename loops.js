//for loop
const arr = [10,20,30,40,50];
for(let i = 0 ;i<arr.length;i++){
    console.log(`arr elements are : ${arr[i]}`);
}

//while loop
const arr2 = [10,2,3,4,50];
let i = 0 ;
while(i<arr2.length){
    console.log(`arr2 elements are : ${arr2[i]}`);
    i++;
}

//for of
const arr3 = [1,2,3,4,5,6,7,8,9];
for(const element of arr3){
    console.log(element);
}

//for in
const arr4 = [10,20,30,40,50,60,70,80];
for(const element in arr4 ){
    console.log(arr4[element]);
}

//string
const arr5 = ['My' , 'name ', 'is' ,'Pragya'];
for(const element in arr5 ){
    console.log(arr5[element]);
}