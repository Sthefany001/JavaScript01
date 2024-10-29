//window.alert("Exemplo");

function Somar(){
    var n1 = parseFloat(document.getElementById('texto1').value);
    var n2 = parseFloat(document.getElementById('texto2').value);
    soma = n1 + n2;
    var res = document.getElementById('resultado');
    res.innerHTML = "O resultado é " + soma;
    return soma;
}
