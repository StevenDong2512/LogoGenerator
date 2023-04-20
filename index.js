const fs = require("fs")
const inquirer = require("inquirer")
const generator = require('./lib/generator')

const questions = [
    {
        type: "list",
        name: "shape",
        message: "Please pick the shape for your logo.",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a colour keyword or a hexadecimal number to fill your logo shape.",
    },
    {
        type: "input",
        name: "text",
        message: "Please enter UP TO THREE letters for your logo text.",
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter a colour keyword or a hexadecimal number for text colour.",
    },
];

function writeToFile(fileName, data) {
    const generated = generator(data);
    fs.writeFile(fileName, generated, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Your logo has been generated.");
    })
};
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            console.log(data);
            writeToFile("logo.svg", generator(data));
        })
};

init();
