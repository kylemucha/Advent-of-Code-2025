import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf8")
    .trim()
    .split("\n");

function algorithm (input) {

    let curr = 50;
    let count = 0;

    for(let i = 0; i < input.length; i++) {

        const direction = input[i].charAt(0)
        const amount = Number(input[i].slice(1));

        if(direction === "L") {
            curr -= amount;
            curr = ((curr % 100) + 100) % 100;
            if(curr === 0)
                count++;
        } else {
             curr +=amount;
             curr = ((curr % 100) + 100) % 100;
             if(curr === 0)
                count++;
        }
    }
    console.log(count)
}

algorithm(input);