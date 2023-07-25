/* ---------- Menu para Celular------------*/

const btnMobile = document.getElementById ("mobile__btn");
function toggleMenu () {  //toggle
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("mobile__menu");
         nav.classList.toggle("active");
    const active = nav.classList.contains ("active");
            event.currentTarget.setAttribute("aria-expanded", active);
            
    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    }
    else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);  //responde mais rápido no mobile

/* ---------- Efeito de Scrool ------------*/


const debounce = function(func, wait, immediate) {

    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            
            if (!immediate) func.apply(context, args);
        }
        
        const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
                
            if (callNow) func.apply(context, args);
    }
}


const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeSection () {

    const windowTop = window.pageYOffset + ((window.innerHeight *3) / 4); 
      target.forEach (function (elemento) {
        
        if ((windowTop) > elemento.offsetTop) {

            elemento.classList.add(animationClass);
        }
        else {

            elemento.classList.remove(animationClass);
        }
    })
}

animeSection();

if(target.length) {
    window.addEventListener("scroll" , debounce(function() {

        animeSection();
    }, 100))
}
