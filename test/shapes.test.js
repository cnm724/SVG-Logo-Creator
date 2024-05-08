const { Circle } = require('../lib/circle');
const { Triangle } = require('../lib/triangle');
const { Square } = require('../lib/square');

describe('shape', () => {
    it('renders a circle with the correct color', () => {
        const shape = new Circle();
        shape.setColor('white');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="white" />');
    })
    it('renders a triangle with the correct color', () => {
        const shape = new Triangle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
    })
    it('renders a circle with the correct color', () => {
        const shape = new Square();
        shape.setColor('green');
        expect(shape.render()).toEqual('<rect x="175" y="125" width="120" height="120" fill="green" />');
    })
})