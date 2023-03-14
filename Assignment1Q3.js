function DisplayFactor(No) {
    var Fact = 1;
    for (Fact = 1; Fact < 20; Fact++) {
        if (No % Fact == 0) {
            console.log(Fact);
        }
    }
}
var Num = 20;
DisplayFactor(Num);
