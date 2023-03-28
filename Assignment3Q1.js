var Arithmetic = /** @class */ (function () {
    function Arithmetic(No1, No2) {
        this.Number1 = No1;
        this.Number2 = No2;
    }
    Arithmetic.prototype.Addition = function () {
        var Result = 0;
        Result = this.Number1 + this.Number2;
        return Result;
    };
    Arithmetic.prototype.Subtraction = function () {
        var Result = 0;
        Result = this.Number1 - this.Number2;
        return Result;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Result = 0;
        Result = this.Number1 * this.Number2;
        return Result;
    };
    Arithmetic.prototype.Division = function () {
        var Result = 0;
        Result = this.Number1 + this.Number2;
        return Result;
    };
    return Arithmetic;
}());
var obj = new Arithmetic(4, 5);
var Ret = 0;
Ret = obj.Addition();
console.log("Addition of given number is : " + Ret);
Ret = obj.Subtraction();
console.log("subtraction is : " + Ret);
Ret = obj.Division();
console.log("Division of the number is : " + Ret);
Ret = obj.Multiplication();
console.log("Multiplication of the numbers is : " + Ret);
