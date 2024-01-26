const user1 = {
    firstName:"Abinash",
    group:"A",
    about:function(){
        console.log(`${this.firstName} is in ${this.group}`);
    }
}

const user2 = {
    firstName:"Avinash",
    group:"B"
}
function describe(hobby, weight){
    console.log(`${this.firstName} likes to ${hobby}. He weighs ${weight} kg.`)
}
// user1.about();
// user1.about.call(user2);
// describe.call(user1, "play", 45);
// describe.apply(user2, ["play", 67]);
// funAbout = describe.bind(user1, "play", 45);
// funAbout();

const userMethods = {
    is18: function(){
        return this.age >=18;
    },
    about: function(){
        return `${this.firstName} is in ${this.group}`;
    }
}

function createUser(firstName, lastName, email, group, age){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.group = group;
    user.age = age;
    user.is18 = userMethods.is18;
    user.about = userMethods.about;
    return user;
}

const firstUser = createUser("abinash", "yadav", "abinash@gmail.com", "A", 22);
console.log(firstUser.about());
if(firstUser.is18())
    console.log(`He can vote`);

// console.log(userMethods);     //create object using Object.create to make chaining

//function --> prototype
//object -->proto

class Person{
    constructor(fullName, phone, address)
    {
        this.fullName = fullName;
        this.phone = phone;
        this.address = address;
    }
    setPhone(phone)
    {
        this.phone = phone;
    }
    getAddress(){
        return this.address;
    }
    displayAddress()
    {
        console.log(`${this.fullName} lives in ${this.address}`);
    }
}

class Employee extends Person{
    constructor(fullName, phone, address, employeeId, salary)
    {
        super(fullName, phone, address);
        this.employeeId = employeeId;
        this.salary = salary;
    }
    displaySalary()
    {
        console.log(`${this.fullName} has pay of ${this.salary}`);
    }
}

const person1 = new Person("abinash", 9811, "ADD1");
const emp1 = new Employee("avinash", 9822, "llmk", 342, 12000);

// person1.displayAddress();
// emp1.displayAddress();
// person1.setPhone(998);
// console.log(person1.phone);