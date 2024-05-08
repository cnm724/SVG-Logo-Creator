// Importing shape classes
const { Circle } = require('../lib/circle');
const { Triangle } = require('../lib/triangle');
const { Square } = require('../lib/square');

// testing to make sure that each individual shape renders
describe('shape', () => {
    it('circle renders correctly', () => {
        const shape = new Circle('black','AAA', 'green');
        // making sure that the test renders as expected
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="black" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">AAA</text></svg>');
    })
    it('triangle renders correctly', () => {
        const shape = new Triangle('red','BBB', 'white');
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">BBB</text></svg>');
    })
    it('square renders correctly', () => {
        const shape = new Square('blue','CCC', 'white');
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="90" y="40" width="120" height="120" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">CCC</text></svg>');
    })
})