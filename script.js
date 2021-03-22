var entrada = document.getElementById('input');

var paragrafo = document.getElementById('texts');

document.getElementById('salvar').addEventListener9('click', function(){
    localStorage.input = entrada.value;

    mostrar.innerText = localStorage.input;
});