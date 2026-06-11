const datosIA = {
    chatgpt: {
        nombre: "ChatGPT",
        logo: "img/chatgpt.png",
        descripcion: "ChatGPT es un asistente de inteligencia artificial desarrollado por OpenAI. Puede responder preguntas, generar texto, explicar temas, programar y apoyar tareas escolares.",
        uso: "Sirve para estudiar, redactar textos, resolver dudas, hacer resúmenes, crear código, analizar información y apoyar proyectos académicos.",
        web: "https://chatgpt.com",
        video: "https://www.youtube.com/embed/TAUXp6wO-H0"
    },

    gemini: {
        nombre: "Gemini",
        logo: "img/gemini.png",
        descripcion: "Gemini es una inteligencia artificial de Google que trabaja con texto, imágenes, razonamiento y herramientas digitales.",
        uso: "Sirve para buscar información, generar respuestas, analizar imágenes, apoyar tareas escolares y trabajar con servicios de Google.",
        web: "https://gemini.google.com",
        video: "https://www.youtube.com/embed/TAUXp6wO-H0"
    },

    claude: {
        nombre: "Claude",
        logo: "img/claude.png",
        descripcion: "Claude es un asistente de inteligencia artificial desarrollado por Anthropic, enfocado en conversación, análisis y redacción.",
        uso: "Sirve para resumir documentos, escribir textos, analizar información y mantener conversaciones claras y ordenadas.",
        web: "https://claude.ai",
        video: "https://www.youtube.com/embed/TAUXp6wO-H0"
    },

    qwen: {
        nombre: "Qwen",
        logo: "img/qwen.png",
        descripcion: "Qwen es una familia de modelos de inteligencia artificial desarrollada por Alibaba.",
        uso: "Sirve para generar texto, analizar información, responder preguntas y trabajar con distintos idiomas.",
        web: "https://chat.qwen.ai",
        video: "https://www.youtube.com/embed/TAUXp6wO-H0"
    },

    deepseek: {
        nombre: "DeepSeek",
        logo: "img/deepseek.png",
        descripcion: "DeepSeek es una IA útil para razonamiento, programación, matemáticas y análisis técnico.",
        uso: "Sirve para resolver problemas, explicar código, hacer cálculos y apoyar tareas de ingeniería o programación.",
        web: "https://www.deepseek.com",
        video: "https://www.youtube.com/embed/TAUXp6wO-H0"
    }
};

const parametros = new URLSearchParams(window.location.search);
const ia = parametros.get("ia");

const info = datosIA[ia];

if (info) {
    document.title = info.nombre;

    document.getElementById("nombreIA").textContent = info.nombre;
    document.getElementById("logoIA").src = info.logo;
    document.getElementById("logoIA").alt = info.nombre;
    document.getElementById("descripcionIA").textContent = info.descripcion;
    document.getElementById("usoIA").textContent = info.uso;
    document.getElementById("botonIA").href = info.web;
    document.getElementById("videoIA").src = info.video;

    document.getElementById("imagen1").src = info.logo;
    document.getElementById("imagen2").src = info.logo;
    document.getElementById("imagen3").src = info.logo;
} else {
    document.getElementById("nombreIA").textContent = "IA no encontrada";
    document.getElementById("descripcionIA").textContent = "Regresa al inicio y selecciona una inteligencia artificial válida.";
}
