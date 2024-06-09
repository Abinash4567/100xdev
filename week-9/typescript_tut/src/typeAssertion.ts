// const button = document.getElementById("id")!;
// const button1 = document.getElementById("idd") as HTMLElement;
// const button2 = document.getElementById("iddd")!;

// ================================================   Dynamic Type interface =================================================

interface Person {
    [key: string]: string;
}

let abc: Person = {
    name: "abinash",
    email: "abinash@gmail.com"
}

function getObj(key: keyof typeof abc){
    return abc[key];
}

// console.log(getObj("name"));
// console.log(`Hlelo`);

