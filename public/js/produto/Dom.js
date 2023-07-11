

const produto = document.querySelector ('[data-produto]') 
const console = document.querySelector ('[data-console]') 
const diverso = document.querySelector ('[data-diverso]')
const containers = document.querySelectorAll ('[data-secProduto]')
const botaoPesquisa = document.querySelector('.lupa__search')
const pesquisa = document.querySelector ('[data-pesquisa]')
const pesquisaD = document.querySelector ('[data-pesquisaD]')
const verProdutosD = document.querySelector ('[data-verProdutoD]')
const verProdutos = document.querySelector ('[data-verProduto]')

const todosStarWars = document.querySelector ('[data-TodosStarWar]')
const todosConsoles = document.querySelector ('[data-TodosConsoles]')
const todosDivesos = document.querySelector ('[data-TodosDiversos]')

const todosConsolesBtn = document.querySelector ('.banner__botao')

const ab = document.querySelectorAll ('.ab')
const bc = document.querySelectorAll ('.bc')
const ac = document.querySelectorAll ('.ac')

export {
    produto,
    console,
    diverso,
    containers,
    botaoPesquisa,
    pesquisa,
    pesquisaD,
    verProdutos,
    verProdutosD,
    todosStarWars,
    todosConsoles,
    todosDivesos, 
    todosConsolesBtn,
    bc,
    ab,
    ac
}