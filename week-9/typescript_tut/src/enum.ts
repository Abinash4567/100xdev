enum KeyInput {
    Up,
    Down,
    Left,
    Right
}

function func1(arg: KeyInput):string
{
    if(arg == KeyInput.Down)
        return "down";
    else if(arg==KeyInput.Left)
        return "Left";
    else if(arg==KeyInput.Right)
        return "Right";
    else if(arg==KeyInput.Up)
        return "Up";

    return "Not Specified";
}

// console.log(func1(KeyInput.Left))




enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/", (req, res, next){
    if(!req.query.userId)
        return res.status(ResponseStatus.NotFound).json({message: "No UserId found" });
    else if(!req.header.Authorozation.split(' ')[1])
        return res.status(ResponseStatus.Error).json({ message: "No Authneticatoin" });
})