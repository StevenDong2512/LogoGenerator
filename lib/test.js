const Circle = require('./circle');

describe('Circle', () => {
  it('renders a circle SVG with the correct shape and text properties', () => {
    const circle = new Circle();
    circle.shapeColor = 'red';
    circle.textColor = 'blue';
    circle.text = 'ABC';

    const expected = `
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" fill="red"/>
        <text x="100" y="100" dominant-baseline="middle" text-anchor="middle" font-size="50" font-weight="bold" fill="blue">
          ABC
        </text>
      </svg>
    `;
    expect(circle.render()).toEqual(expected);
  });
});
