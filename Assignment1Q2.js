function Area(No, Pi) {
    var Are = 0;
    if (Pi == 3.14) {
        Are = Pi * No * No;
    }
    else {
        Are = Pi * No * No;
    }
    return Are;
}
var Rad = 5;
var Pi = 3.14;
var Ar = 0;
Ar = Area(Rad, Pi);
console.log("The area of circle is : " + Ar);
