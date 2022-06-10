import { content } from './index';

function renderHome() {
    let homeDiv = document.createElement('div');
    homeDiv.className = 'home-div';

    const restaurantNameDiv = document.createElement('div');
    restaurantNameDiv.innerText = 'Big Bens BBQ';
    restaurantNameDiv.className = 'restaurant-title';

    const restaurantSlogan = document.createElement('p');
    const emphasizeText = document.createElement('em');
    restaurantSlogan.appendChild(emphasizeText);
    emphasizeText.innerText = 'Get a free loosie with every purchase over $7';
    restaurantSlogan.className = 'slogan';

    const newLocation = document.createElement('p');
    newLocation.innerText = 'New Location Opening Soon in Paris, France!';
    newLocation.className = 'new-location';

    homeDiv.appendChild(restaurantNameDiv);
    homeDiv.appendChild(restaurantSlogan);
    homeDiv.appendChild(newLocation);

    content.appendChild(homeDiv);
}

export { renderHome };