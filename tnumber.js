let Tnumber = alert ("Calculate two numbers");

function myMult() {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    document.getElementById('Result').innerHTML=(a*b);
}

function myDiv() {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    document.getElementById('Result').innerHTML=(a/b);
}