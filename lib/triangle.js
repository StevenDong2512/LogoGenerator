const Shape = require('./shapes');

class Triangle extends Shape {
  render() {
    return `
      <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,200 300,200 150,0" fill="${this.shapeColor}"/>
        <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" font-size="40" font-weight="bold" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>
    `;
  }
}

module.exports = Triangle;