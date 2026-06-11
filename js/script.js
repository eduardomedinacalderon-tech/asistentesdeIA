// FORMULARIO DE CONTACTO

const formulario = document.getElementById("formulario");

if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Gracias por tu mensaje. Se ha enviado correctamente.");
        formulario.reset();
    });
}


// BUSCADOR DE IA

const buscarIA = document.getElementById("buscarIA");

if (buscarIA) {
    buscarIA.addEventListener("keyup", function () {
        const texto = buscarIA.value.toLowerCase();
        const tarjetas = document.querySelectorAll(".tarjeta");

        tarjetas.forEach(function (tarjeta) {
            const nombre = tarjeta.getAttribute("data-nombre").toLowerCase();

            if (nombre.includes(texto)) {
                tarjeta.style.display = "block";
            } else {
                tarjeta.style.display = "none";
            }
        });
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
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }, 4000);
    };

    window.addEventListener("resize", ajustarCanvas);
}


// ANIMACIÓN DE ENTRADA

const elementosAnimados = document.querySelectorAll(
    ".tarjeta, .categorias div, .pagina-secundaria, .estadisticas div, .imagenes img"
);

const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

elementosAnimados.forEach(function (elemento) {
    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(35px)";
    elemento.style.transition = "0.7s ease";
    observador.observe(elemento);
});


// NAVEGACIÓN SUAVE

document.querySelectorAll('a[href^="#"]').forEach(function (enlace) {
    enlace.addEventListener("click", function (e) {
        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            destino.style.transition = "0.5s";
            destino.style.boxShadow = "0 0 35px rgba(255,216,77,.45)";

            setTimeout(function () {
                destino.style.boxShadow = "";
            }, 1200);
        }
    });
});


// CONTADOR DE ESTADÍSTICAS

const numeros = document.querySelectorAll(".estadisticas h3");

numeros.forEach(function (numero) {
    const textoOriginal = numero.innerText;
    const valor = parseInt(textoOriginal);

    if (!isNaN(valor)) {
        let contador = 0;
        const incremento = Math.ceil(valor / 50);

        const intervalo = setInterval(function () {
            contador += incremento;

            if (contador >= valor) {
                contador = valor;
                clearInterval(intervalo);
            }

            if (textoOriginal.includes("%")) {
                numero.innerText = contador + "%";
            } else {
                numero.innerText = contador;
            }

        }, 30);
    }
});


// BOTÓN VOLVER ARRIBA

const botonArriba = document.createElement("button");

botonArriba.innerHTML = "↑";
botonArriba.classList.add("boton-arriba");

document.body.appendChild(botonArriba);

botonArriba.style.position = "fixed";
botonArriba.style.bottom = "25px";
botonArriba.style.right = "25px";
botonArriba.style.width = "55px";
botonArriba.style.height = "55px";
botonArriba.style.borderRadius = "50%";
botonArriba.style.border = "none";
botonArriba.style.background = "#ffd84d";
botonArriba.style.color = "#071024";
botonArriba.style.fontSize = "25px";
botonArriba.style.fontWeight = "bold";
botonArriba.style.cursor = "pointer";
botonArriba.style.display = "none";
botonArriba.style.zIndex = "9998";
botonArriba.style.boxShadow = "0 0 20px rgba(255,216,77,.5)";

window.addEventListener("scroll", function () {
    if (window.scrollY > 450) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
});

botonArriba.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// MENSAJE EN CONSOLA

window.addEventListener("load", function () {
    console.log("Página cargada correctamente");
});   este es js 
