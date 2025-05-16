import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';
import logoImage from '../assets/holberton-logo.jpg';

// Ajouter le logo en premier
$('body').append('<div id="logo"></div>');
$('#logo').css('background-image', `url(${logoImage})`);

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;
const updateCounter = () => {
  count++;
  $('#count').text(`${count} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));
