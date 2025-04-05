
function verificarLogin() {




let usuario = document.querySelector("#usuario").value
let senha = document.querySelector("#senha").value
let mensagem = document.querySelector("#mensagem")

// console.log(usuario, senha)
if  (usuario !="airton" || senha !="xboxlive") {
    mensagem.innerHTML = `Login ou senha incorretos!!!`

}
else  {
    mensagem.innerHTML = `Login efetuado com sucesso!!!`
}
}
