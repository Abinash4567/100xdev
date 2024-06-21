import express, { type Express } from "express";
const app = express();
app.use(express.json())
app.get("/message/:name", (req, res) => 
    {
        return res.json({ message: `hello ${req.params.name}` });
    })


app.listen(3003, ()=>{
    console.log(`Server listening in port 3000`);
})