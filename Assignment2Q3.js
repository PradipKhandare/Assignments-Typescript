//Second Maximum Number:
function Maximum(Num) {
    var First = Num[0];
    var Second = Num[0];
    var Cnt = 0;
    for (Cnt = 1; Cnt < Num.length; Cnt++) {
        if (Num[Cnt] > First) {
            First = Num[Cnt];
        }
    }
    for (Cnt = 1; Cnt < Num.length; Cnt++) {
        if (Num[Cnt] > Second && Num[Cnt] != First) {
            Second = Num[Cnt];
        }
    }
    return Second;
}
var Num = [23, 89, 6, 29, 56, 45, 77, 32];
var SecondMax = 0;
SecondMax = Maximum(Num);
console.log("The second Maximum Number IS : " + SecondMax);
