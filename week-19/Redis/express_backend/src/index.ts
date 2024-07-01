import express, { Request } from 'express';
import { createClient } from 'redis';

const app = express();
app.use(express.json());

const client = createClient();
client.connect();

app.post('/submit', async(req, res)=>{
    try{
        const {problemId, userId, code, language } = req.body; 
        await client.lPush("submission", JSON.stringify({problemId, userId, code , language}))
        res.json({message: "Submission Received!!"})
    }
    catch(err)
    {
        res.json({message: err});
    }
    
})

app.listen(3000, ()=>{
    console.log(`Server initiated at 3000`);
})