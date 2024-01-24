//Counter to count from 30 to 0
for(let i = 30; i>=0; i--)
    console.log(i);

//time between setTimeout call and function runnning
function greet()
{
    let delay = Date.now()-startTime-1000;
    console.log("Delay is: "+delay +" ms");
}

let startTime = Date.now();
setTimeout(greet, 1000);

//Clock HH:MM:SS
function digitalClock()
{
    let curr = new Date();
    let hr = curr.getHours()<=9 ? "0"+curr.getHours():curr.getHours();
    let min = curr.getMinutes()<=9?"0"+curr.getMinutes():curr.getMinutes();
    let sec = curr.getSeconds()<=9?"0"+curr.getSeconds():curr.getSeconds();

    console.log(hr+":"+min+":"+sec);
}

setInterval(digitalClock, 1000);
// while(1)
//     digitalClock();