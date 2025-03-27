
// getElementsByTagName - Seleciona todas as tags que você desejar.
let paragrafos = document.getElementsByTagName("p")
paragrafos[0].innerHTML = "Palmeiras não tem mundial."



// getElementById - Seleciona um elemento do tipo ID
var titulo = document.getElementById("titulo")
titulo.innerHTML = "Hoje tem gol do Yuri Alberto."

// getElementByClassName - Seleciona todos os elementos do tipo class
const caixas = document.getElementsByClassName("caixa")
caixas[0].style.backgroundColor = "orange"
caixas[1].style.backgroundColor = "yellowgreen"

function alterarTexto() {
    let input = document.getElementsByTagName("input")[0].value

    titulo.innerHTML = input
}

// querySelector - Seleciona um elemento do tipo class ou ID
let paragrafoQuery = document.querySelector("#paragrafoQuery")
paragrafoQuery.style.backgroundColor = "magenta"
paragrafoQuery.style.padding = "50px"

// Criando uma nova função que altera um novo input
function alterarQuery() {
    let paragrafoQuery = document.querySelector("#paragrafoQuery")
    let input = document.getElementsByTagName("input")[1].value
    paragrafoQuery.innerHTML = input
}

// querySelectorAll - Seleciona todos os elementos do tipo class ou Id
const caixaQuery = document.querySelectorAll(".caixaQuery")

caixaQuery[0].style.backgroundColor = 'purple'
caixaQuery[1].style.backgroundColor = 'black'
caixaQuery[1].style.color = 'yellowgreen'



