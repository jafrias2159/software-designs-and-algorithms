export class Point {
  private x: number;
  private y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(coordinateX?: number, coordinateY?: number) {
    if (
      typeof coordinateX === "undefined" ||
      typeof coordinateY === "undefined"
    ) {
      this.x = 0;
      this.y = 0;
    } else {
      this.x = coordinateX;
      this.y = coordinateY;
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
