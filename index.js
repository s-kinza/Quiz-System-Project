import inquirer from "inquirer";
import chalk from "chalk";
const quiz = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: "What is TypeScript primarily used for?",
        choices: ["Server-side scripting", "Client-side web development", "Mobile app development", "Machine learning algorithms"]
    },
    {
        name: "Question_2",
        type: "list",
        message: "Which of the following is a TypeScript data type for holding text?",
        choices: ["Number", "Boolean", "String", "Array"]
    },
    {
        name: "Question_3",
        type: "list",
        message: "In TypeScript, how do you define a variable that cannot be reassigned?",
        choices: ["Let", "Const", "Var", "Static"]
    },
    {
        name: "Question_4",
        type: "list",
        message: "What Does Typescript offer over plain JavaScript?",
        choices: ["Stronger security features", "Built-in unit testing framework", "Static typing", "Direc access to hardware"]
    },
    {
        name: "Question_5",
        type: "list",
        message: "Which TypeScript feature allows you to define the structure of an object or class?",
        choices: ["Inheritence", "Interfaces", "Mixins", "Generics"]
    }
]);
let score = 0;
switch (quiz.Question_1) {
    case "Client-side web development":
        console.log(chalk.bold.bgGreen("\n\t1. Correct\n\t"));
        ++score;
        break;
    default:
        console.log(chalk.bold.bgRed("\n\t1. Incorrect\n\t"));
}
switch (quiz.Question_2) {
    case "String":
        console.log(chalk.bold.bgGreen("\n\t2. Correct\n\t"));
        ++score;
        break;
    default:
        console.log(chalk.bold.bgRed("\n\t2. Incorrect\n\t"));
}
switch (quiz.Question_3) {
    case "Const":
        console.log(chalk.bold.bgGreen("\n\t3. Correct\n\t"));
        ++score;
        break;
    default:
        console.log(chalk.bold.bgRed("\n\t3. Incorrect\n\t"));
}
switch (quiz.Question_4) {
    case "Static typing":
        console.log(chalk.bold.bgGreen("\n\t4. Correct\n\t"));
        ++score;
        break;
    default:
        console.log(chalk.bold.bgRed("\n\t4. Incorrect\n\t"));
}
switch (quiz.Question_5) {
    case "Interfaces":
        console.log(chalk.bold.bgGreen("\n\t5. Correct\n\t"));
        ++score;
        break;
    default:
        console.log(chalk.bold.bgRed("\n\t5. Incorrect\n\t"));
}
console.log(`Score: ${score}`);
