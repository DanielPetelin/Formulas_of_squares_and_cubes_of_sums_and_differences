document.getElementById('for').onclick = function() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = Math.pow(num1, 2) + 2 * num1 * num2 + Math.pow(num2, 2);

    document.getElementById('out').innerHTML = result;
};

document.getElementById('for2').onclick = function() {
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var result = Math.pow(num3, 2) - (2 * num3 * num4) + Math.pow(num4, 2);

    document.getElementById('out2').innerHTML = result;
};