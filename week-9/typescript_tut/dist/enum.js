"use strict";
var KeyInput;
(function (KeyInput) {
    KeyInput[KeyInput["Up"] = 0] = "Up";
    KeyInput[KeyInput["Down"] = 1] = "Down";
    KeyInput[KeyInput["Left"] = 2] = "Left";
    KeyInput[KeyInput["Right"] = 3] = "Right";
})(KeyInput || (KeyInput = {}));
function func1(arg) {
    if (arg == KeyInput.Down)
        return "down";
    else if (arg == KeyInput.Left)
        return "Left";
    else if (arg == KeyInput.Right)
        return "Right";
    else if (arg == KeyInput.Up)
        return "Up";
    return "Not Specified";
}
// console.log(func1(KeyInput.Left))
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
app.get("/", (req, res, next) => {
    if (!req.query.userId)
        return res.status(ResponseStatus.NotFound).json({ message: "No UserId found" });
    else if (!req.header.Authorozation.split(' ')[1])
        return res.status(ResponseStatus.Error).json({ message: "No Authneticatoin" });
});
