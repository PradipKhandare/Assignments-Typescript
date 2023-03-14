function Maximum(Numb : number[]) : number
{

    var MaxValue : number = Numb[0]
    var Cnt : number = 0
    for(Cnt = 1 ; Cnt < Numb.length ; Cnt++)
    {
        if(Numb[Cnt] > MaxValue)
        {
            MaxValue = Numb[Cnt]
        }

    }
    return MaxValue
}
var MaxNum : number = 0
var Num : number[] = [23, 89, 6, 29, 56, 45, 77, 32]// Max number is Num[1] = 89
MaxNum = Maximum(Num)
console.log("The Maximum Number Is : "+MaxNum)

