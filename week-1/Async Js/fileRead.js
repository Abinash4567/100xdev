const fs = require("fs");

let data = fs.readFileSync('demo.txt');
console.log(String(data));
console.log("finished");