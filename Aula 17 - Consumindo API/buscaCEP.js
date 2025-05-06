// Consumir API dos Correios

// https://viacep.com.br/ws/08717340/json/


const cep = document.querySelector("#cep")

cep.addEventListener("change", (evento)  => {
    let cepUsuario = evento.target
    console.log(cepUsuario.value);
    buscaCep(cepUsuario);
})


 async function buscaCep(cep){
    let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    console.log(consultaCep);

    let consultaCepJson = await consultaCep.json()
    console.log(consultaCepJson);
    console.log(consultaCepJson.erro);
}

