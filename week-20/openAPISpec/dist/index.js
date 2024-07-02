"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const openapispec_1 = require("./openapispec");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
// import swaggerJsdoc from 'swagger-jsdoc';
const app = (0, express_1.default)();
const port = 3000;
// Local user data
const users = [
    { id: 1, name: 'John Doe', address: '123 Main St, Anytown, USA', phone: '555-1234' },
    { id: 2, name: 'Jane Smith', address: '456 Maple Ave, Othertown, USA', phone: '555-5678' },
    { id: 3, name: 'Jim Brown', address: '789 Elm St, Anycity, USA', phone: '555-9101' },
    // Add more user data as needed
];
app.get('/api/users', (_req, res) => {
    res.json(users);
});
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(openapispec_1.openapispec));
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
