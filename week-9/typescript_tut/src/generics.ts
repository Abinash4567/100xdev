function getLast<ElementType>(arr: Array<ElementType>): ElementType {
    return arr[arr.length - 1];
}
// console.log(getLast<string>(['a', 'b', 'c']));

type APIResponse<Data, Restt> = {
    data: Data;
    isReady: boolean;
    weight: Restt;
}

const res1: APIResponse<{name: string; class:number}, string> = {
    data: {
        name: "Abinash",
        class: 12
    },
    isReady: false,
    weight: "abc"
} 
// console.log(res1);



type PersonType = {
    name: string;
    age: number
}

const users: PersonType[] = [
    {
        name: "Abc",
        age: 12
    },
    {
        name: "bcd",
        age:12
    },
    {
        name: "efg",
        age: 78
    }
]

const filterByPeople = <T, U extends keyof T>(arr: T[], property: U, value: T[U]) => {
    return arr.filter((pp) => pp[property] === value)
}

console.log(filterByPeople(users, "name", "Abc"));
console.log(filterByPeople(users, "age", 12));
