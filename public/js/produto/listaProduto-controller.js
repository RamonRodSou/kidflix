import { produtoService } from '../service/produto-service.js'
import { ab, ac, bc, botaoPesquisa, console, containers, diverso, pesquisa, pesquisaD, produto, todosConsoles, todosConsolesBtn, todosDivesos, todosStarWars, verProdutos, verProdutosD } from './Dom.js'
import { DeletaProduto } from './deletaProduto-controller.js'
import Pesquisa  from './pesquisaProduto-controller.js'
import VerProdutoDescricao from './verProduto-controller.js'
import verTodosProdutosSection from './verTudo-controller.js'
  


  const criaNovaLinha = (imageUrl, nome, urlVideo, descricao, id, categoria) =>  { 
    const linhaNovoProduto = document.createElement('article')  
          linhaNovoProduto.classList.add('item')
          
  
    const conteudo = `
         <div class="botao__produto">
              <img src="../assets/img/lista/close.png" alt="Botao Excluir" class="botao__produto--edit botao__produto--excluir">
              <a href="./editar-produto.html?id=${id}?categoria=${categoria}" class="botao-simples botao-simples--editar"> 
                  <img src="../assets/img/lista/config.png" alt="Botao Editar" class="botao__produto--config" data-editar> 
              </a>
          </div>
          <img src="${imageUrl}" data-produtoImg alt="Produto ${nome}" class="produto__img">
          <p class="produto__nome" data-produtoNome>${nome}</p>
          <p class="produto__valor" data-produtoValor>R$:${urlVideo}</p>
          <p class="produto__descricao-none" data-ProdutoDescricao>${descricao}</p>
          <a href="./index.html?id=${id}?categoria=${categoria}"  class="produto__produto lista__verProduto" data-id=${id} >Ver produto</a>
                    `
    linhaNovoProduto.innerHTML = conteudo
    linhaNovoProduto.dataset.id = id
  
    return linhaNovoProduto
  }

const listaProdutos = await produtoService.listaProduto()

const render = async () =>  {

  try {
      listaProdutos.forEach(elemento => {
        const criarElemento = criaNovaLinha(elemento.imageUrl, elemento.nome,elemento.urlVideo, elemento.descricao, elemento.id, elemento.categoria)
        if(elemento.categoria == "1"){
          produto.appendChild(criarElemento)
        }
        else if(elemento.categoria == "2"){
          console.appendChild(criarElemento)
        }
        else {
          diverso.appendChild(criarElemento)
        }


    })
  }
  catch(erro){
      console.log(erro)
      window.location.href="../erro.html"
  }
}
render()

  DeletaProduto(produto, produtoService)
  DeletaProduto(console, produtoService)
  DeletaProduto(diverso, produtoService)

  Pesquisa (listaProdutos,botaoPesquisa, pesquisaD, pesquisa, containers,criaNovaLinha)

  VerProdutoDescricao(listaProdutos, verProdutosD, verProdutos, containers)

  verTodosProdutosSection(todosStarWars,bc)
  verTodosProdutosSection(todosDivesos,ab)  
  verTodosProdutosSection(todosConsoles,ac)
  verTodosProdutosSection(todosConsolesBtn,ac)


  


