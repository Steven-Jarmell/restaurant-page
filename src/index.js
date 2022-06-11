import { renderNav } from "./navbar";
import { renderHome } from "./home";
import { renderFooter } from "./footer";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";

const content = document.getElementById('content');

function loadHome() {
    content.innerHTML = '';
    renderNav();
    renderHome();
    renderFooter();
}

function loadMenu() {
    content.innerHTML = '';
    renderNav();
    renderMenu();
    renderFooter();
}

function loadContact() {
    content.innerHTML = '';
    renderNav();
    renderContact();
    renderFooter();
}

loadHome();

document.addEventListener('click', (e) => {
    const target = e.target.innerText;

    if (target === 'HOME') loadHome();
    if (target === 'MENU') loadMenu();
    if (target === 'CONTACT') loadContact();
});

export { content };