class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get sendRadius() {
    document.write(`Radius(get): ${this._radius}<br>`);
  }

  get sendDiameter() {
    document.write(`Diameter(get): ${this._radius * 2}<br>`);
  }

  set enterRadius(el) {
    this._radius = el;
  }

  squareCircle() {
    document.write(`Square(method): ${(Math.PI * this._radius * this._radius).toFixed(2)}<br>`);
  }

  lengthCircle() {
    document.write(`Length circle(method): ${(2 * Math.PI * this._radius).toFixed(2)}<br>`);
  }
}

let circle = new Circle(100);

document.write(`Start radius(constructor): ${circle._radius}<br>`);
circle.enterRadius = 200;
circle.sendRadius;
circle.sendDiameter;
circle.squareCircle();
circle.lengthCircle();
