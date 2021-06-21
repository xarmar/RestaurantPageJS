require ('/src/menu.js');
require ('/src/home.js');
require ('/src/contact.js');
require ('/src/helperFunctions.js');
require ('/src/style.scss');

import "./style.scss";
import { populateMenu } from '/src/menu.js';
import { populateHome } from '/src/home.js';
import { populateContact } from '/src/contact.js';
import { appendMultipleNodesToParent } from "./helperFunctions";


document.addEventListener("DOMContentLoaded", function () {
const header = document.querySelector('#header');

const populateNavigationBar = () => {

    const titleHeader = document.createElement('h2');
    titleHeader.id = 'titleHeader';
    titleHeader.innerText = "Cocktails & Dreams";

    // Create Clicable NavBar for Mobile
    const dropdown = document.createElement('a');
    dropdown.innerText = '☰';
    dropdown.setAttribute('href', '#');
    dropdown.addEventListener('click', toggleMenu);

    // append titleHeader and dropdown to 'header' div
    appendMultipleNodesToParent(header, titleHeader, dropdown);

    // Init navigationBar
    const navigationBar = document.createElement('ul');
    navigationBar.id = 'navBar';
    // Navigation Bar Options
    const home = document.createElement('li');
    home.innerText = "Home";
    home.classList.add('menu');
    home.addEventListener('click', populateHome);

    const menu = document.createElement('li');
    menu.innerText = "Menu";
    menu.classList.add('menu');
    menu.addEventListener('click', populateMenu);

    const contact = document.createElement('li');
    contact.innerText = "Contact";
    contact.classList.add('menu');
    contact.addEventListener('click', populateContact);

    // Append Options to Navigation Bar List
    appendMultipleNodesToParent(navigationBar, home, menu, contact);
    // Append navigationBar to header
    header.appendChild(navigationBar);
}

const populateFooter = () => {
    const footer = document.createElement('footer');
    footer.id = 'footer';

    const pInfo = document.createElement('p');
    pInfo.textContent = 'Developed by ';

    const linkGithub = document.createElement('a');
    linkGithub.innerText = 'xarmar';
    linkGithub.setAttribute('href', 'https://github.com/xarmar');

    pInfo.appendChild(linkGithub);
    footer.appendChild(pInfo);
    document.body.appendChild(footer);

}

const toggleMenu = () => {
    let navBar = document.querySelector('#navBar');
    navBar.classList.toggle('showMenu');
}

populateNavigationBar();
populateHome();
populateFooter();

});


