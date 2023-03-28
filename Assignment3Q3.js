var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        var Cir = 0;
        Cir = 2 * this.Pi * this.Radius * this.Radius;
        return Cir;
    };
    return CircleX;
}(Circle));
var obj3 = new CircleX(3);
var obj4 = new CircleX(4);
var RetVal = 0;
RetVal = obj3.Circumference();
console.log("Circumference is : " + RetVal);
RetVal = obj4.Circumference();
console.log("Circumference is : " + RetVal);
