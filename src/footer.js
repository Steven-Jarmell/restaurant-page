import { content } from './index';

function renderFooter() {
    const footerDiv = document.createElement('div');
    footerDiv.className = 'footer';

    const footerMessage = document.createElement('p');
    footerMessage.innerText = 'Developed by Steven Jarmell for the Odin Project 2022';

    footerDiv.append(footerMessage);

    content.append(footerDiv);
}

export { renderFooter };