import { renderNav } from "./navbar";
import { renderHome } from "./home";
import { renderFooter } from "./footer";

const content = document.getElementById('content');

renderNav();
renderHome();
renderFooter();

export { content };