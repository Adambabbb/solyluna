function mostrar(x, y, z, t, a) {
    // Oculta todos los demás elementos
    document.getElementById(a).style.display = "none";
    document.getElementById(y).style.display = "none";
    document.getElementById(z).style.display = "none";
    document.getElementById(t).style.display = "none";
    
    // Muestra el elemento deseado
    document.getElementById(x).style.display = "block";

    // Anima el elemento mostrado
    animateDiv(`#${x}`, 'slideInUp');
}

function ocultar(x) {
    document.getElementById(x).style.display = "none";
}

const animateCSS = (element, animation, prefix = 'animate__') =>
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

function animateDiv(selector, animation) {
    animateCSS(selector, animation)
}

const audios = document.querySelectorAll('audio');

  document.addEventListener('DOMContentLoaded', function() {
            // Obtener todos los elementos de audio
            const audios = document.querySelectorAll('audio');

            audios.forEach(audio => {
                audio.addEventListener('play', () => {
                    // Pausar todos los demás audios
                    audios.forEach(otherAudio => {
                        if (otherAudio !== audio) {
                            otherAudio.pause();
                        }
                    });
                });
            });
        });

        