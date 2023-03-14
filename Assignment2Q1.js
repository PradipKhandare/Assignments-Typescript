function Maximum(Numb) {
    var MaxValue = Numb[0];
    var Cnt = 0;
    for (Cnt = 1; Cnt < Numb.length; Cnt++) {
        if (Numb[Cnt] > MaxValue) {
            MaxValue = Numb[Cnt];
        }
    }
    return MaxValue;
}
var MaxNum = 0;
var Num = [23, 89, 6, 29, 56, 45, 77, 32]; // Max number is Num[1] = 89
MaxNum = Maximum(Num);
console.log("The Maximum Number Is : " + MaxNum);
