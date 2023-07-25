export function DeletaProduto(section, produtoService) {
        section.addEventListener('click', async (evento)=> {
            let ehBotaoDeDeleta = evento.target.className === 'botao__produto--edit botao__produto--excluir'
              if(ehBotaoDeDeleta ){
                  try {

                      const linhaProduto = evento.target.closest('[data-id]')
                      let id = linhaProduto.dataset.id
                      await produtoService.removeProduto(id)
                  }
                  catch(erro){
                      window.location.href="../erro.html"
                  }
              }
        })
        
    }