const Shape = require('./shapes')

class Square extends Shape {
    render() {
        return `<svg width="150" height="150"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="20" fill="${this.shapeColor}" />
      <text fill="${this.textColor}" font-weight="bold" font-size="50%">${this.text}</text>
    </svg>`;
    }
}

module.exports = Square;
