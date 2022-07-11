import { Point } from "./Point";

abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length >= 3) {
      this.points = points;
      this.color = "Green";
      this.filled = true;
      if (typeof color !== "undefined" && typeof filled !== "undefined") {
        this.color = color;
        this.filled = filled;
      }
    } else {
      throw new Error("Please add at least 3 points");
    }
  }

  toString() {
    let returnText = `A Shape with color of ${this.color} and ${
      this.filled ? "filled" : "not filled"
    }. Points: `;

    this.points.forEach((point, index) => {
      returnText += point.toString();
      if (index !== this.points.length - 1) {
        returnText += ", ";
      }
    });

    return returnText;
  }

  getPerimeter() {
    let perimeter = 0;
    let lastPoint: Point = this.points[0];
    this.points.forEach((point) => {
      perimeter += point.distance(lastPoint);
      lastPoint = point;
    });

    return perimeter;
  }

  abstract getType(): string;
}

export class Triangle extends Shape {
  constructor(points: Point[]);
  constructor(points: Point[], color?: string, filled?: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (typeof color !== "undefined" && typeof filled !== "undefined") {
      super(points, color, filled);
    } else {
      super(points);
    }
  }

  toString(): string {
    let returnText = "Triangle[";

    this.points.forEach((point, index) => {
      returnText += `v${index + 1}[${point.toString()}]`;
      if (index !== this.points.length - 1) {
        returnText += ", ";
      } else {
        returnText += "]";
      }
    });

    return returnText;
  }

  getType() {
    const firstSize = this.points[0].distance(this.points[2]);
    const secondSize = this.points[1].distance(this.points[0]);
    const thirdSize = this.points[2].distance(this.points[1]);
    let sizes: number[] = [firstSize, secondSize, thirdSize];

    const isEquilateralTriangle = sizes.every((size) => size === sizes[0]);
    const uniqueSizes = new Set(sizes);

    if (isEquilateralTriangle) return "Is Equilateral Triangle";
    if (uniqueSizes.size === sizes.length) return "Is Scalene triangle";
    return "Is Isosceles triangle";
  }
}
