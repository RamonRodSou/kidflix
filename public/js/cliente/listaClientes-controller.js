import { clienteService } from '../service/cliente-service.js'

const criaNovaLinha = (nome, email, id, tipo) =>  { 
  const linhaNovoCliente = document.createElement('tr')
  linhaNovoCliente.classList.add('lista__trC')
  const conteudo = `
                  <td class="td" data-td>${nome}</td>
                  <td>${email}</td>
                  <td>
                      <ul class="tabela__botoes">
                          <li><a href="../../public/cliente/editar-cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                          <li><button class="lista__botao botao-simples--excluir" type="button">Excluir</button></li>
                      </ul>
                  </td> 
                  `
  linhaNovoCliente.innerHTML = conteudo
  linhaNovoCliente.dataset.id = id
  linhaNovoCliente.dataset.tipo = tipo
  return linhaNovoCliente
}


const tabela = document.querySelector('[data-tabela]') 

tabela.addEventListener('click', async (evento)=> {
    let ehBotaoDeDeleta = evento.target.className === 'lista__botao botao-simples--excluir'
    if(ehBotaoDeDeleta){
        try {
            const linhaCliente = evento.target.closest('[data-id]')
            let id = linhaCliente.dataset.id
            await clienteService.removeCliente(id)
            linhaCliente.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href="../erro.html"
        }
    }
})


const render = async () =>  {
    try {
        const listaClientes = await clienteService.listaClientes()
        listaClientes.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome,elemento.email, elemento.id, elemento.tipo))
    })
    }
    catch(erro){
        console.log(erro)
        window.location.href="../erro.html"
    }
    
}

render()