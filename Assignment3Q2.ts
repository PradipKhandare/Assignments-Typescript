class Circle 
{
    Radius: number
    Pi : number
    constructor(Rad : number)
    {
        this.Radius = Rad;
        this.Pi = 3.14;

    }

    Area() : number
    {
        let Area: number = 0
        Area = this.Pi * this.Radius * this.Radius
        return Area
    }

}

var Rad1 : number = 5
var Rad2 : number = 6 

var obj1 = new Circle(Rad1);
var obj2 = new Circle(Rad2);

var Ret : number = 0;
Ret = obj1.Area();
console.log("Area of the circle when radius is = "+Rad1+", "+Ret);
Ret  = obj2.Area();
console.log("Area of the circle when radius is = "+Rad2+", "+Ret);

