import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf8")
    .trim()
    .split("\n");

function algorithm (input) {

    let curr = 50;

    for(let i = 0; i < input.length; i++) {

        const direction = input[i].charAt(0)
        const amount = Number(input[i].slice(1));

        if(direction === "L") {
            curr -= amount;
            curr = ((curr % 100) + 100) % 100;
        } else {
             curr +=amount;
             curr = ((curr % 100) + 100) % 100;
        }
    }
    console.log(curr)
}

algorithm(input)



/*
test case:
starts at : 50

L42 = 8
R52 = 60
L15 = 45
R25 = 70
L70 = 0 INCREMENT COUNTER BY 1        

return COUNTER = 1

KEY = 1
*/

