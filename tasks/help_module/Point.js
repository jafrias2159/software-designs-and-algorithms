var Point = /** @class */ (function () {
    function Point(coordinateX, coordinateY) {
        if (!coordinateX || !coordinateY) {
            this.x = 0;
            this.y = 0;
        }
        else {
            this.x = coordinateX;
            this.y = coordinateX;
        }
    }
    Point.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    Point.prototype.distance = function (entitieX, entitieY) {
        var a = 0;
        var b = 0;
        if (typeof entitieX === "undefined" && typeof entitieY === "undefined") {
            a = this.x;
            b = this.y;
        }
        else if (entitieX instanceof Point) {
            var point = entitieX;
            a = this.x - point.x;
            b = this.y - point.y;
        }
        else if (typeof entitieX === "number" && typeof entitieY === "number") {
            a = this.x - entitieX;
            b = this.y - entitieY;
        }
        return Math.sqrt(a * a + b * b);
    };
    return Point;
}());
var pointA = new Point(10, 10);
var pointB = new Point(20, 20);
console.log("Getting distance using no params:", pointA.distance());
console.log("Getting distance using pointB:", pointA.distance(pointB));
console.log("Getting distance using plain values", pointA.distance(20, 20));
