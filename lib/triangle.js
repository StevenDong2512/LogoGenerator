const Shape = require('./shapes')

class Triangle extends Shape {
    render() {
        return `<svg height="100%" width="100%"
      xmlns="http://www.w3.org/2000/svg">
      <polygon points="0,200 300,200 150,0" fill="${this.shapeColor}" />
      <text fill="${this.textColor}" font-weight="bold" font-size="50%">${this.text}</text>
    </svg>`;
    }
}

module.exports = Triangle;
