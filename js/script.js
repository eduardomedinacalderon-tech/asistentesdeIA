// BUSCADOR DE IA

const buscador = document.getElementById("buscarIA");

if (buscador) {

    buscador.addEventListener("keyup", () => {

        const texto = buscador.value.toLowerCase();

        const tarjetas = document.querySelectorAll(".tarjeta");

        tarjetas.forEach((tarjeta) => {

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

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Gracias por tu mensaje. Tu información ha sido enviada correctamente.");

        formulario.reset();

    });

}


// APARICIÓN SUAVE DE TARJETAS

const elementos = document.querySelectorAll(
    ".tarjeta, .categorias div, .estadisticas div"
);

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


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = "all 0.8s ease";

    observador.observe(elemento);

});


// CONTADOR DE ESTADÍSTICAS

const numeros = document.querySelectorAll(".estadisticas h3");

numeros.forEach((numero) => {

    const textoOriginal = numero.innerText;

    const valorFinal = parseInt(textoOriginal);

    if (!isNaN(valorFinal)) {

        let contador = 0;

        const incremento = Math.ceil(valorFinal / 50);

        const intervalo = setInterval(() => {

            contador += incremento;

            if (contador >= valorFinal) {

                contador = valorFinal;

                clearInterval(intervalo);

                if (textoOriginal.includes("%")) {

                    numero.innerText = contador + "%";

                } else {

                    numero.innerText = contador;

                }

            } else {

                if (textoOriginal.includes("%")) {

                    numero.innerText = contador + "%";

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
botonArriba.style.width = "55px";
botonArriba.style.height = "55px";
botonArriba.style.borderRadius = "50%";
botonArriba.style.border = "none";
botonArriba.style.background = "#ffd84d";
botonArriba.style.color = "#08111f";
botonArriba.style.fontSize = "24px";
botonArriba.style.fontWeight = "bold";
botonArriba.style.cursor = "pointer";
botonArriba.style.display = "none";
botonArriba.style.zIndex = "9999";
botonArriba.style.boxShadow = "0 0 20px rgba(255,216,77,0.5)";


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


// EFECTO BRILLO EN EL TÍTULO

const titulo = document.querySelector(".contenido-portada h1");

if (titulo) {

    setInterval(() => {

        titulo.style.textShadow =
            "0 0 20px rgba(255,216,77,0.8)";

        setTimeout(() => {

            titulo.style.textShadow = "none";

        }, 1000);

    }, 3000);

}
