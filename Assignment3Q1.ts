class Arithmetic
{
    Number1 : number;
    Number2 : number;

    constructor(No1 : number, No2 : number)
    {
        this.Number1 = No1
        this.Number2 = No2

    }

    Addition () : number
    {
        var Result : number = 0;           
        Result =  this.Number1 + this.Number2;
        return Result
    }

    Subtraction() : number
    {
       var Result : number = 0;           
        Result =  this.Number1 - this.Number2;
        return Result
    }

    Multiplication() : number 
    {
        var Result : number = 0;           
        Result =  this.Number1 * this.Number2;
        return Result
    }

    Division () : number
    {
        var Result : number = 0;           
        Result =  this.Number1 + this.Number2;
        return  Result
    }
}

var obj = new Arithmetic(4,5);

var Ret : number = 0;
Ret = obj.Addition();
console.log("Addition of given number is : "+Ret)

Ret  = obj.Subtraction();
console.log("subtraction is : "+ Ret);

Ret = obj.Division();
console.log("Division of the number is : "+ Ret);

Ret = obj.Multiplication();
console.log("Multiplication of the numbers is : "+ Ret);
