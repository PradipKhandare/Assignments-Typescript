function ChkPrime(Num : number) : Boolean 
{
    var Res : boolean = true
    var Cnt : number = 2
    for(Cnt = 2; Cnt < Num; Cnt++ )
    {
        if(Num % Cnt != 0)
        {
            Res = true
        }
        else{
            Res = false
        }
    }
    return Res
}

var Numb : number = 11

if(ChkPrime(Numb) == true)
{
    console.log("It is a Prime Value")
}
else
{
    console.log("It is not prime")
}
