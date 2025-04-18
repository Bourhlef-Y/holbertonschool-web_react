import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
import logoImage from '../assets/holberton-logo.jpg';

// Ajout du logo
$('body').append('<div id="logo"></div>');

// Ajout des éléments au body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Variable pour suivre le nombre de clics
let count = 0;

// Fonction pour mettre à jour le compteur
function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

// Utilisation de la fonction debounce de Lodash pour éviter le spam
const debouncedUpdateCounter = _.debounce(updateCounter, 500);

// Ajout de l'événement de clic sur le bouton
$('button').on('click', debouncedUpdateCounter); 