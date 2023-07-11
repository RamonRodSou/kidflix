export default function VerProdutoDescricao (listaProdutos, verProdutosD, verProdutos, containers,criaNovaLinha) {

    const verProdutoBtn = document.querySelectorAll('.produto__produto')
    for (let i = 0; i < verProdutoBtn.length; i++) {
      verProdutoBtn[i].addEventListener("click", (evento) => {
        evento.preventDefault()
          const produto = evento.target.closest('[data-id]')
              let id = produto.dataset.id
              listaProdutos.map (evento => {
                const criarElemento = criarVerProduto(evento.imageUrl, evento.nome, evento.urlVideo, evento.descricao, evento.id, evento.categoria)      
                const item = evento.id
                if(id == item){
                    verProdutosD.appendChild(criarElemento)
                    verProdutos.style.display = 'flex'

                    containers.forEach(container => {
                      container.style.display = "none"
                  })}
              })
       })
    }
}

const criarVerProduto = (imageUrl, nome, urlVideo, descricao, id, categoria) =>  { 
  const linhaNovoProduto = document.createElement('article')  
        linhaNovoProduto.classList.add('item__Article--produto')
        
  const conteudo = `
    <div class="item__VerProduto">
       <div class="botao__produto">
            <img src="../../../assets/img/lista/close.png" alt="Botao Excluir" class="botao__produto--edit botao__produto--excluir">
            <a href="./editar-produto.html?id=${id}?categoria=${categoria}" class="botao-simples botao-simples--editar"> 
                <img src="../../../assets/img/lista/config.png" alt="Botao Editar" class="botao__produto--config" data-editar> 
            </a>
        </div>
        <img src="${imageUrl}" data-produtoImg alt="Produto ${nome}" class="produto__img-produto">
        <p class="produto__nome" data-produtoNome>${nome}</p>
        <p class="produto__valor" data-produtoValor>R$:${urlVideo}</p>
        <a href="./index.html" class="produto__produto" >Voltar</a>
    </div>
    <p class="produto__descricao" data-ProdutoDescricao>${descricao}</p>
      `
        
  linhaNovoProduto.innerHTML = conteudo 
  linhaNovoProduto.dataset.id = id

  return linhaNovoProduto
}