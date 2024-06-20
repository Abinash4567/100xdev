import z from 'zod';

interface User {
    name: string;
    marks: number;
    wordsPerMin: number;
    address: string
}

type Student = Partial<User>
type Optional = Pick<User, 'marks' | 'name'>

function calculateTotalMarks(a: Student, b: Student): number
{
    return a?.marks! + b?.marks!;
}

let user1: Student = { name: "Abinash", marks: 40 };
let user2: Student = { name: "Abc", marks: 80 };

// console.log(calculateTotalMarks(user1, user2));

interface Config {
    endpoint: string;
    apikey: string;
}


const config: Readonly<Config> = {
    endpoint: 'https:api.example.com',
    apikey: 'lskdmc'
}


type UserTrial = Record<string, { name: string, marks: number }>
const map = new Map<string, Partial<User>>();
map.set("abinash", { marks: 12, wordsPerMin: 12 });
console.log(map.get("abinash"));

type Events = 'click' | 'scroll' | 'hover';
type ExcludedEvents = Exclude<Events, 'scroll'>;

function saySomething(argument: ExcludedEvents)
{
    console.log(argument);
}

saySomething('click');

const userObj = z.object({
    name: z.string().min(8, {message: "Cannot be lessa than 10"}).optional(),
    marks: z.number().min(12, {message: "cannot be this minimum"})
})

type UserObject = z.infer<typeof userObj>