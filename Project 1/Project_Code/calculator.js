function adder() {
    var in1 =document.getElementById("num1").value;
    var num1 = parseFloat(in1);
    var in2 =document.getElementById("num2").value;
    var num2=parseFloat(in2);
    var num3 = num1+num2;
    document.getElementById("answers").innerHTML=num3;
    document.getElementById("num3").value=num3;

}
function subtracter() {
    var in1 =document.getElementById("num1").value;
    var num1 = parseFloat(in1);
    var in2 =document.getElementById("num2").value;
    var num2=parseFloat(in2);
    var num3 = num1-num2;
    document.getElementById("answers").innerHTML=num3;
    document.getElementById("num3").value=num3;

}
function multiplier() {
    var in1 =document.getElementById("num1").value;
    var num1 = parseFloat(in1);
    var in2 =document.getElementById("num2").value;
    var num2=parseFloat(in2);
    var num3 = num1*num2;
    document.getElementById("answers").innerHTML=num3;
    document.getElementById("num3").value=num3;

}
function divider() {
    var in1 =document.getElementById("num1").value;
    var num1 = parseFloat(in1);
    var in2 =document.getElementById("num2").value;
    var num2=parseFloat(in2);
    if (num2 != 0) {
        var num3 = num1/num2;
    }else {
        alert("Cannot Divide by 0!")
    }
    document.getElementById("answers").innerHTML=num3;
    document.getElementById("num3").value=num3;

}
function powerf1() {
    var in1 =document.getElementById("num1").value;
    var num1 = parseFloat(in1);
    var in2 =document.getElementById("num2").value;
    var num2=parseFloat(in2);
    var num3 = Math.pow(num1,num2);
    document.getElementById("answers").innerHTML=num3;
    document.getElementById("num3").value=num3;

}
function rootf() {
    var in1 =document.getElementById("num1").value;
    var num1 = parseFloat(in1);
    var in2 =document.getElementById("num2").value;
    var num2=parseFloat(in2);
    var num3 = Math.pow(num1, (1/num2));
    document.getElementById("answers").innerHTML=num3;
    document.getElementById("num3").value=num3;

}
function copyNum1() {
    var in1 =document.getElementById("num3").value;
    var num1 = parseFloat(in1);
    document.getElementById("num1").value=num1;
}
function copyNum2() {
    var in1 =document.getElementById("num3").value;
    var num2 = parseFloat(in1);
    document.getElementById("num2").value=num2;
}