const listaProduto = () =>  {
    return fetch(`http://localhost:3001/produto`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os produto')
    })
}

const criaProduto = (name, img, video, descricao, categoria) => { 
    return fetch(`http://localhost:3001/produto`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: name,
            img: img,
            video: video,
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
    return fetch(`http://localhost:3001/produto/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar um produto')
        }
    })
}
 
const detalhaProduto = (id) => {  
    return fetch(`http://localhost:3001/produto/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
    
        throw new Error('Não foi possível detalhar um produto')
    })
}

const atualizaProduto = (name, img, video, descricao, categoria, id) => {
    return fetch(`http://localhost:3001/produto/${id}/${categoria}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            name: name,
            img: img,
            video: video,
            descricao: descricao,
            categoria:categoria
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
