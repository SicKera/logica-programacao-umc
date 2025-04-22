let produtos = [
    {nome: "Teclado", categoria: "Periférico", preco: 200},
    {nome: "Mouse", categoria: "Periférico", preco: 300},
    {nome: "Computador", categoria: "Eletronico", preco: 5200},
    {nome: "Monitor", categoria: "Eletronico", preco: 2200}
]

// Lista de Produtos
// Percorrer um array
produtos.forEach((produto) => {
    console.log(produto.nome + " - " + " R$ " + produto.preco);
})

// Fazer cálculos de itens dentro de um array
const total = produtos.reduce((soma, produto) => soma + produto.preco, 0)
console.log(`O valor total de todos os produtos é de R$ ${total}`);

// Função de desconto utilizando MAP
const produtosComDesconto = produtos.map( produto => ({
    nome: produto.nome,
    preco: produto.preco * 0.9
}))

console.log(produtosComDesconto);

// Filtrando itens
const produtosPerifericos = produtos.filter( produto => produto.categoria === "Periférico")
const produtosEletronicos = produtos.filter(produto => produto.categoria === "Eletronico")

//  Criação do desconto
const descPerifericos = produtosPerifericos.map( produto => ({
    categoria: produto.categoria,
    preco: produto.preco * 0.95
}))

const descEletronicos = produtosEletronicos.map( produto => ({
    categoria: produto.categoria,
    preco: produto.preco * 0.90
}))

// Soma o total dos produtos
const somaProdutosEletronicos = descEletronicos.reduce((soma, produto) => soma + produto.preco, 0)

const somaProdutosPerifericos = descPerifericos.reduce((soma, produto) => soma + produto.preco, 0)

// Mostrando os resultado no console
console.log(descPerifericos);
console.log(`A Soma dos produtos é de R$ ${somaProdutosPerifericos}`);

console.log(descEletronicos);
console.log(`A soma dos produtos é de R$ ${somaProdutosEletronicos}`);










