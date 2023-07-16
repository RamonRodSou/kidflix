const listaCategoria = () =>  {
    return fetch(`http://localhost:3000/categoria`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar as categorias')
    })
}

const criaCategoria = (name) => { 
    return fetch(`http://localhost:3000/categoria`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: name,
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar uma categoria')
    })
}

const removeCategoria = (id) => { 
    return fetch(`http://localhost:3000/categoria/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar uma categoria')
        }
    })
}
 
const detalhaCategoria = (id) => {  
    return fetch(`http://localhost:3000/categoria/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
    
        throw new Error('Não foi possível detalhar uma categoria')
    })
}

const atualizaCategoria = (name, id) => {
    return fetch(`http://localhost:3000/categoria/${id}/${name}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            name: name,

        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar uma categoria')
    })
}



export const produtoService = { 
    listaCategoria,
    criaCategoria, 
    removeCategoria,
    detalhaCategoria,
    atualizaCategoria
}
