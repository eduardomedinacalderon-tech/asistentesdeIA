// FORMULARIO DE CONTACTO

const formulario = document.getElementById("formulario");

if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Gracias por tu mensaje. Se ha enviado correctamente.");

        formulario.reset();
    });
}


// EFECTO CONFETI

const canvas = document.getElementById("confeti");

if (canvas) {

    const ctx = canvas.getContext("2d");

    let confetis = [];
    let animacion = null;
    let tiempoConfeti = null;

    function ajustarCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    ajustarCanvas();

    function crearConfeti() {

        confetis = [];

        for (let i = 0; i < 180; i++) {

            confetis.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                tamaño: Math.random() * 9 + 4,
                velocidadY: Math.random() * 5 + 2,
                velocidadX: Math.random() * 3 - 1.5,
                rotacion: Math.random() * 360,
                color: `hsl(${Math.random() * 360},100%,55%)`
            });

        }
    }

    function dibujarConfeti() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetis.forEach(function (c) {

            ctx.save();

            ctx.translate(c.x, c.y);
            ctx.rotate(c.rotacion * Math.PI / 180);

            ctx.fillStyle = c.color;
            ctx.fillRect(
                -c.tamaño / 2,
                -c.tamaño / 2,
                c.tamaño,
                c.tamaño
            );

            ctx.restore();

            c.y += c.velocidadY;
            c.x += c.velocidadX;
            c.rotacion += 5;

            if (c.y > canvas.height) {
                c.y = -20;
                c.x = Math.random() * canvas.width;
            }

        });
    }

    function animarConfeti() {
        dibujarConfeti();
        animacion = requestAnimationFrame(animarConfeti);
    }

    window.lanzarConfeti = function () {

        if (animacion) {
            cancelAnimationFrame(animacion);
        }

        if (tiempoConfeti) {
            clearTimeout(tiempoConfeti);
        }

        crearConfeti();
        animarConfeti();

        tiempoConfeti = setTimeout(function () {

            cancelAnimationFrame(animacion);

            animacion = null;
            tiempoConfeti = null;

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

        }, 4000);
    };

    window.addEventListener("resize", ajustarCanvas);
}


// ANIMACIÓN DE ENTRADA

const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach(function (tarjeta, index) {

    tarjeta.style.opacity = "0";
    tarjeta.style.transform = "translateY(30px)";

    setTimeout(function () {

        tarjeta.style.transition = "0.6s";
        tarjeta.style.opacity = "1";
        tarjeta.style.transform = "translateY(0)";

    }, index * 120);

});


// NAVEGACIÓN SUAVE A SECCIONES

document.querySelectorAll('a[href^="#"]').forEach(function(enlace){

    enlace.addEventListener("click", function(e){

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

            destino.style.transition = "0.5s";
            destino.style.boxShadow =
            "0 0 35px rgba(56,189,248,.8)";

            setTimeout(function(){

                destino.style.boxShadow = "";

            },1500);

        }

    });

});


// MENSAJE EN CONSOLA

window.addEventListener("load", function () {

    console.log(
        "Página cargada correctamente"
    );

});