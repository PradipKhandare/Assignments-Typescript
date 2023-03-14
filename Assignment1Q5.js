function Fibonacci(No) {
    var Series = 0;
    var Cnt = 2;
    var First = 0;
    var Second = 1;
    while (Series < No) {
        Series = First + Second;
        console.log(" " + Series + " ");
        First = Second;
        Second = Series;
        Cnt++;
    }
}
var Numb = 21;
Fibonacci(Numb);
