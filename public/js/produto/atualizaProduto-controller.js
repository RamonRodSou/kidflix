import { produtoService } from '../service/produto-service.js'


(async () => { 
  const pegaURL = new URL(window.location)
  const id = pegaURL.searchParams.get('id')
  const dados = await produtoService.detalhaProduto(id)

  const inputImg = document.querySelector('[data-img]')
  const inputNome = document.querySelector('[data-produto]')
  const inputValor = document.querySelector('[data-urlVideo]')
  const inputDescricao = document.querySelector('[data-descricao]')

  try { 
    inputImg.value = dados.imageUrl
    inputNome.value = dados.nome
    inputValor.value = dados.urlVideo
    inputDescricao.value = dados.descricao
  }
  catch(erro){
    console.log(erro) 
    window.location.href="../erro.html"
  }

  
  const formulario = document.querySelector('[data-formProduto]')
  
  formulario.addEventListener('submit', async (evento)=> { 
    evento.preventDefault()
    try {
      await produtoService.atualizaProduto(inputImg.value, inputNome.value,inputValor.value, inputDescricao.value, dados.categoria ,id)

      window.location.href = "./edicaoProduto-concluida.html"
    }
    catch(erro){
      console.log(erro)
      window.location.href="../erro.html"
    }
  })
})()
