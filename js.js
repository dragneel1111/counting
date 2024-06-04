function calculate(operation) {
    var inputN = parseInt(document.getElementById('inputN').value);
    var inputR = parseInt(document.getElementById('inputR').value);
    var resultArea = document.getElementById('resultArea');
    var result;

    switch (operation) {
        case 'permutation':
            result = permutation(inputN, inputR);
            resultArea.innerText = "Permutasi P(" + inputN + ", " + inputR + ") adalah: " + result;
            break;
        case 'combination':
            result = combination(inputN, inputR);
            resultArea.innerText = "Kombinasi C(" + inputN + ", " + inputR + ") adalah: " + result;
            break;
        default:
            resultArea.innerText = "Operasi tidak valid.";
    }
}

function factorial(n) {
    if (n === 0) return 1;
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function permutation(n, r) {
    if (r > n) return 0;
    return factorial(n) / factorial(n - r);
}

function combination(n, r) {
    if (r > n) return 0;
    return factorial(n) / (factorial(r) * factorial(n - r));
}
