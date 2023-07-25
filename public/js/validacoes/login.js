const login = document.querySelector('[data-login]')
  login.addEventListener('click', () => {
    const email = document.querySelector('[data-email]').value
    const senha = document.querySelector('[data-senha]').value
    fetch('../db.json').then((response) => {
      response.json().then((db) => {
        const usuarioCargo = db.profile.find(usuario => usuario.email === email && usuario.senha === senha && usuario.tipo === 1320);
        const usuarioEncontrado = db.profile.find(usuario => usuario.email === email && usuario.senha === senha);
      
      if (usuarioCargo) {
        window.location.href = './perfil-adm.html'

        }else if(usuarioEncontrado) {
          window.location.href = './perfil-adm.html'
          //Aqui pode direcionar outro endereço caso o Usuario não tenha permissão de admin 
          //window.location.href = '../public/index.html'

        }else{

          alert('Email ou Senha incorreto! Por favor coloque um login valido')
        } 
      
    })
  })
});
