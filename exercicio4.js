//window.alert("Exemplo");

function VelocidadeAntesFrenagem(){
    var dF = parseFloat(document.getElementById('distanciaFrenagem').value);
    var cF = parseFloat(document.getElementById('coeficienteAtrito').value);
    velocidadeA = 15.946 * Math.sqrt (dF * cF);
    var res = document.getElementById('resultado');

    var velocidadeP = parseFloat(document.getElementById('velocidadePermitida').value);
    var res2 = document.getElementById('resultado2');

    if(velocidadeA <= velocidadeP){
        res2.innerHTML = "Velocidade permitida!";
        res2.style.color = 'green';
    }
    else{
        res2.innerHTML = "Velocidade NÃO permitida!";
        res2.style.color = 'red';
    }

    res.innerHTML = "O resultado é: " + velocidadeA + "km/h";

    res.style.color = 'blue';
    res.style.fontSize = '20px';

    //return velocidadeA;
}