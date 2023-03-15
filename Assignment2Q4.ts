//Is the given Number is Armstrong Number:-

function ChkArmstrong(Num : number) : void
{
    //Num = 153
    var FinalNum : number = Num
    var Num1 : number = 0
    var Rem : number = 0
    while (Num > 0)
    {
        Rem = Num % 10 // Rem = 3
        Num1 = Num1 + (Rem * Rem * Rem)
        Num = Math.floor(Num/10)  //To reduced the floats.Taking help from "Google" .
    }
    if(Num1 == FinalNum)
    {
    console.log("It is a Armstrong Number") 
    }
    else{
        console.log("It is not an Armstrong Number")
    }  

}

var Numb : number = 153
ChkArmstrong(Numb)


