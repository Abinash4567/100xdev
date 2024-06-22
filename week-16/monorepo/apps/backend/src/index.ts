import express, { type Express } from "express";
import {value} from "@repo/common/config";

const app = express();
app.use(express.json())
app.get("/message/:name", (req, res) => 
    {
        return res.json({ message: `hello ${value}` });
    })


app.listen(3003, ()=>{
    console.log(`Server listening in port 3000`);
})