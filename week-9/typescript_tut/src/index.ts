let a: string = "Hello";
let b: number = 12;
let c: boolean = false;


type theme = "dark" | "light";
let userTheme:theme = 'light'; 

enum ApiResponseCode {
    Success = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404
}
// ApiResponseCode --> Object
// ApiResponseCode.Success  --> number 


function handleResponse(code: ApiResponseCode):undefined {
    if (code === ApiResponseCode.Success) 
        console.log("success");
    else 
        console.log("failed");
}
// handleResponse(200);

type FunctionType = (n:number, m:number) => number;
const sum: FunctionType = (n, m) => n + m;
// console.log(sum(12, 13));

type Function1Type = (a: Array<number>) => number

const ArraySum: Function1Type = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(ArraySum([1, 2, 3, 4 ,5 ]));


type response = {
    id: number;
    title: string;
    description?: string
}

let res: response = {
    id: 12,
    title: "hey words",
    description: "Anything possible"
}

type objfuntype = () => undefined

interface employee{
    employeeId: number;
    name: string;
    salary: number;
    func?: objfuntype;
}

interface manager extends employee {
    departmentId: number;
    role: string;
}

let emp1: employee ={
    employeeId: 12,
    name: "Abc",
    salary: 12000,
    func: function(){
        console.log(this.name);
    }
} 

if(emp1.func)
    emp1.func();




// =================================================================function==============================================
type FuncType1 = (n: number, m:number, k?:number) => number

const calcSum: FuncType1 = (n, m, k = 10) => k ? n + m + k : n + m; 
// console.log(calcSum(1, 2));

const func = (...arr: Array<number>)=>{
    let sum = 0;
    for(let i=0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}

// console.log(func(1, 2, 3, 4, 5, 6));

// ================================================================= never / Error ========================================

const functionThrowError = (): never =>{
    throw new Error("Internal Error");
}

const functionReturnError = (): Error => {
    return new Error("Internal Error");
}