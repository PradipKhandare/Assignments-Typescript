function Maximum(No1 : number, No2 : number,No3 : number): void
{
    if (No1 > No2 && No3)
    {
        console.log("Maximum Number Is : "+ No1)
    }
    else if(No2 > No1 && No3)
    {
        console.log("Maximum Number Is : "+ No2)
    }
    else if (No3 > No1 && No2)
    {
        console.log("Maximum Number Is : "+ No3)
    }

}

var N1 : number = 23
var N2 : number = 89
var N3 : number = 6

var Ret : number = 0
Maximum(N1, N2, N3)