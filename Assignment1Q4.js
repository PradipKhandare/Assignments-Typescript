function ChkPrime(Num) {
    var Res = true;
    var Cnt = 2;
    for (Cnt = 2; Cnt < Num; Cnt++) {
        if (Num % Cnt != 0) {
            Res = true;
        }
        else {
            Res = false;
        }
    }
    return Res;
}
var Numb = 11;
if (ChkPrime(Numb) == true) {
    console.log("It is a Prime Value");
}
else {
    console.log("It is not prime");
}
