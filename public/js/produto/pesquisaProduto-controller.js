
export default function Pesquisa (listaProdutos,botaoPesquisa, pesquisaD, pesquisa, containers, criaNovaLinha) {
    const containersDescriçao = document.querySelector('[data-secProduto-d]')

    let umaVez = false
    botaoPesquisa.addEventListener('click', async (evento) => {
    evento.preventDefault()
        listaProdutos.forEach (evento => {
        const criarElemento = criaNovaLinha(evento.imageUrl, evento.nome,evento.urlVideo, evento.descricao, evento.id, evento.categoria)
        const inputPesquisa = document.querySelector('#search').value
        const item = evento.nome

        if(inputPesquisa == item && !umaVez){        
            pesquisaD.appendChild(criarElemento)
            pesquisa.style.display = 'flex'
            containers.forEach(container => {
                container.style.display = "none"
            })
            containersDescriçao.style.display = "none"

        }
        })
        umaVez = true  
    })
}