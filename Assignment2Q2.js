function Summation(Num) {
    var Cnt = 0;
    var Sum = 0;
    for (Cnt = 0; Cnt < Num.length; Cnt++) {
        Sum = Sum + Num[Cnt];
    }
    console.log("Summation is : " + Sum);
}
var Num = [23, 6, 7, 4, 5, 7];
var Sum = 0;
Summation(Num);
