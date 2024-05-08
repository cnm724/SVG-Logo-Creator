// creating a shape class that creates constructors to be able to append(super) to other shapes

class Shape {
    constructor(shapeColor, logoCharacters, textColor) {
        this.shapeColor = shapeColor;
        this.logoCharacters = logoCharacters;
        this.textColor = textColor;
    }
}

module.exports = Shape;