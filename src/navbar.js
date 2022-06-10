import { content } from './index'

function renderNav() {

    const nav = document.createElement('ul');
    nav.className = 'navbar';
    
    const home = document.createElement('li');
    home.innerText = 'home';

    const menu = document.createElement('li');
    menu.innerText = 'menu';

    const contact = document.createElement('li');
    contact.innerText = 'contact';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    content.appendChild(nav);
}

export { renderNav };