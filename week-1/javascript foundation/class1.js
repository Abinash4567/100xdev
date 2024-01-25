console.log(`Hello World`);

let firstName = `Abinash`;
var secondName = `Ray Yadav`;
console.log(firstName+" "+secondName);

//Array
let arr = [1, 2, 3, 3, 45, 90, 2];
let largest = arr[0];
for(let i=1; i<arr.length; i++)
    {
        if(arr[i] > largest)
            largest = arr[i];
        if(arr[i] % 2 ==0)
            console.log(arr[i]);
    }
console.log(`Largest Number is: `+largest);

let objectArray = [
    {
        firstName:"Abinash",
        group:"A"
    },
    {   
        firstName:"Bishal",
        group:"B"
    }];

for(let i=0; i<objectArray.length; i++)
{
    if(objectArray[i]["group"]=="A")
        console.log(objectArray[i]["firstName"]);
}

// takes up whole 100% usage in single core
let sum = 0;
// for(let i=1; i<100000000000; i++)
    // sum+=i;
// console.log(sum);

// NULL vs UNDEFINED
let a = null;       //null is object ==0
console.log(a);    //null assigned by user

let b;              //typeof undefined is undefined
console.log(b);    //not initialized then undefined

console.log("1"+2+2);  //122
console.log(1+2+"3");  //33

let arr1 = [4, 5, 6, 7, 8, 9, 78];
console.log(arr1.slice(2, 5));      //doesn't make changes to original array
console.log(arr1);
console.log(arr1.splice(2, 5));     //make changes to original array, end iterator is inclusive
console.log(arr1);

let arr2 = Array.from("hello");
console.log(arr2);

//object
let sym = Symbol("skipper");
let obj = {
    name:"abinash",
    group:"A",
    [sym]:"wake"
}
console.log(typeof obj[sym]);
// Object.freeze(obj);
obj.fun1 = function(){
    console.log(`Hello ${this.name}`);
}
obj.fun1();
console.log(obj.hasOwnProperty("name"));


console.log(addTwo(5));
function addTwo(arg)
{
    return arg + 2;
}

// console.log(addThree(5))         //Error variable hoisting
const addThree = function addThree(arg1)
{
    return arg1 + 3;
}

function temp()
{
    // console.log(this);    //Global object
}
temp();

const temp1 = ()=>{
    console.log(this);
}
temp1();

Array.from("Hello").forEach((element, index, array) => {
    console.log(element + "  " + index + "  "+array)
});

const arr3 = [5, 6, 7, 8, 10, 45, 90];
const newArr3 = arr3.map((element)=>element*10);
const new1Arr3 = arr3.filter((element)=>element>=20);
let initialValue = 1;
const newValue = arr3.reduce((accumulator, currValue)=>accumulator * currValue, initialValue);
console.log(newValue);