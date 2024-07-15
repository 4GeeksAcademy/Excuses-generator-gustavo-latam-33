/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateExcuse() {
  let who = [
    "Un dragón de dos cabezas",
    "Mi amigo invisible",
    "Un alienígena",
    "Un mago viajero en el tiempo",
    "Un unicornio rosa",
    "El hombre de jengibre",
    "Un pingüino bailarín",
    "Mi clon malvado",
    "Una sirena despistada",
    "Un vampiro vegetariano",
    "Un robot rebelde",
    "El fantasma de mi abuelo"
  ];

  let action = [
    "se comió",
    "teletransportó",
    "vaporizó",
    "encantó",
    "robo",
    "quemó",
    "inundó",
    "congeló",
    "desintegró",
    "aplastó",
    "hipnotizó",
    "secuestró"
  ];

  let what = [
    "mi sándwich",
    "mi computadora",
    "la televisión",
    "la lavadora",
    "mis zapatos",
    "mi tarea",
    "el coche",
    "mi bicicleta",
    "mi móvil",
    "la nevera",
    "mi cama",
    "el microondas"
  ];

  let when = [
    "durante una tormenta eléctrica",
    "mientras cantaba en la ducha",
    "en medio de una batalla de baile",
    "mientras caminaba dormido",
    "en la fiesta de cumpleaños del perro",
    "mientras jugaba al ajedrez con un pulpo",
    "en plena maratón de películas de terror",
    "durante la siesta del vecino",
    "mientras meditaba en el techo",
    "en medio de un concurso de tartas",
    "cuando practicaba yoga en el parque",
    "durante una invasión de patos"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  document.getElementById("excuse").innerHTML = excuse;
}

document.addEventListener("DOMContentLoaded", function() {
  document
    .getElementById("btn-main-button")
    .addEventListener("click", generateExcuse);
  generateExcuse();
});

console.log("Hello Rigo from the console!");
