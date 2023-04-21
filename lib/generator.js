const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

function generator(data) {
    let shape = undefined
    if (data.shape === "Circle") {
        shape = new Circle(data.shapeColor, data.text, data.textColor)
    } else if (data.shape === "Square") {
        shape = new Square(data.shapeColor, data.text, data.textColor)
    } else { shape = new Triangle(data.shapeColor, data.text, data.textColor) }

    return shape.render();
}

module.exports = generator;
