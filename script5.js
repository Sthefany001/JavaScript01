/*
function MostrarTexto(){//pop up
    var textoCpf = document.getElementById('cpf').value;//QUESTAO 4 DA PROVA! //pega valor de um elemento pelo id
    //var texto1 = document.querySelector('.form-control').value; //classe
    //var texto2 = document.querySelector('#cpf').value; //id
    //var texto3 = document.querySelector('button').value; //elemento html

    alert(textoCpf);
}

document.addEventListener('click',MostrarTexto()); //quando clicar em qualquer lugar da tela chama MostrarTexto
*/

window.addEventListener('load', function(){//carregar javascript dps de carregar todo html //load =  DEPOIS das imagens videos e css // DOMContent
    MascaraCPF();
    MascaraTel();
})

document.addEventListener('DOMContentLoaded', function(){//carregar javascript dps de carregar todo html //DOMContentLoaded = ANTES das imagens videos e documentos externos
    MascaraCPF();
    MascaraTel();
})

function MascaraCPF(){
    var cpfMascara = IMask(
        document.getElementById("cpf"), {
            mask: '000.000.000-00', //0 significa qualquer digito de 0 a 9
        });
}

function MascaraTel(){
    var telMascara = IMask(
        document.getElementById("tel"), {
            mask: '(00) 00000-0000', //0 significa qualquer digito de 0 a 9
        });
}

const btn = document.querySelector('button'); //selecionando todos botoes
btn.style.color = 'red';//vai cair na prova //testando se esta funcionando

//btn.addEventListener('click', MostrarTexto()); //mesma coisa que esta em baixo 

btn.addEventListener('click', function(){ //criando uma função dentro do parametro
    var cpf = document.getElementById('cpf').value;
    var tel = document.getElementById('tel').value;
    alert(cpf);
    alert(tel);
});

 