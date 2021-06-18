// Init arrray
let menuOptions = []

class menuOption {
    constructor(title, imagePath, description, mainIngredients, price) {
        this.title = title;
        this.imagePath = imagePath;
        this.description = description;
        this.mainIngredients = mainIngredients;
        this.price = price;
    }
}

let addToMenuOptionsArray = (menuOption) => {
    menuOptions.push(menuOption);
}

let removeMenuFromMenuOptionsArray = (cocktailTitle) => {
    for (let i = 0; i < menuOptions.length; i++) {
        if( cocktailTitle === menuOptions[i].title) {
            menuOptions.splice(i, 1);
        }
    }
}

// Init Menu Objects
let alabama = new menuOption('Alabama Slammer', 'slammer', 'A popular drink for those who enjoy fruity flavours.', 'Jack Daniels, Amaretto Liqueur, Lemon juice.', 5);
let frozen = new menuOption('Blue Hawaiian Frozen', 'frozen', 'An amazing blue drink that will take back to the 80s.', 'Blue Curacao, Pinapple Juice, Coconut Cream.', 6);
let banana = new menuOption('Dirty Banana', 'banana', 'A fun & original rum drink. The perfect cocktail!', 'Vanilla Icecream, Coffee Liqueur, Cream.', 6);
let beach = new menuOption('Sex On The Beach', 'beach', 'A classic cocktail. May evoke some emotion...', 'Vodka, Peach Schnapps, Cranberry Juice.', 7);
let nachos = new menuOption('Tasty Nachos', 'nachos', 'Fancy some nachos with salsa? We got your back!', 'Nachos, salta... lots and lots of salsa', 4);
let nuts = new menuOption('Mixed Nuts', 'nuts', 'Packed with nutrients and good omegas.', 'Just mixed nuts.. from mother nature', 4);
let waffles = new menuOption('Epic Waffles', 'waffles', 'Waffles and icecream. Does life get any better?', 'Waffles, icecream, chocolate syrup', 5);
let pizza = new menuOption('Pepperoni Pizza', 'pizza', 'Fancy some italian? Try our pepperoni pizza.', 'Pepperoni, cheese, dough, more cheese...', 6);

// Push Cocktails to the array
addToMenuOptionsArray(alabama);
addToMenuOptionsArray(frozen);
addToMenuOptionsArray(banana);
addToMenuOptionsArray(beach);
addToMenuOptionsArray(nachos);
addToMenuOptionsArray(nuts);
addToMenuOptionsArray(waffles);
addToMenuOptionsArray(pizza);


const contentDiv = document.querySelector('#content');

export const populateMenu = () => {
    if (!document.querySelector('#itemMenuDiv')) {
    const itemMenuDiv = document.createElement('div');
    itemMenuDiv.id = 'itemMenuDiv';
    }

    menuOptions.forEach(option => {
        let menuItem = document.createElement('div');
        menuItem.classList.add("menuItem")

        // Title of Menu Option
        let title = document.createElement('h3');
        title.innerText = option.title;

        // Ingredients of Menu Option
        let ingredients = document.createElement('p');
        ingredients.innerText = option.mainIngredients;

        // Image of Menu Option
        let image = document.createElement('img');
        image.setAttribute('src', `../src/images/${option.imagePath}.png`);
        image.classList.add("drinkImage");

        // Description of Menu Option
        let description = document.createElement('p');
        description.classList.add('description');
        description.innerText = option.description;

        // Pice of Menu Option
        let price = document.createElement('p');
        price.classList.add('price');
        price.innerText = `${option.price}€`;
    
        menuItem.appendChild(title);
        menuItem.appendChild(ingredients);   
        menuItem.appendChild(image);
        menuItem.appendChild(description);
        menuItem.appendChild(price); 
        contentDiv.appendChild(menuItem);

    });
};
