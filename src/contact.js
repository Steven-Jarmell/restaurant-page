import { content } from './index';

function renderContact() {
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contact-div';
    contactContainer.innerHTML = `
        <h1 class="contact-title">Contact us</h1>
        <div class="contact-container">
            <div class="location">
                <a class="contact-info"><span class="material-symbols-outlined" id="symbol">pin_drop</span> Champ de Mars, 5 Av. Anatole France, 75007 Paris, France</a>
            </div>
            <div class="hours">
                <a class="contact-info"><span class="material-symbols-outlined" id="symbol">nest_clock_farsight_analog</span> Mon-Sat: 8am-8pm</a>
            </div>
            <div class="phone-number">
                <a class="contact-info"><span class="material-symbols-outlined" id="symbol">call</span> (481)-516-2342</a>
            </div>
            <div class="contact-form">
                <a class="contact-info"><span class="material-symbols-outlined" id="symbol">mail</span> Email us</a>
                <form action="#" method="get" class="form-root">
                    <div class="form-input">
                        <input type="text" name ="customer-name" placeholder="Name" required>
                    </div>
                    <div class="form-input">
                        <input type="email" name="customer-email" placeholder="Email" required>
                    </div>
                    <div class="form-input">
                        <textarea type="text" name="customer-message" placeholder="Message" required></textarea>
                    </div>
                    <button class = "contact-button" type="submit">Send</button>
                </form>
            </div>
        </div>`;

    content.appendChild(contactContainer);
}

export { renderContact };