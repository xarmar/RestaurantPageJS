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

    // AboutUs Div
    const aboutUsDiv = document.createElement('div');
    aboutUsDiv.id = 'aboutUsDiv';

    const aboutUsHeader = document.createElement('h2');
    aboutUsHeader.id = 'aboutUsHeader';
    aboutUsHeader.innerText = 'About Us'
    aboutUsDiv.appendChild(aboutUsHeader);

    const aboutUsText = document.createElement('p');
    aboutUsText.id = 'aboutUsText';
    aboutUsText.innerText = 'Inspired by the beautiful aesthetics of the 1980s, our lounge gives homage to this amazing era with classic cocktails, dim neon lights, friendly staff and great atmosphere.';
    aboutUsDiv.appendChild(aboutUsText);

    const image = document.createElement('img');
    image.id = 'aboutUsImage';
    image.setAttribute('src', `../src/images/horizon.png`);

    homeMenuDiv.appendChild(aboutUsDiv);
    homeMenuDiv.appendChild(image);

    // LocationDiv

    const locationDiv = document.createElement('div');
    location.id = 'locationDiv';

    const locationHeader = document.createElement('h2');
    locationHeader.id = 'locationHeader';
    locationHeader.innerText = 'Location'
    locationDiv.appendChild(locationHeader);

    const locationText = document.createElement('p');
    locationText.id = 'locationText';
    locationText.innerText = 'We are located in Bairro Alto, Lisbon. Come experience this magical place today!';
    locationDiv.appendChild(locationText);
    
    const locationDetails = {
        address: 'Travessa dos Inglesinhos  Nº 49',
        city :  'Lisbon',
        postcode : '1200-222',
        country : 'Portugal',
    }

    const locationAdressDiv = document.createElement('div');
    locationAdressDiv.id = 'locationAdressDiv';

    const locationAddress = document.createElement('p');
    locationAddress.id = 'locationAddress';
    locationAddress.innerText = locationDetails.address;

    const locationCity = document.createElement('p');
    locationCity.id = 'locationCity';
    locationCity.innerText = locationDetails.city;

    const locationPostcode = document.createElement('p');
    locationPostcode.id = 'locationPostcode';
    locationPostcode.innerText = locationDetails.postcode;

    const locationCountry = document.createElement('p');
    locationCountry.id = 'locationCountry';
    locationCountry.innerText = locationDetails.country;

    appendMultipleNodesToParent(locationDiv, locationAddress, locationCity, locationPostcode, locationCountry);
    
    locationDiv.appendChild(locationAdressDiv);
    homeMenuDiv.appendChild(locationDiv);
    contentDiv.appendChild(homeMenuDiv);
    


};


