import {removeChildNodes, appendMultipleNodesToParent, closeExpandedMenu} from './helperFunctions';

const contentDiv = document.querySelector('#content');

export const populateContact = () => {
    
    // close expanded mobile menu
    if(document.querySelector('.showMenu')) {
        closeExpandedMenu();
    }

    // if homeMenuDiv already exists in DOM, do not run function
    if(document.querySelector('#contactMenuDiv')) {
        return
    }

    // reset contentDiv
    removeChildNodes(contentDiv);

    const contactMenuDiv = document.createElement('div');
    contactMenuDiv.id = 'contactMenuDiv';

    
    // LocationDiv

    const locationDiv = document.createElement('div');
    locationDiv.id = 'locationDiv';

    const locationHeader = document.createElement('h2');
    locationHeader.id = 'locationHeader';
    locationHeader.innerText = 'Location'
    locationDiv.appendChild(locationHeader);

    const locationText = document.createElement('p');
    locationText.id = 'locationText';
    locationText.innerText = 'We are located in Bairro Alto, Lisbon. Come experience this magical place today!';
    locationDiv.appendChild(locationText);
    
    const locationDetails = {
        address: 'Travessa dos Inglesinhos  Nº 132',
        city :  'Lisbon',
        postcode : '1200-222',
        country : 'Portugal',
    }

    const locationAdressDiv = document.createElement('div');
    locationAdressDiv.id = 'locationAdressDiv';

    const locationAddress = document.createElement('p');
    locationAddress.id = 'locationAddress';
    locationAddress.innerText = locationDetails.address;

    const locationPostcodeAndCity = document.createElement('p');
    locationPostcodeAndCity.id = 'locationPostcodeAndCity';
    locationPostcodeAndCity.innerText = locationDetails.postcode + '. ' + locationDetails.city;

    const locationCountry = document.createElement('p');
    locationCountry.id = 'locationCountry';
    locationCountry.innerText = locationDetails.country;

    // add image here
    const map = document.createElement('img');
    map.id = 'map';
    map.setAttribute('src', `/src/images/map.png`);

    // Append elements to Content Div
    appendMultipleNodesToParent(locationDiv, locationAddress, locationPostcodeAndCity, locationCountry,map);
    locationDiv.appendChild(locationAdressDiv);
    contactMenuDiv.appendChild(locationDiv);
    contentDiv.appendChild(contactMenuDiv);
};


