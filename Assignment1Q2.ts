function Area(No : number, Pi : number) : number
{
    var Are : number = 0
    if(Pi == 3.14)
    {
        Are = Pi * No * No
    }
    else 
    {
        Are = Pi * No * No
    }
    return Are
}

var Rad : number = 5
var Pi : number = 3.14
var AreaOfCircle : number = 0
AreaOfCircle = Area(Rad, Pi)
console.log("The area of circle is : "+ AreaOfCircle)

