// const promise1 = new Promise(function(resolve, reject){
//     let error = true;
//     let data = {username: "abinash", group: "a"};
//     error ? reject("error connecting to server") : resolve(data);
// });

// promise1.then(function(data){
//     console.log(data);
// }).catch(function(error)
// {
//     console.log(error);
// });


async function solve(){
    try{
        const data = {username: "abinash", group:"a"};
        // const result = await data.json();
        console.log(data);
        throw 500;
    }
    catch(error)
    {
        console.log(`error occured ${error}`);
    }
}


solve();

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));