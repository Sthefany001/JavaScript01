var idade = 10;

if(idade < 18){
    console.log('Menor de idade.');
}
else if(idade >= 18 && idade <= 60){
    console.log('Adulto.');
}
else if(idade > 60 && idade < 70){
    console.log('Terceira idade, não aposentado.');
}
else if(idade > 70){
    console.log('Terceira idade, aposentado.');
}
else{
    console.log('Não é idade.');
}

function areaQuadrado(lado){
    area = lado * lado;
    return area;
}

var r = areaQuadrado(10);
console.log(r);

function calculoImc(peso, altura){
    imc = peso / (altura * altura);
    return imc;
}

var a = calculoImc(60, 1.60);
console.log(a);

/*for*/
for(var i = 0; i < 10; i++){ /*i+=2*/
    console.log(i);
}
 
/*laço de repetição*/
var n = 0;
while(n > 10){
    console.log(n);
    n++;
}