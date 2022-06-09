import { content } from './index'

function renderNav() {

    const nav = document.createElement('ul');
    nav.className = 'navbar';
    
    const home = document.createElement('li');
    home.innerText = 'home';

    const menu = document.createElement('li');
    menu.innerText = 'menu';

    const about = document.createElement('li');
    about.innerText = 'about';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);

    content.appendChild(nav);
}

export { renderNav };