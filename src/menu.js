import { content } from './index';

const menu = [
    {
        name: "Smoked Turkey",
        description: "Heaping stack of smoked turkey with your choice of side and BBQ sauce",
        price: "$15",
    },
    {
        name: "Jimmy's Brisket",
        description: "Brisket smoked for 12 hours piled high and lathered in our famous BBQ sauce",
        price: "$20",
    },
    {
        name: "Leyri's Ribs",
        description: "Riley's world famous ribs straight from the grill and lathered in our BBQ sauce with a secret ingredient",
        price: "$20",
    }
];

const sides = ["Baked Beans", "French Fries", "Mac and Cheese", "Cornbread", "Baked Apples", "Coleslaw"];

function renderMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu-div';

    const menuTitle = document.createElement('h1');
    menuTitle.className = 'menu-title';
    menuTitle.innerText = 'menu';

    const entreesTitle = document.createElement('h2');
    entreesTitle.className = 'menu-section';
    entreesTitle.innerText = 'entrees';

    const sidesTitle = document.createElement('h2');
    sidesTitle.className = 'menu-section';
    sidesTitle.innerText = 'sides';

    const menuItems = document.createElement('div');
    menuItems.className = 'menu-items';

    menuItems.append(entreesTitle);

    menu.forEach((item) => {

        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        
        const itemPicture = document.createElement('img');
        const pictureName = item.name.toLowerCase().replace(' ', '_');
        
        if (pictureName === "smoked_turkey") {
            itemPicture.src = `./images/${pictureName}.jpg`;
        }
        else {
            itemPicture.src = `./images/${pictureName}.bmp`;
        }
        itemPicture.alt = `Picture of ${item.name}`;
        

        const itemInfo = document.createElement('div');
        itemInfo.className = 'item-info';

        const itemName = document.createElement('p');
        itemName.innerText = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.innerText = item.description;

        const itemPrice = document.createElement('p');
        itemPrice.innerText = item.price;

        itemInfo.append(itemName);
        itemInfo.append(itemDescription);
        itemInfo.append(itemPrice);

        itemDiv.appendChild(itemPicture);
        itemDiv.appendChild(itemInfo);

        menuItems.append(itemDiv);
    });

    const sideItems = document.createElement('div');
    sideItems.className = 'side-items';

    sides.forEach((item) => {
        const itemName = document.createElement('p');
        itemName.innerText = item;
        itemName.className = 'side-item';

        sideItems.append(itemName);
    });

    menuItems.append(sidesTitle);
    menuItems.append(sideItems);

    menuDiv.append(menuTitle);
    menuDiv.append(menuItems);

    content.append(menuDiv);
}

export { renderMenu };