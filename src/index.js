import { renderNav } from "./navbar";
import { renderHome } from "./home";
import { renderFooter } from "./footer";
import { renderMenu } from "./menu";

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

loadHome();

document.addEventListener('click', (e) => {
    const target = e.target.innerText;

    if (target === 'HOME') loadHome();
    if (target === 'MENU') loadMenu();
});

export { content };