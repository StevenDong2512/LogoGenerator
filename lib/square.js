const Shape = require('./shapes');

class Square extends Shape {
  render() {
    return `
      <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="400" height="400" fill="${this.shapeColor}"/>
        <text x="250" y="250" dominant-baseline="middle" text-anchor="middle" font-size="150" font-weight="bold" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>
    `;
  }
}

module.exports = Square;