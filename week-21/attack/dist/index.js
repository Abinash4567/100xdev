"use strict";
var request = require('request');
function gettingData(otp) {
    var options = {
        'method': 'POST',
        'url': 'http://localhost:3000/reset-password',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": "abinash@gmail.com",
            "otp": { otp },
            "newPassword": "Abinash"
        })
    };
    request(options, function (error, response) {
        var _a;
        if (error)
            throw new Error(error);
        // if(response.body.message)
        console.log((_a = response.body) === null || _a === void 0 ? void 0 : _a.message);
    });
}
gettingData(879898);
