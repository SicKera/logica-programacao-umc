// Switch Case - Menu
// if

// Metodos de paganento
// 1 - pix 10% de desconto
// 2 - debito 5% de desconto
// 3 - credito - valor total

    function calcularPagamento(){

        
        let formaPagamento = document.querySelector("#formaPagamento").value
        let valorTotal = parseFloat( document.querySelector("#valorCompra").value)
        console.log (formaPagamento, valorTotal);
        let valorFinal
        let resultado = document.querySelector("#resultado")
        
        switch(formaPagamento) {
            case "pix":
                valorFinal = valorTotal * 0.9
                resultado.innerHTML = `Valor final foi de R$ ${valorFinal.toFixed(2)}`
                break
                
                case "debito":
                    valorFinal = valorTotal *0.95
                    resultado.innerHTML = `Valor final foi de R$ ${valorFinal.toFixed(2)}`
                    break
                    
                    case "credito":
                        resultado.innerHTML = `Valor final foi de R$ ${valorTotal.toFixed(2)}`;
                        break
                        
                        default:
                            resultado.innerHTML = "informe o forma de pagamento válida";
                            break
                        }
                        
                    }
                    