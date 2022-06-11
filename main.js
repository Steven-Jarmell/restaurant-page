/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContact": () => (/* binding */ renderContact)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


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

    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(contactContainer);
}



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderFooter": () => (/* binding */ renderFooter)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function renderFooter() {
    const footerDiv = document.createElement('div');
    footerDiv.className = 'footer';

    const footerMessage = document.createElement('p');
    footerMessage.innerText = 'Developed by Steven Jarmell for the Odin Project 2022';

    footerDiv.append(footerMessage);

    _index__WEBPACK_IMPORTED_MODULE_0__.content.append(footerDiv);
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHome": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


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

    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(homeDiv);
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






const content = document.getElementById('content');

function loadHome() {
    content.innerHTML = '';
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();
    (0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)();
}

function loadMenu() {
    content.innerHTML = '';
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();
    (0,_menu__WEBPACK_IMPORTED_MODULE_3__.renderMenu)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)();
}

function loadContact() {
    content.innerHTML = '';
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.renderNav)();
    (0,_contact__WEBPACK_IMPORTED_MODULE_4__.renderContact)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)();
}

loadContact();

document.addEventListener('click', (e) => {
    const target = e.target.innerText;

    if (target === 'HOME') loadHome();
    if (target === 'MENU') loadMenu();
    if (target === 'CONTACT') loadContact();
});



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMenu": () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


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

    _index__WEBPACK_IMPORTED_MODULE_0__.content.append(menuDiv);
}



/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNav": () => (/* binding */ renderNav)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


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

    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(nav);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBbUI7QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFjO0FBQ2xCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNia0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQW1CO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJxQztBQUNEO0FBQ0k7QUFDSjtBQUNNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2IsSUFBSSxpREFBVTtBQUNkLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2IsSUFBSSxpREFBVTtBQUNkLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2IsSUFBSSx1REFBYTtBQUNqQixJQUFJLHFEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0Esd0NBQXdDLFVBQVU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFjO0FBQ2xCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR2lDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBbUI7QUFDdkI7QUFDQTs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb250YWN0LWRpdic7XHJcbiAgICBjb250YWN0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDEgY2xhc3M9XCJjb250YWN0LXRpdGxlXCI+Q29udGFjdCB1czwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2NhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjb250YWN0LWluZm9cIj48c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiBpZD1cInN5bWJvbFwiPnBpbl9kcm9wPC9zcGFuPiBDaGFtcCBkZSBNYXJzLCA1IEF2LiBBbmF0b2xlIEZyYW5jZSwgNzUwMDcgUGFyaXMsIEZyYW5jZTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjb250YWN0LWluZm9cIj48c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiBpZD1cInN5bWJvbFwiPm5lc3RfY2xvY2tfZmFyc2lnaHRfYW5hbG9nPC9zcGFuPiBNb24tU2F0OiA4YW0tOHBtPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBob25lLW51bWJlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjb250YWN0LWluZm9cIj48c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiBpZD1cInN5bWJvbFwiPmNhbGw8L3NwYW4+ICg0ODEpLTUxNi0yMzQyPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjb250YWN0LWluZm9cIj48c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiBpZD1cInN5bWJvbFwiPm1haWw8L3NwYW4+IEVtYWlsIHVzPC9hPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIG1ldGhvZD1cImdldFwiIGNsYXNzPVwiZm9ybS1yb290XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZSA9XCJjdXN0b21lci1uYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJjdXN0b21lci1lbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBuYW1lPVwiY3VzdG9tZXItbWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcyA9IFwiY29udGFjdC1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+U2VuZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckNvbnRhY3QgfTsiLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XHJcbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvb3RlckRpdi5jbGFzc05hbWUgPSAnZm9vdGVyJztcclxuXHJcbiAgICBjb25zdCBmb290ZXJNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZm9vdGVyTWVzc2FnZS5pbm5lclRleHQgPSAnRGV2ZWxvcGVkIGJ5IFN0ZXZlbiBKYXJtZWxsIGZvciB0aGUgT2RpbiBQcm9qZWN0IDIwMjInO1xyXG5cclxuICAgIGZvb3RlckRpdi5hcHBlbmQoZm9vdGVyTWVzc2FnZSk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmQoZm9vdGVyRGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyRm9vdGVyIH07IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcclxuICAgIGxldCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lRGl2LmNsYXNzTmFtZSA9ICdob21lLWRpdic7XHJcblxyXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJlc3RhdXJhbnROYW1lRGl2LmlubmVyVGV4dCA9ICdCaWcgQmVucyBCQlEnO1xyXG4gICAgcmVzdGF1cmFudE5hbWVEaXYuY2xhc3NOYW1lID0gJ3Jlc3RhdXJhbnQtdGl0bGUnO1xyXG5cclxuICAgIGNvbnN0IHJlc3RhdXJhbnRTbG9nYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBlbXBoYXNpemVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZW0nKTtcclxuICAgIHJlc3RhdXJhbnRTbG9nYW4uYXBwZW5kQ2hpbGQoZW1waGFzaXplVGV4dCk7XHJcbiAgICBlbXBoYXNpemVUZXh0LmlubmVyVGV4dCA9ICdHZXQgYSBmcmVlIGxvb3NpZSB3aXRoIGV2ZXJ5IHB1cmNoYXNlIG92ZXIgJDcnO1xyXG4gICAgcmVzdGF1cmFudFNsb2dhbi5jbGFzc05hbWUgPSAnc2xvZ2FuJztcclxuXHJcbiAgICBjb25zdCBuZXdMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG5ld0xvY2F0aW9uLmlubmVyVGV4dCA9ICdOZXcgTG9jYXRpb24gT3BlbmluZyBTb29uIGluIFBhcmlzLCBGcmFuY2UhJztcclxuICAgIG5ld0xvY2F0aW9uLmNsYXNzTmFtZSA9ICduZXctbG9jYXRpb24nO1xyXG5cclxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWVEaXYpO1xyXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50U2xvZ2FuKTtcclxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQobmV3TG9jYXRpb24pO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZURpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckhvbWUgfTsiLCJpbXBvcnQgeyByZW5kZXJOYXYgfSBmcm9tIFwiLi9uYXZiYXJcIjtcclxuaW1wb3J0IHsgcmVuZGVySG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgcmVuZGVyRm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCB7IHJlbmRlck1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCB7IHJlbmRlckNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIHJlbmRlck5hdigpO1xyXG4gICAgcmVuZGVySG9tZSgpO1xyXG4gICAgcmVuZGVyRm9vdGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIHJlbmRlck5hdigpO1xyXG4gICAgcmVuZGVyTWVudSgpO1xyXG4gICAgcmVuZGVyRm9vdGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIHJlbmRlck5hdigpO1xyXG4gICAgcmVuZGVyQ29udGFjdCgpO1xyXG4gICAgcmVuZGVyRm9vdGVyKCk7XHJcbn1cclxuXHJcbmxvYWRDb250YWN0KCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5pbm5lclRleHQ7XHJcblxyXG4gICAgaWYgKHRhcmdldCA9PT0gJ0hPTUUnKSBsb2FkSG9tZSgpO1xyXG4gICAgaWYgKHRhcmdldCA9PT0gJ01FTlUnKSBsb2FkTWVudSgpO1xyXG4gICAgaWYgKHRhcmdldCA9PT0gJ0NPTlRBQ1QnKSBsb2FkQ29udGFjdCgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7IGNvbnRlbnQgfTsiLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5jb25zdCBtZW51ID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiU21va2VkIFR1cmtleVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkhlYXBpbmcgc3RhY2sgb2Ygc21va2VkIHR1cmtleSB3aXRoIHlvdXIgY2hvaWNlIG9mIHNpZGUgYW5kIEJCUSBzYXVjZVwiLFxyXG4gICAgICAgIHByaWNlOiBcIiQxNVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkppbW15J3MgQnJpc2tldFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJyaXNrZXQgc21va2VkIGZvciAxMiBob3VycyBwaWxlZCBoaWdoIGFuZCBsYXRoZXJlZCBpbiBvdXIgZmFtb3VzIEJCUSBzYXVjZVwiLFxyXG4gICAgICAgIHByaWNlOiBcIiQyMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkxleXJpJ3MgUmlic1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlJpbGV5J3Mgd29ybGQgZmFtb3VzIHJpYnMgc3RyYWlnaHQgZnJvbSB0aGUgZ3JpbGwgYW5kIGxhdGhlcmVkIGluIG91ciBCQlEgc2F1Y2Ugd2l0aCBhIHNlY3JldCBpbmdyZWRpZW50XCIsXHJcbiAgICAgICAgcHJpY2U6IFwiJDIwXCIsXHJcbiAgICB9XHJcbl07XHJcblxyXG5jb25zdCBzaWRlcyA9IFtcIkJha2VkIEJlYW5zXCIsIFwiRnJlbmNoIEZyaWVzXCIsIFwiTWFjIGFuZCBDaGVlc2VcIiwgXCJDb3JuYnJlYWRcIiwgXCJCYWtlZCBBcHBsZXNcIiwgXCJDb2xlc2xhd1wiXTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XHJcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51RGl2LmNsYXNzTmFtZSA9ICdtZW51LWRpdic7XHJcblxyXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG1lbnVUaXRsZS5jbGFzc05hbWUgPSAnbWVudS10aXRsZSc7XHJcbiAgICBtZW51VGl0bGUuaW5uZXJUZXh0ID0gJ21lbnUnO1xyXG5cclxuICAgIGNvbnN0IGVudHJlZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBlbnRyZWVzVGl0bGUuY2xhc3NOYW1lID0gJ21lbnUtc2VjdGlvbic7XHJcbiAgICBlbnRyZWVzVGl0bGUuaW5uZXJUZXh0ID0gJ2VudHJlZXMnO1xyXG5cclxuICAgIGNvbnN0IHNpZGVzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgc2lkZXNUaXRsZS5jbGFzc05hbWUgPSAnbWVudS1zZWN0aW9uJztcclxuICAgIHNpZGVzVGl0bGUuaW5uZXJUZXh0ID0gJ3NpZGVzJztcclxuXHJcbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVJdGVtcy5jbGFzc05hbWUgPSAnbWVudS1pdGVtcyc7XHJcblxyXG4gICAgbWVudUl0ZW1zLmFwcGVuZChlbnRyZWVzVGl0bGUpO1xyXG5cclxuICAgIG1lbnUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaXRlbURpdi5jbGFzc05hbWUgPSAnaXRlbSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaXRlbVBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBwaWN0dXJlTmFtZSA9IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnXycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChwaWN0dXJlTmFtZSA9PT0gXCJzbW9rZWRfdHVya2V5XCIpIHtcclxuICAgICAgICAgICAgaXRlbVBpY3R1cmUuc3JjID0gYC4vaW1hZ2VzLyR7cGljdHVyZU5hbWV9LmpwZ2A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtUGljdHVyZS5zcmMgPSBgLi9pbWFnZXMvJHtwaWN0dXJlTmFtZX0uYm1wYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlbVBpY3R1cmUuYWx0ID0gYFBpY3R1cmUgb2YgJHtpdGVtLm5hbWV9YDtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpdGVtSW5mby5jbGFzc05hbWUgPSAnaXRlbS1pbmZvJztcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgaXRlbU5hbWUuaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGl0ZW0uZGVzY3JpcHRpb247XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBpdGVtUHJpY2UuaW5uZXJUZXh0ID0gaXRlbS5wcmljZTtcclxuXHJcbiAgICAgICAgaXRlbUluZm8uYXBwZW5kKGl0ZW1OYW1lKTtcclxuICAgICAgICBpdGVtSW5mby5hcHBlbmQoaXRlbURlc2NyaXB0aW9uKTtcclxuICAgICAgICBpdGVtSW5mby5hcHBlbmQoaXRlbVByaWNlKTtcclxuXHJcbiAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtUGljdHVyZSk7XHJcbiAgICAgICAgaXRlbURpdi5hcHBlbmRDaGlsZChpdGVtSW5mbyk7XHJcblxyXG4gICAgICAgIG1lbnVJdGVtcy5hcHBlbmQoaXRlbURpdik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzaWRlSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNpZGVJdGVtcy5jbGFzc05hbWUgPSAnc2lkZS1pdGVtcyc7XHJcblxyXG4gICAgc2lkZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGl0ZW1OYW1lLmlubmVyVGV4dCA9IGl0ZW07XHJcbiAgICAgICAgaXRlbU5hbWUuY2xhc3NOYW1lID0gJ3NpZGUtaXRlbSc7XHJcblxyXG4gICAgICAgIHNpZGVJdGVtcy5hcHBlbmQoaXRlbU5hbWUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWVudUl0ZW1zLmFwcGVuZChzaWRlc1RpdGxlKTtcclxuICAgIG1lbnVJdGVtcy5hcHBlbmQoc2lkZUl0ZW1zKTtcclxuXHJcbiAgICBtZW51RGl2LmFwcGVuZChtZW51VGl0bGUpO1xyXG4gICAgbWVudURpdi5hcHBlbmQobWVudUl0ZW1zKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZChtZW51RGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyTWVudSB9OyIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4J1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyTmF2KCkge1xyXG5cclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBuYXYuY2xhc3NOYW1lID0gJ25hdmJhcic7XHJcbiAgICBcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgaG9tZS5pbm5lclRleHQgPSAnaG9tZSc7XHJcblxyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtZW51LmlubmVyVGV4dCA9ICdtZW51JztcclxuXHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnRhY3QuaW5uZXJUZXh0ID0gJ2NvbnRhY3QnO1xyXG5cclxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51KTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlck5hdiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=