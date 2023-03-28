var Circle = /** @class */ (function () {
    function Circle(Rad) {
        this.Radius = Rad;
        this.Pi = 3.14;
    }
    Circle.prototype.Area = function () {
        var Area = 0;
        Area = this.Pi * this.Radius * this.Radius;
        return Area;
    };
    return Circle;
}());
var Rad1 = 5;
var Rad2 = 6;
var obj1 = new Circle(Rad1);
var obj2 = new Circle(Rad2);
var Ret = 0;
Ret = obj1.Area();
console.log("Area of the circle when radius is = " + Rad1 + ", " + Ret);
Ret = obj2.Area();
console.log("Area of the circle when radius is = " + Rad2 + ", " + Ret);
