const Circle = ("lib/circle.js")

describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<svg width="200" height="200"
      xmlns="http://www.w3.org/2000/svg"> <circle cx="100" cy="100" r="80"  fill="${this.shapeColor}">
      <text fill="${this.textColor}" font-weight="bold" font-size="50%">${this.text}</text>
 </svg>`)})})