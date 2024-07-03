var request = require('request');

function gettingData(otp: number)
{
    var options = {
        'method': 'POST',
        'url': 'http://localhost:3000/reset-password',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": "abinash@gmail.com",
            "otp": {otp},
            "newPassword": "Abinash"
        })
    
    };
    request(options, function (error: string | undefined, response: { body: any; }) {
        if (error) throw new Error(error);
        // if(response.body.message)
        return response.body;
    });
}

let obj = gettingData(879898);
console.log(obj.message);