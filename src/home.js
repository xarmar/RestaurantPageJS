import {removeChildNodes, appendMultipleNodesToParent} from './helperFunctions';

const contentDiv = document.querySelector('#content');

export const populateHome = () => {
    // if homeMenuDiv already exists in DOM, do not run function
    if(document.querySelector('#homeMenuDiv')) {
        return
    }

    // reset contentDiv
    removeChildNodes(contentDiv);

    const homeMenuDiv = document.createElement('div');
    homeMenuDiv.id = 'homeMenuDiv';

    // Generate AboutUs Div
    const aboutUsDiv = document.createElement('div');
    aboutUsDiv.id = 'aboutUsDiv';

    const aboutUsHeader = document.createElement('h2');
    aboutUsHeader.id = 'aboutUsHeader';
    aboutUsHeader.innerText = 'About Us'

    const aboutUsText = document.createElement('p');
    aboutUsText.id = 'aboutUsText';
    aboutUsText.innerText = 'Inspired by the beautiful aesthetics of the 1980s, our lounge gives homage to this amazing era with classic cocktails, dim neon lights, friendly staff and great atmosphere.';

    const aboutUsExtraDetails = document.createElement('p');
    aboutUsExtraDetails.id = 'aboutUsExtraDetails';
    aboutUsExtraDetails.innerText = "Come and enjoy yourself in the 80s. Lose yourself and immerse yourself in this peculiar decade as you sip on a ice cold cocktail and listen to 80s classics.";

    // Image Div
    const imageDiv = document.createElement('div');
    imageDiv.id = 'imageDiv';

    const image = document.createElement('img');
    image.id = 'aboutUsImage';
    image.setAttribute('src', `../src/images/horizon.png`);
    imageDiv.appendChild(image);

    appendMultipleNodesToParent(aboutUsDiv, aboutUsHeader, aboutUsText, aboutUsExtraDetails);
    homeMenuDiv.appendChild(aboutUsDiv);
    homeMenuDiv.appendChild(imageDiv);


    contentDiv.appendChild(homeMenuDiv);


};


