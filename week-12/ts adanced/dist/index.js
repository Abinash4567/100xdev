"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
function calculateTotalMarks(a, b) {
    return (a === null || a === void 0 ? void 0 : a.marks) + (b === null || b === void 0 ? void 0 : b.marks);
}
let user1 = { name: "Abinash", marks: 40 };
let user2 = { name: "Abc", marks: 80 };
const config = {
    endpoint: 'https:api.example.com',
    apikey: 'lskdmc'
};
const map = new Map();
map.set("abinash", { marks: 12, wordsPerMin: 12 });
console.log(map.get("abinash"));
function saySomething(argument) {
    console.log(argument);
}
saySomething('click');
const userObj = zod_1.default.object({
    name: zod_1.default.string().min(8, { message: "Cannot be lessa than 10" }).optional(),
    marks: zod_1.default.number().min(12, { message: "cannot be this minimum" })
});
