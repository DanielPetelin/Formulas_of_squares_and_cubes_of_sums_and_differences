// Формула квадрата суммы
document.getElementById('for').onclick = function() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var result = Math.pow(num1, 2) + 2 * num1 * num2 + Math.pow(num2, 2);

    document.getElementById('out').innerHTML = result;
};

// Формула квадрата разности
document.getElementById('for2').onclick = function() {
    var num3 = document.getElementById('num3').value;
    var num4 = document.getElementById('num4').value;
    var result = Math.pow(num3, 2) - (2 * num3 * num4) + Math.pow(num4, 2);

    document.getElementById('out2').innerHTML = result;
};

// Формула куба суммы
document.getElementById('for3').onclick = function() {
    var num5 = document.getElementById('num5').value;
    var num6 = document.getElementById('num6').value;
    var result = Math.pow(num5, 3) + (3 * Math.pow(num5, 2) * num6) + (3 * Math.pow(num6, 2) * num5) + Math.pow(num6, 3);

    document.getElementById('out3').innerHTML = result;
};

// Формула куба разности
document.getElementById('for4').onclick = function() {
    var num7 = document.getElementById('num7').value;
    var num8 = document.getElementById('num8').value;
    var result = Math.pow(num7, 3) - (3 * Math.pow(num7, 2) * num8) + (3 * Math.pow(num8, 2) * num7) - Math.pow(num8, 3);

    document.getElementById('out4').innerHTML = result;
};