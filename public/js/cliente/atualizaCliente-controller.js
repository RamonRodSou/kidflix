import { clienteService } from '../service/cliente-service.js'

  (async () => { 
    const pegaURL = new URL(window.location)
  
    const id = pegaURL.searchParams.get('id')
    
    const inputNome = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector('[data-email]')
    const inputSenha = document.querySelector('[data-senha]')
    const inputData = document.querySelector('[data-data]')
  
    const tipo = 50
    try { 
      const dados = await clienteService.detalhaCliente(id)
      inputNome.value = dados.nome
      inputEmail.value = dados.email
      inputSenha.value = dados.senha
      inputData.value = dados.data
    }
    catch(erro){  
      console.log(erro)
      window.location.href="../erro.html"
    }

    const formulario = document.querySelector('[data-form]')
        
    formulario.addEventListener('submit', async (evento)=> { 
      evento.preventDefault()
      
      try {
        await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value, inputSenha.value, inputData.value, tipo )
        window.location.href = "./edicao-concluida.html"
      }
      catch(erro){
        console.log(erro)
        window.location.href="../erro.html"
      }
      
    })
  })()




