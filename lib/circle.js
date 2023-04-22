const Shape = require('./shapes');

class Circle extends Shape {
  render() {
    return `
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" fill="${this.shapeColor}"/>
        <text font-family="Roboto Condensed" x="100" y="100" dominant-baseline="middle" text-anchor="middle" font-size="50" font-weight="bold" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>
    `;
  }
}

module.exports = Circle;

