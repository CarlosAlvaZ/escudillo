const imagen = document.querySelector(".imagen");
const hearth = document.querySelector(".hearth")

function startAnimation() {
    hearth.classList.remove('hidden')
    setTimeout( () => { hearth.classList.add('hidden') }, 1000)
}

imagen.addEventListener('click', () => {
    startAnimation()
})

