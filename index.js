const fs = require ('fs');
const inquirer = require('inquirer');
const generator = require ('./lib/generate')

const questions = [
    {
        type: "list",
        name: "shape",
        message: "Please pick the shape for your logo.",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shape-color",
        message: "Please enter a colour keyword or a hexadecimal number to fill your logo shape.",
    },
    {
        type: "input",
        name: "text",
        message: "Please enter UP TO THREE letters for your logo text.",
    },
    {
        type: "input",
        name: "text-color",
        message: "Please enter a colour keyword or a hexadecimal number for text colour.",
    },
]