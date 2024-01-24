console.log(`Hello World`);

let firstName = `Abinash`;
var secondName = `Ray Yadav`;
console.log(firstName+" "+secondName);

//Array
let arr = [1, 2, 3, 3, 45, 90, 2];
let largest = arr[0];
for(let i=0; i<arr.length; i++)
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


let sum = 0;
for(let i=1; i<1000000000000; i++)
    sum+=i;
console.log(sum);