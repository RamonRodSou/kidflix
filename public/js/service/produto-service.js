const listaProduto = () =>  {
    return fetch(`http://localhost:3000/produto`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os produto')
    })
}

const criaProduto = (imageUrl, nome, urlVideo, descricao, categoria) => { 
    return fetch(`http://localhost:3000/produto`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            imageUrl: imageUrl,
            nome: nome,
            urlVideo: urlVideo,
            descricao: descricao,
            categoria:categoria
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um produto')
    })
}

const removeProduto = (id) => { 
    return fetch(`http://localhost:3000/produto/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar um produto')
        }
    })
}
 
const detalhaProduto = (id) => {  
    return fetch(`http://localhost:3000/produto/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
    
        throw new Error('Não foi possível detalhar um produto')
    })
}

const atualizaProduto = (imageUrl, nome, urlVideo, descricao, categoria, id) => {
    return fetch(`http://localhost:3000/produto/${id}/${categoria}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            imageUrl: imageUrl,
            nome: nome, 
            urlVideo: urlVideo,
            descricao: descricao,
            categoria: categoria
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um produto')
    })
}



export const produtoService = { 
    listaProduto,
    criaProduto, 
    removeProduto,
    detalhaProduto,
    atualizaProduto
}
