let cocktails = [
    ['Alabama Slamer', 'slammer', 'A popular drink for those who enjoy fruity flavors.', 'Jack Daniels, Amaretto Liqueur, Lemon juice'],
    ['Blue Hawaiian Frozen', 'frozen', 'An amazing blue drink that will take back to the 80s.', 'Blue Curacao, Pinapple Juice, Coconut Cream'],
    ['Dirty Banana', 'banana', 'A fun and original rum drink. Perfect to share with that special someone.', 'Vanilla Icecream, Coffee Liqueur, Cream'],
    ['Sex On The Beach', 'beach', 'A classic and recognized cocktail. Perfect to share with that special someone.', 'Vodka, Peach Schnapps, Cranberry Juice']
]

class item {
    contructor(title, imagePath, description, mainIngredients) {
        this.title = title;
        this.imagePath = imagePath;
        this.description = description;
        this.mainIngredients = mainIngredients;
    }

    newCocktail = (title, imagePath, description, mainIngredients) => {
        cocktails.push(title, imagePath, description, mainIngredients);
    }
}

const contentDiv = document.querySelector('#content');

export const populateMenu = () => {
    if (!document.querySelector('#itemMenuDiv')) {
    const itemMenuDiv = document.createElement('div');
    itemMenuDiv.id = 'itemMenuDiv';
    }

    cocktails.forEach(drink => {
        let menuItem = document.createElement('div');
        menuItem.classList.add("menuItem")

        let title = document.createElement('h3');
        title.innerText = drink[0];

        let ingredients = document.createElement('p');
        ingredients.classList.add('italic');
        ingredients.innerText = drink[3];

        let image = document.createElement('img');
        image.setAttribute('src', `./${drink[1]}.png`);
        image.setAttribute('height', `250px`);
        image.setAttribute('width', `250px`);


        let description = document.createElement('p');
        description.innerText = drink[2];
    
        menuItem.appendChild(title);
        menuItem.appendChild(ingredients);   
        menuItem.appendChild(image);
        menuItem.appendChild(description); 
        contentDiv.appendChild(menuItem);

    });
};
