import express from 'express';
const app = express();
const PORT = 3000;


function userMiddleware(req, res, next) {
    console.log(req.header);
    if(req.header['Authorization']!='123')
        res.status(401).json({
            status: 'Unauthorized',
            message: 'Invalid authorization token'
        });
    next();
}

function kidneyMiddleware(req, res, next) {
    // if(req.header('Kidney-Token') !== '456') {
    //     res.status(401).json({
    //         status: 'Unauthorized',
    //         message: 'Invalid kidney token'
    //     });
    // } else {
        next();
    // }
}

app.get('/health', userMiddleware, kidneyMiddleware, (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Server is healthy'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});