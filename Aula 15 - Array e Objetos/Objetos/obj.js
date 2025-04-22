// Objeto
let produto = {
    // Chave: "valor",
    nome: "Notebook",
    preco: 3500,
    emEstoque: true
}

// Exibir as informações

console.log(produto);
console.log(produto.nome);
console.log(produto.preco);

// Exibir os valores
console.log(produto["nome"]);
console.log(produto["preco"]);

// Adicionar itens
produto.fabricante = "Dell"
console.log(produto);

// Remover itens
delete produto.emEstoque;
delete [produto.emEstoque]
console.log(produto);

