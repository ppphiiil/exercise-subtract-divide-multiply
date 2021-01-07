// # Add subtract divide multiply
// ​
// Write the logic that given two numbers will print to the console if they should be added, subtracted, multiplied or divided to get 24. If none of the operations can give 24, print null. You can assume it will always be two iteger numbers.
// You should print either "added", "subtracted", "divided", "multiplied" or null, even if multiple cases would be possible.
// ​
// Examples:
// ​
// * with 15 and 9 ➞ "added"
// * with 26 and 2 ➞ "subtracted"
// * with 11 and 11 ➞ null
// * 12, 12 ➞ "added"
// * 100, 76 ➞ "subtracted"
// * 6, 4 ➞ "multiplied"
// * 528, 22 ➞ "divided"
// * 10, 12 ➞ null

const getNumber = 24;
const number1 = 10;
const number2 = 12;


if (((number1 + number2) === 24)) {
    console.log("added");
} else

    if (((number1 - number2) === 24)) {
        console.log("subtracted");
    } else

        if (((number1 * number2) === 24)) {
            console.log("multiplied");
        }
        else

            if (((number1 / number2) === 24)) {
                console.log("devided");
            }

            else {
                console.log("null");
            }


