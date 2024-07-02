import { DefaultService } from "../generated";


async function main()
{
    const user = await DefaultService.getUsers("1212982");
    console.log(user);
} 

main();