import express from 'express';
import fs from 'fs';

const app = express();
app.use(express.json());
app.use(countRequests);


let requests = 0;
let words = JSON.parse(fs.readFileSync('./file.json'));
function countRequests(req, res, next){
    requests += 1;
    console.log("New request " + requests);
    next();
}

app.get("/", (req, res)=>{
    let name = req.query.name;
    res.send(`<h1>${name}</h1>`);
})


app.get(`/movie/:id/:name/:idd`, (req, res)=>{
    let id = req.params;
    res.send(id);
})

app.use((error, req, res, next)=>{
    res.send()
})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})if(process.env.NODE_ENV=="production")