var forwardＡddGate = function (a,b) {
    return a+b;
};

var forwardMultipGate = function (a,b) {
    return a*b;
};

var forwardCircuit = function (x,y,z) {
    var q = forwardＡddGate(x,y);
    var f = forwardMultipGate(q,z)
    return f;
};

var x = 1, y = 2, z = 3;

var f = forwardCircuit(x,y,z);
console.log("f(x,y,z)=",f)