export default function verTodosProdutosSection (botao, sectionNone) {

    botao.onclick = () => {
      sectionNone.forEach(container => {
          container.style.display = "none"
      })
    }
   }