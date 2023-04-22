const Shape = require('./shapes')

class Circle extends Shape {
  render() {
    return `<svg width="200" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${this.shapeColor}">
      <text fill="${this.textColor}" font-weight="bold" font-size="50%">${this.text}</text>
    </svg>`;
  }
}

module.exports = Circle;