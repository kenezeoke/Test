const Point = require('./point');

function calculate (center, radius){
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // TODO: write your code here
      let x = (Point.x - center.x) **2;
      let y = (Point.y - center.y) **2;
      if (x + y <= radius**2){
        return true;
      }
    }
  }
}

module.exports = calculate;
