//Is the given Number is Armstrong Number:-
function ChkArmstrong(Num) {
    //Num = 153
    var FinalNum = Num;
    var Num1 = 0;
    var Rem = 0;
    while (Num > 0) {
        Rem = Num % 10; // Rem = 3
        Num1 = Num1 + (Rem * Rem * Rem);
        Num = Math.floor(Num / 10); //To reduced the floats.Taking help from "Google" .
    }
    if (Num1 == FinalNum) {
        console.log("It is a Armstrong Number");
    }
    else {
        console.log("It is not an Armstrong Number");
    }
}
var Numb = 153;
ChkArmstrong(Numb);
