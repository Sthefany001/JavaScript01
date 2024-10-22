/*console.log('Olá mundo!');*/

var nome = 'Elias'; //string
var sobrenome = 'de Abreu';
var idade = 41; //variável numérica

//console.log(nome,idade);

const i = 41; //const NÃO pode sofrer alteração

var aprovado = false;

//nome = 'Elias de Abreu';
var nomeCompleto = nome + ' ' + sobrenome;
//console.log(`${nome} ${sobrenome}`);

var numero1 = 10;
var numero2 = 20;

/*
+ soma
- subtração 
* multiplicação
/ divisão
% módulo == resto da divisão (ex: 11 % 2 = 1)
** expoente (ex: 3 ** 2 == 3^2=9)
*/

var soma = numero1 + numero2;
var mod = 11 % 2;
var exp = 3 ** 2;
//NaN = errou, aparece -> (ex: 3 ** nome) -> não tem como fazer!

console.log(nomeCompleto);
//console.log(typeof idade);
//console.log(mod);
console.log(exp);

if(exp < 10){
    console.log('Menor que 10');
}
else{
    console.log('Maior que 10');
}

var a = 10;
var b = '10';

//Para difererenciar, mais claro.
if(b.isNaN){
    console.log('Não é número.')
}
else{
    console.log('É número.')
}

/*
VERIFICA
== : Valor
=== : Valor e tipo de dado
*/
/*
if(a === b || a < 10){
    console.log('São iguais');
}
else{
    console.log('Não são iguais');
}
*/

//Operações
console.log('OPERAÇÕES');

var x = 10;
var y = 3;

var somaxy = x + y;
console.log(`A soma é ${somaxy}`);

var subtracaoxy = x - y;
console.log(`A subtração é ${subtracaoxy}`);

var multiplicacaoxy = x * y;
console.log(`A multiplicação é ${multiplicacaoxy}`);

var divisaoxy = x / y;
console.log(`A divisão é ${divisaoxy}`);

var moduloxy = x % y;
console.log(`O módulo é ${moduloxy}`);

var expoentexy = x ** y;
console.log(`O expoente é ${expoentexy}`);