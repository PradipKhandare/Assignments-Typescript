function Summation(Num : number[]) : void
{
    var Cnt : number = 0
    var Sum : number =  0
    for(Cnt = 0; Cnt < Num.length; Cnt++)
    {
        Sum = Sum + Num[Cnt]
    }

    console.log("Summation is : "+ Sum)

}

var Num : number [] = [23, 6, 7, 4, 5, 7]
var Sum : number = 0
Summation(Num)

