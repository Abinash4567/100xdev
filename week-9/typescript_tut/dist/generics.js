"use strict";
function getLast(arr) {
    return arr[arr.length - 1];
}
const res1 = {
    data: {
        name: "Abinash",
        class: 12
    },
    isReady: false,
    weight: "abc"
};
const users = [
    {
        name: "Abc",
        age: 12
    },
    {
        name: "bcd",
        age: 12
    },
    {
        name: "efg",
        age: 78
    }
];
const filterByPeople = (arr, property, value) => {
    return arr.filter((pp) => pp[property] === value);
};
console.log(filterByPeople(users, "name", "Abc"));
console.log(filterByPeople(users, "age", 12));
