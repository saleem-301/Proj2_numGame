#! /usr/bin/env node
import inquirer from "inquirer";
while (true) {
    const randomNum = Math.floor(Math.random() * 6 + 1);
    const guesNum = await inquirer.prompt([
        {
            name: "GuessNum",
            type: "number",
            message: "Guess the Number from 1 to 6 ",
        },
    ]);
    //   console.log(guesNum.GuessNum);
    if (guesNum.GuessNum > 0 && guesNum.GuessNum <= 6) {
        if (guesNum.GuessNum === randomNum) {
            console.log("Congrats! You Won");
            break;
        }
        else {
            console.log("You Guess Wrong Number");
        }
    }
    else {
        console.log("You must guess between 1 to 6, Try Again");
    }
}
