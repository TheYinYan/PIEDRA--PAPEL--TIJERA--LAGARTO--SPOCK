"use strict";

const botonesJugada = [...document.querySelectorAll(".boton-eleccion-jugada")];
const contadorVictorias = document.querySelector("#contador-victorias");
const contadorDerrotas = document.querySelector("#contador-derrotas");
const contadorEmpates = document.querySelector("#contador-empates");
const displayJugador = document.querySelector(".display-jugador");
const displayCPU = document.querySelector(".display-cpu");
const mensaje = document.querySelector(".mensaje-resultado");
let victoria = 0;
let derrotas = 0;
let empate = 0;

const Jugada = {
    Piedra: { emoji: "🪨", gana: ["Lagarto", "Tijera"] },
    Papel: { emoji: "📋", gana: ["Piedra", "Spock"] },
    Tijera: { emoji: "✂️", gana: ["Papel", "Lagarto"] },
    Lagarto: { emoji: "🦎", gana: ["Spock", "Papel"] },
    Spock: { emoji: "🖖", gana: ["Tijera", "Piedra"] }
};

inicializarJuego();

/**
* @brief Inicializa el juego configurando los elementos, estados y eventos necesarios.
*
* Esta función prepara todo lo necesario para que el juego pueda comenzar,
* incluyendo la configuración de la interfaz, los valores iniciales de los
* jugadores y la vinculación de eventos a los controles.
*
* @return {void} No devuelve ningún valor.
*/
function inicializarJuego() {
    botonesJugada.forEach(boton => {
        boton.addEventListener("click", () => {
            const parrafo = boton.querySelector('.text');
            jugar(parrafo.textContent);
        });
    });
}

/**
* @brief Ejecuta una ronda del juego con la elección del usuario.
*
* Esta función realiza los siguientes pasos:
* 1. Reinicia los displays del juego.
* 2. Genera la elección de la CPU de forma aleatoria.
* 3. Muestra la elección del usuario y de la CPU con animaciones.
* 4. Calcula el resultado de la ronda.
* 5. Muestra el resultado y actualiza los contadores correspondientes.
*
* @param {string} eleccionUsuario - La elección realizada por el usuario (por ejemplo: "piedra", "papel",
"tijera"...).
* @return {void} No devuelve ningún valor.
*/
function jugar(eleccionUsuario) {
    reiniciarDisplays();
    const CPU = obtenerEleccionCPU();
    mostrarEleccion(displayJugador, eleccionUsuario, "Jugador");
    mostrarEleccion(displayCPU, CPU, "CPU");
    let resultado = calcularResultadoJugada(eleccionUsuario, CPU);
    mostrarResultadoJugada(resultado, eleccionUsuario, CPU);
    actualizarContadores();
}

/**
* @brief Genera aleatoriamente la elección de la CPU.
*
* Esta función selecciona una opción al azar entre las disponibles y la devuelve.
*
* @return {string} La elección de la CPU (por ejemplo: "piedra", "papel" o "tijera"...).
*/
function obtenerEleccionCPU() {
    const opciones = Object.keys(Jugada); // ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"]
    const opcion = Math.floor(Math.random() * opciones.length);
    return opciones[opcion];
}

/**
* @brief Muestra la elección de un jugador (jugador humano o CPU) en un display con icono y texto.
*
* Esta función limpia el contenido del display, aplica la clase
* para animación/estilo y agrega los elementos que representan
* la jugada seleccionada (emoji y texto) del jugador indicado.
*
* @param {HTMLElement} display - El contenedor donde se mostrará la elección.
* @param {string} eleccion - La clave de la elección (por ejemplo: "piedra", "papel", "tijera"...).
* @param {string} jugador - Nombre del jugador que realizó la elección (por ejemplo: "JUGADOR" o "CPU").
* @return {void} No devuelve ningún valor.
*/
function mostrarEleccion(display, eleccion, jugador) {
    display.classList.replace("placeholder", "mostrar-jugada.active");
    display.innerHTML = `
        <div  class="icono-jugada-grande">${Jugada[eleccion].emoji}</div>
        <div  class="texto-jugada">${eleccion}</div>`;
}

/**
* @brief Reinicia los displays del juego a su estado inicial.
*
* Esta función restablece el contenido de los displays del usuario y de la CPU,
* elimina cualquier clase de animación activa y restablece el mensaje de resultado
* al texto predeterminado "¡Batalla!".
*
* @return {void} No devuelve ningún valor.
*/
function reiniciarDisplays() {
    
    displayCPU.innerHTML = "?";
    displayCPU.classList.replace("mostrar-jugada.active", "placeholder");

    displayJugador.innerHTML = "?";
    displayJugador.classList.replace("mostrar-jugada.active", "placeholder");

    mensaje.textContent = "Estadísticas del Juego"
    mensaje.classList.remove("ganador", "perdedor", "empate");
}

/**
* @brief Calcula el resultado de una ronda entre el usuario y la CPU.
*
* Esta función compara la elección del usuario con la elección de la CPU
* y determina si la ronda termina en victoria, derrota o empate según
* las reglas del juego.
*
* @param {string} usuario - La elección del usuario (por ejemplo: "piedra", "papel", "tijera"...).
* @param {string} cpu - La elección de la CPU (por ejemplo: "piedra", "papel", "tijera"...).
* @return {string} El resultado de la ronda: "victoria", "derrota" o "empate".
*/
function calcularResultadoJugada(usuario, cpu) {
    if (usuario === cpu) {
        return "empate";
    }
    else if (Jugada[usuario].gana.includes(cpu)) {
        return "victoria";
    } else {
        return "derrota";
    }
}

/**
 * @brief Muestra el resultado de una ronda en la interfaz del juego.
*
* Esta función actualiza el mensaje de resultado según si el usuario ganó,
* perdió o empató, aplica la clase correspondiente para estilos y
* actualiza los contadores de victorias, derrotas o empates.
*
* @param {string} resultado - Resultado de la ronda: "victoria", "derrota" o "empate".
* @param {string} usuario - Elección del usuario (por ejemplo: "piedra", "papel", "tijera"...).
* @param {string} cpu - Elección de la CPU (por ejemplo: "piedra", "papel", "tijera"...).
* @return {void} No devuelve ningún valor.
*/
function mostrarResultadoJugada(resultado, usuario, cpu) {
    void mensaje.offsetWidth;

    switch (resultado) {
        case "victoria":
            mensaje.innerHTML = `¡Ganaste! ${usuario} vence a ${cpu}`;
            mensaje.classList.add("mensaje-resultado", "ganador");
            victoria++;
            break;
        case "derrota":
            mensaje.innerHTML = `¡Perdiste! ${cpu} vence a ${usuario}`;
            mensaje.classList.add("mensaje-resultado", "perdedor");
            derrotas++;
            break;
        case "empate":
            mensaje.innerHTML = `¡Empate! ${cpu} es igual a ${usuario}`;
            mensaje.classList.add("mensaje-resultado", "empate");
            empate++;
            break;
    }
}

/**
* @brief Actualiza los contadores de victorias, derrotas y empates en la interfaz.
*
* Esta función refleja los valores actuales de las variables globales
* `victorias`, `derrotas` y `empates` en los elementos del DOM correspondientes.
*
* @return {void} No devuelve ningún valor.
*/
function actualizarContadores() {
    contadorVictorias.textContent = `${victoria}`;
    contadorDerrotas.textContent = `${derrotas}`;
    contadorEmpates.textContent = `${empate}`;
}

/**
* @brief Inicializa los tooltips de los botones de elección.
*
* Esta función recorre todos los botones de elección, obtiene la jugada
* asociada a cada uno y configura el atributo `title` para mostrar
* un tooltip indicando qué opciones vence esa jugada.
*
* @return {void} No devuelve ningún valor.
*/
function inicializarTooltips() {
    // // Efecto de carga inicial suave
    // setTimeout(() => {
    //     const contenedor = document.querySelector('main');
    //     if (contenedor) contenedor.style.opacity = '1';
    // }, 100);
}