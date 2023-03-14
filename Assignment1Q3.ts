function  DisplayFactor (No : number)  : void
{
    
    var Fact : number = 1
    for(Fact = 1;Fact < 20; Fact++)
    {
        if(No % Fact == 0)
        {
            console.log(Fact)
        }
    }
}

var Num : number = 20
DisplayFactor(Num)