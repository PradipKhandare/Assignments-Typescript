function Fibonacci (No : number) : void
{
    var Series : number = 0
    var Cnt : number = 2
    var First : number = 0
    var Second : number = 1
    while(Series < No)
    {
            Series = First + Second
            console.log(" "+Series+" ")
            First = Second
            Second = Series
            Cnt++
    }

}

var Numb : number = 21
Fibonacci(Numb)