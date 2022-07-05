class Point {
  private x: number;
  private y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(coordinateX?: number, coordinateY?: number) {
    if (!coordinateX || !coordinateY) {
      this.x = 0;
      this.y = 0;
    } else {
      this.x = coordinateX;
      this.y = coordinateX;
    }
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  distance(): number;
  distance(other: Point): number;
  distance(entitieX: number, entitieY: number): number;
  distance(entitieX?: unknown, entitieY?: number): number {
    let a: number = 0;
    let b: number = 0;
    if (typeof entitieX === "undefined" && typeof entitieY === "undefined") {
      a = this.x;
      b = this.y;
    } else if (entitieX instanceof Point) {
      const point: Point = entitieX;
      a = this.x - point.x;
      b = this.y - point.y;
    } else if (typeof entitieX === "number" && typeof entitieY === "number") {
      a = this.x - entitieX;
      b = this.y - entitieY;
    }
    return Math.sqrt(a * a + b * b);
  }
}

const pointA = new Point(10, 10);
const pointB = new Point(20, 20);

console.log("Getting distance using no params:", pointA.distance());
console.log("Getting distance using pointB:", pointA.distance(pointB));
console.log("Getting distance using plain values", pointA.distance(20, 20));