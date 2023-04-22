const Circle = require('./circle');

describe('Circle', () => {
  it('renders a circle SVG with the correct shape and text properties', () => {
    const circle = new Circle();
    circle.shapeColor = 'red';
    circle.textColor = 'blue';
    circle.text = 'ABC';

    const expected = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="red">
        <text fill="blue" font-weight="bold" font-size="50%">ABC</text>
      </circle>
    </svg>`;

    expect(circle.render()).toEqual(expected);
  });
});
