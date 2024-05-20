function sum() {
    var s = 0;
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i];

    }
    console.log(s)
    return s;
}  

sum(1,2,7)
sum(1,4)
sum(11)
sum(10,3,6,7,8)