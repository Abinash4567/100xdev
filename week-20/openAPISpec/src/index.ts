import express from 'express';
import { openapispec } from './openapispec';
import swaggerUI from 'swagger-ui-express'
// import swaggerJsdoc from 'swagger-jsdoc';
const app = express();
const port = 3000;

// Local user data
const users:any = [
    { id: 1, name: 'John Doe', address: '123 Main St, Anytown, USA', phone: '555-1234' },
    { id: 2, name: 'Jane Smith', address: '456 Maple Ave, Othertown, USA', phone: '555-5678' },
    { id: 3, name: 'Jim Brown', address: '789 Elm St, Anycity, USA', phone: '555-9101' },
    // Add more user data as needed
];

app.get('/api/users', (_req, res) => {
    res.json(users);
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openapispec));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
