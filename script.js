
/* =========================================
   1. ELEMENTOS HTML
========================================= */

const openButton = document.getElementById("openButton");

const coverScreen = document.getElementById("coverScreen");

const letterScreen = document.getElementById("letterScreen");

const musicAudio = document.getElementById("musicAudio");

const playButton = document.getElementById("playButton");

const pauseButton = document.getElementById("pauseButton");


/* =========================================
   2. ABRIR LA CARTA
========================================= */

openButton.addEventListener("click", function () {

    // Evitar abrir varias veces
    if (!letterScreen.classList.contains("hidden")) {
        return;
    }

    // Animación del sobre
    const envelopeFlap = document.querySelector(".envelope-flap");

    const envelopeLetter = document.querySelector(".envelope-letter");

    envelopeFlap.style.transform = "rotateX(180deg)";

    envelopeLetter.style.transform = "translateY(-90px)";

    // Cambiar el texto del botón
    openButton.textContent = "Abriendo tu carta... ❤️";

    // Esperar para mostrar la carta
    setTimeout(function () {

        coverScreen.classList.add("hidden");

        letterScreen.classList.remove("hidden");

        // Llevar al inicio de la carta
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1100);

});


/* =========================================
   3. REPRODUCIR LA CANCIÓN
========================================= */

playButton.addEventListener("click", function () {

    musicAudio.play()
        .then(function () {

            playButton.textContent = "▶ Reproduciendo...";

            playButton.disabled = true;

            pauseButton.disabled = false;

        })
        .catch(function (error) {

            console.error("Error al reproducir la canción:", error);

            alert(
                "No se pudo reproducir la canción. Comprueba que el archivo san-lucas.mp3 esté dentro de la carpeta music."
            );

        });

});


/* =========================================
   4. PAUSAR LA CANCIÓN
========================================= */

pauseButton.addEventListener("click", function () {

    musicAudio.pause();

    playButton.textContent = "▶ Reanudar canción";

    playButton.disabled = false;

});


/* =========================================
   5. CUANDO TERMINA LA CANCIÓN
========================================= */

musicAudio.addEventListener("ended", function () {

    playButton.textContent = "▶ Reproducir nuevamente";

    playButton.disabled = false;

    pauseButton.disabled = false;

});


/* =========================================
   6. CONTROL DE ERRORES DE AUDIO
========================================= */

musicAudio.addEventListener("error", function () {

    console.error(
        "No se pudo cargar el archivo de música."
    );

    playButton.textContent = "▶ Intentar nuevamente";

});


/* =========================================
   7. EFECTO DE CORAZONES
========================================= */

function createFloatingHeart() {

    const heart = document.createElement("span");

    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

    heart.classList.add("floating-heart");

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize = (Math.random() * 15 + 15) + "px";

    heart.style.color = "#b52b46";

    heart.style.opacity = "0.7";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "1000";

    heart.style.transition = "transform 6s linear, opacity 6s linear";

    document.body.appendChild(heart);

    setTimeout(function () {

        heart.style.transform = "translateY(-110vh) rotate(360deg)";

        heart.style.opacity = "0";

    }, 100);

    setTimeout(function () {

        heart.remove();

    }, 6200);

}


/* =========================================
   8. ACTIVAR CORAZONES AL ABRIR LA CARTA
========================================= */

let heartInterval;

openButton.addEventListener("click", function () {

    if (heartInterval) {
        return;
    }

    heartInterval = setInterval(function () {

        createFloatingHeart();

    }, 900);

});


/* =========================================
   9. MENSAJE EN CONSOLA
========================================= */

console.log("Carta especial para Ashley cargada correctamente 🌹");
console.log("Hecha con mucho cariño ❤️");