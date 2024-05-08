const inquirer = require("inquirer");
const fs = require('fs');
const { Circle } = require('./lib/circle');
const { Square } = require('./lib/square');
const { Triangle } = require('./lib/triangle');

// question prompts for user input
inquirer
  .prompt([
    {
        type: 'input',
        name: 'logoCharacters',
        message: "What are the characters for the logo? (up to 3 characters only)",
        validate: function (input) {
            if (input.length > 3) {
                return "Please enter up to three characters only"
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: "What's the color for the text? (color or hex number)",
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want your logo to be?',
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "What color do you want the shape to be? (color or hex number)",
    },
  ])
  .then((answers) => {
    let shape;
    switch (answers.shape) {
        // creates/checks shape inputed by user
        case 'Circle':
            shape = new Circle(answers.shapeColor, answers.logoCharacters, answers.textColor);
            break;
        case 'Triangle':
            shape = new Triangle(answers.shapeColor, answers.logoCharacters, answers.textColor);
            break;
        case 'Square':
            shape = new Square(answers.shapeColor, answers.logoCharacters, answers.textColor);
            break;
        default:
            throw new Error('Invalid logo choice.');
    }

    // renders shape once passes switch case
    const svgContent = shape.render();
    // creates file
    return fs.promises.writeFile("./output/logo.svg", svgContent);
})
.then(() => {
    console.log("logo.svg file was created!");
})
.catch((error) => {
    console.error(error);
});
