import express from "express";
import customError from "./utilis/customError.js";
import errorHandler from "./controller/errorHandler.js";
import asyncErrorHandler from "./utilis/asyncErrorHandler.js";

process.on('uncaughtException', (err) => {
    console.log(err.name, err.message);
    console.log('Uncaught Exception occured! Shutting down...');
    process.exit(1);
 })

const app = express();
app.use(express.json());

app.get("/", (req, res) =>{
  res.send("<h1>Hello</h1>");
});

app.get("/demo", asyncErrorHandler( async(req, res, next)=>{
    const reponse = await fetch("https://random-word-api.herokuapp.com/word");
    if(!reponse)
    {
      const err = new customError("No reponse generated", 500);
      return next(err);
    }
    const data = await reponse.json();
    res.status(200).send(data);
}));

//default route
app.all("*", (req, res, next)=>{
  // res.status(404).json({
  //   status: "failed",
  //   message: `No such path ${req.path}`
  // })

  // const err = new Error(`Cant find ${req.path}`);
  // err.statusCode = 404;
  // err.status = "failed";
  // next(err);

  const err = new customError(`Cant find this requested path ${req.path}`, 404);
  next(err);
})

app.use(errorHandler);

const server = app.listen(3000, () => {
  console.log(`Server is running on port 3000`)
});

process.on("unhandledRejection", (error)=>{
  console.log(`Unhandled Rejection: ${error.message}, ${error.name}`);
  console.log(`Server is shutting down`);

  server.close( ()=> process.exit(1) );
})