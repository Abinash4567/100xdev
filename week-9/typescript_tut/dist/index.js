"use strict";
let a = "Hello";
let b = 12;
let c = false;
let userTheme = 'light';
var ApiResponseCode;
(function (ApiResponseCode) {
    ApiResponseCode[ApiResponseCode["Success"] = 200] = "Success";
    ApiResponseCode[ApiResponseCode["BadRequest"] = 400] = "BadRequest";
    ApiResponseCode[ApiResponseCode["Unauthorized"] = 401] = "Unauthorized";
    ApiResponseCode[ApiResponseCode["NotFound"] = 404] = "NotFound";
})(ApiResponseCode || (ApiResponseCode = {}));
// ApiResponseCode --> Object
// ApiResponseCode.Success  --> number 
function handleResponse(code) {
    if (code === ApiResponseCode.Success)
        console.log("success");
    else
        console.log("failed");
}
const sum = (n, m) => n + m;
const ArraySum = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let res = {
    id: 12,
    title: "hey words",
    description: "Anything possible"
};
let emp1 = {
    employeeId: 12,
    name: "Abc",
    salary: 12000,
    func: function () {
        console.log(this.name);
    }
};
if (emp1.func)
    emp1.func();
const calcSum = (n, m, k = 10) => k ? n + m + k : n + m;
// console.log(calcSum(1, 2));
const func = (...arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
};
// console.log(func(1, 2, 3, 4, 5, 6));
// ================================================================= never / Error ========================================
const functionThrowError = () => {
    throw new Error("Internal Error");
};
const functionReturnError = () => {
    return new Error("Internal Error");
};
