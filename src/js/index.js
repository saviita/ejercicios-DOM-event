// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//EJ1 Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.
const buttonElement = document.getElementById('button');
const printContent = () => {
  console.log(buttonElement.textContent);
};
buttonElement.addEventListener('click', printContent);

//EJ2 Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"
const titleElement = document.getElementById('title');
const titleContent = titleElement.textContent;

const addText = () => {
  titleElement.textContent = 'Quita de encima!!';
};
titleElement.addEventListener('mouseover', addText);

const changeText = () => {
  titleElement.textContent = titleContent;
};

titleElement.addEventListener('mouseout', changeText);

//EJ3 Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.
const sizeWindow = () => {
  console.log(`${window.visualViewport.height} x ${window.visualViewport.width}`);
};
window.addEventListener('resize', sizeWindow);

//EJ4 Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.
const textElement = document.getElementById('text');

const printKey = event => {
  textElement.textContent = event.key;
};
window.addEventListener('keypress', printKey);

//EJ5 Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.
const smallTitleElement = document.getElementById('title-small');
const nextElement = document.getElementById('next');
const previousElement = document.getElementById('previous');

const fiveWords = ['pato', 'oso', 'pez', 'perro', 'reno'];
let number = 0;

smallTitleElement.textContent = fiveWords[0];

const next = () => {
  console.log(number);
  if (number >= fiveWords.length - 1) {
    //number = 0;
    nextElement.disabled = true;
    previousElement.disabled = false;
  } else {
    number++;
  }
  smallTitleElement.textContent = fiveWords[number];
};

const previous = () => {
  console.log(number);
  if (number <= 0) {
    number = fiveWords.length - 1;
  } else {
    previousElement.disabled = true;
    nextElement.disabled = false;
    //number--;
  }
  smallTitleElement.textContent = fiveWords[number];
};

nextElement.addEventListener('click', next);
previousElement.addEventListener('click', previous);

//EJ6 Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último

//return

//EJ7 Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.
const label = document.getElementById('label');
const range = document.getElementById('range');

const printValue = () => {
  label.textContent = range.value;
};
range.addEventListener('input', printValue);

//EJ8 Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cual es su texto.
const btnElement = document.getElementById('btn');
const resultElement = document.getElementById('result');
const textResultElement = document.getElementById('text-result');

const printCheck = () => {
  const checkNumberElement = document.querySelectorAll('input:checked');
  resultElement.textContent = checkNumberElement.length;

  checkNumberElement.forEach(check => {
    textResultElement.textContent += check.value + ' ';
    console.log(check.value);
  });
};

btnElement.addEventListener('click', printCheck);
