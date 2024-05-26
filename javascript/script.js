document.getElementById('calculate').addEventListener('click', function () {
    const numero1 = parseFloat(document.getElementById('num1').value);
    // console.log(numero1);
    const numero2 = parseFloat(document.getElementById('num2').value);
    const numero3 = parseFloat(document.getElementById('num3').value);
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || numero3 === 0) {
        document.getElementById('result').textContent = 'Inválido';
        return;
    }
    let resultado = (numero3 * numero2) / numero1;

    if (Number.isInteger(resultado)) { // Para verificar se o número é inteiro
        document.getElementById('result').textContent = resultado;
    }
    else {
        document.getElementById('result').textContent = resultado.toFixed(2).replace('.', ','); // O "toFixed(2)" é para colocar apenas duas casas décimais
    }

});

