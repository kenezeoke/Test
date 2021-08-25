const Circle = require('./Circle');
const Point = require('./Point');

test('should return FALSE if the point is outside the circle', function() {

  const point = Point(3, 4);
  const circle = Circle(Point(1, 2), 2);

  expect(circle.includes(point)).toBeFalsy();
});

test('should return TRUE if the point is inside the circle', function() {

  const point = Point(3, 4);
  const circle = Circle(Point(1, 2), 3);

  expect(circle.includes(point)).toBeTruthy();
});

test('should return TRUE if the point is tangential to the circle', function() {

  const point = Point(3, 3);
  const circle = Circle(Point(1, 3), 2);

  expect(circle.includes(point)).toBeTruthy();
});
