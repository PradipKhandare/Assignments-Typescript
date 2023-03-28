
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
class CircleX extends Circle
{


    Circumference() : number
    {
        let Cir : number = 0;
        Cir = 2 * this.Pi * this.Radius * this.Radius
        return Cir
    }
}

var obj3 = new CircleX(3)
var obj4 = new CircleX(4)

var RetVal : number = 0;
RetVal = obj3.Circumference();
console.log("Circumference is : "+RetVal)

RetVal = obj4.Circumference();
console.log("Circumference is : "+ RetVal)
