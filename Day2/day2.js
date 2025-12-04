import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf8").trim();
const arrayOfRanges = input.split(",")
let total = 0;

function isInvalidId(input) {

    const num = input.toString()

    if(num.length % 2 !== 0) {
        return false;
    } else {
        const first = num.slice(0, (num.length/2))
        const second = num.slice(num.length/2)

        if(first === second) {
            return true;
        } else {
            return false;
        }
    }

}

function rangeValues(string) {
    const [start, end] = string.split("-")
    const startNum = Number(start)
    const endNum = Number(end)
    return ( {start: startNum, end: endNum} )
}

for (const range of arrayOfRanges) {
    const { start, end } = rangeValues(range);
    for (let id = start; id <= end; id++) {
        if(isInvalidId(id)) {
            total += id;
        }
    }
}

console.log(total)