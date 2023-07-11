import { clienteService } from '../service/cliente-service.js'
const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value
    const senha = evento.target.querySelector('[data-senha]').value
    const data = evento.target.querySelector('[data-data]').value
    const tipo = 50
    
    fetch('../../db.json').then((response) => {
      response.json().then((db) => {
        const usuarioCargo = db.profile.find(evento => evento.email === email)
        window.console.log(usuarioCargo)
        if(usuarioCargo){
          alert('Esse Email ja esta cadastrado')
        }
        else {
          clienteService.criaCliente(nome, email, senha, data, tipo)
          window.location.href = './cadastro-concluido.html'
        }
     })
    })
  }


  catch (erro) {
    console.log(erro)
    window.location.href = "../erro.html"
  }
})
