var readlineSync = require('readline-sync');
const chalk = require('chalk');
const questionsLibrary = require('./quizQuestions');

const quizOptions = ["Html", "Css", "Javascript", "React", "Node", "Git"];

function startApp() {
    var selectedOption = readlineSync.keyInSelect(quizOptions, "Which quiz would you like to play?");

    var quizName = selectedOption === -1 ? process.exit() : quizOptions[selectedOption].toUpperCase();

    askQuestions(quizName);
}

function askQuestions(quizName) {
    console.log("\n\n");

    var totalScore = 0;


    Object.keys(questionsLibrary[quizName]).map((level) => {
        console.log("\n");

        var score = 0;

        console.log(`Welcome to ${chalk.blue(quizName)} Quiz ` + chalk.green(level));

        var questionBank = questionsLibrary[quizName][level];

        questionBank.map(ques => {
            console.log("\n");

            console.log(chalk.yellowBright(ques.question));

            var userAns = readlineSync.keyInSelect(ques.options, "Please select from the given options");

            if (userAns === -1) {
                process.exit();
            }

            if (ques.answer == ques.options[userAns]) {
                score++;
                totalScore++;
                console.log(chalk.green("Correct Answer! \n"));

                console.log(chalk.blueBright("Your score: ") + chalk.green(score));
            } else {
                console.log(chalk.red("Wrong Answer!"));

            }
        });

        if (score >= 2 && level !== "level3") {

            console.log(chalk.cyanBright("Total score : " + totalScore));
            console.log(chalk.green("Congratulations") + chalk.blue(", you're now advanced to next level"));

        } else {

            console.log(chalk.cyanBright("Total score : " + totalScore));
            console.log(chalk.blue("You were Awesome, but coundn't make it to the next level, I hope you will come back strongly!!"));
            startApp();
        }


    });
    if (readlineSync.keyInYN("Do you wish to continue?")) {
        startApp();
    } else {
        console.log(chalk.yellow("Thanks for playing!!!"));
        process.exit();
    }

}
startApp();
