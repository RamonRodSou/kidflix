import { produtoService } from '../service/produto-service.js'

const formulario = document.querySelector('[data-formProduto]')

 formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const img = evento.target.querySelector('[data-img]').value
    const nome = evento.target.querySelector('[data-nome]').value
    const urlVideo = evento.target.querySelector('[data-urlVideo]').value
    const descricao = evento.target.querySelector('[data-descricao]').value
    const categoria = document.querySelector('input[name="categoria"]:checked').value;

    await produtoService.criaProduto(img, nome, urlVideo, descricao, categoria)
    window.location.href = './cadastroProduto-concluida.html' 

  }
  catch (erro) { 
    console.log(erro)
    window.location.href = "../erro.html"
  }
})

