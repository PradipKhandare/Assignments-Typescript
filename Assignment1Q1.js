function Maximum(No1, No2, No3) {
    if (No1 > No2 && No3) {
        console.log("Maximum Number Is : " + No1);
    }
    else if (No2 > No1 && No3) {
        console.log("Maximum Number Is : " + No2);
    }
    else if (No3 > No1 && No2) {
        console.log("Maximum Number Is : " + No3);
    }
}
var N1 = 23;
var N2 = 89;
var N3 = 6;
var Ret = 0;
Maximum(N1, N2, N3);
