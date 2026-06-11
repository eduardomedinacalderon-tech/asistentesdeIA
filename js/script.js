// BUSCADOR DE IA

const buscador = document.getElementById("buscarIA");

if (buscador) {

    buscador.addEventListener("keyup", () => {

        const texto = buscador.value.toLowerCase();

        const tarjetas = document.querySelectorAll(".tarjeta");

        tarjetas.forEach(tarjeta => {

            const nombre = tarjeta.dataset.nombre.toLowerCase();

            if (nombre.includes(texto)) {
                tarjeta.style.display = "block";
            } else {
                tarjeta.style.display = "none";
            }

        });

    });

}


// FORMULARIO

const formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Gracias por tu mensaje. Se ha enviado correctamente.");

        formulario.reset();

    });

}


// ANIMACIÓN DE APARICIÓN

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});


const elementos = document.querySelectorAll(
    ".tarjeta, .categoria, .estadisticas div"
);

elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = "0.8s";

    observador.observe(elemento);

});


// CONTADOR DE ESTADÍSTICAS

const numeros = document.querySelectorAll(".estadisticas h3");

numeros.forEach(numero => {

    const textoOriginal = numero.innerText;

    const valor = parseInt(textoOriginal);

    if (!isNaN(valor)) {

        let contador = 0;

        const incremento = Math.ceil(valor / 50);

        const intervalo = setInterval(() => {

            contador += incremento;

            if (contador >= valor) {

                contador = valor;

                clearInterval(intervalo);

                if (textoOriginal.includes("%")) {
                    numero.innerText = valor + "%";
                } else if (textoOriginal.includes("+")) {
                    numero.innerText = valor + "+";
                } else {
                    numero.innerText = valor;
                }

            } else {

                if (textoOriginal.includes("%")) {
                    numero.innerText = contador + "%";
                } else if (textoOriginal.includes("+")) {
                    numero.innerText = contador + "+";
                } else {
                    numero.innerText = contador;
                }

            }

        }, 30);

    }

});


// BOTÓN VOLVER ARRIBA

const botonArriba = document.createElement("button");

botonArriba.innerHTML = "↑";

document.body.appendChild(botonArriba);

botonArriba.style.position = "fixed";
botonArriba.style.bottom = "25px";
botonArriba.style.right = "25px";
botonArriba.style.width = "50px";
botonArriba.style.height = "50px";
botonArriba.style.borderRadius = "50%";
botonArriba.style.border = "none";
botonArriba.style.background = "#f4c542";
botonArriba.style.color = "#111936";
botonArriba.style.fontSize = "22px";
botonArriba.style.cursor = "pointer";
botonArriba.style.display = "none";
botonArriba.style.zIndex = "1000";


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }

});


botonArriba.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
