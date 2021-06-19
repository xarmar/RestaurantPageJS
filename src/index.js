import "./style.scss";
import { populateMenu } from '/src/menu.js';
import { populateHome } from '/src/home.js';

export const resetContentDiv = () => {
    while(contentDiv.hasChildNodes) {
        contentDiv.removeChild();
    }
}

document.addEventListener("DOMContentLoaded", function () {
const header = document.querySelector('#header');
const content = document.querySelector('#content');

const populateNavigationBar = () => {
    // Create List For Navigation Bar
    const navigationBar = document.createElement('ul');
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
    // contact.addEventListener('click', populateContact);

    // Append Options to Navigation Bar List
    navigationBar.appendChild(home);
    navigationBar.appendChild(menu);
    navigationBar.appendChild(contact);
    // Append navigationBar to header
    header.appendChild(navigationBar);
}

populateNavigationBar();

});


