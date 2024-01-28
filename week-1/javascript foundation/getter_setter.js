class user {
    constructor(email, password)
    {
        this.email = email,
        this.password = password
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password = value;
    }
}

const user1 = new user("abinash@gmail.com", "123");
user1.password = 'abc';
console.log(user1.password);


const person = {
    _username: "abinash",
    _group: "A",

    get username(){
        this._username;
    },

    set group(value){
        this._group = value;
    }
}

const person1 = Object.assign(person);
console.log(person1);