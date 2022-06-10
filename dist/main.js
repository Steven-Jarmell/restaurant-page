/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

loadHome();

document.addEventListener('click', (e) => {
    const target = e.target.innerText;

    if (target === 'HOME') loadHome();
    if (target === 'MENU') loadMenu();
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

    const about = document.createElement('li');
    about.innerText = 'about';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFjO0FBQ2xCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNia0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQW1CO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnFDO0FBQ0Q7QUFDSTtBQUNKO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2IsSUFBSSxpREFBVTtBQUNkLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2IsSUFBSSxpREFBVTtBQUNkLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0Esd0NBQXdDLFVBQVU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFjO0FBQ2xCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR2lDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBbUI7QUFDdkI7QUFDQTs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckZvb3RlcigpIHtcclxuICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyRGl2LmNsYXNzTmFtZSA9ICdmb290ZXInO1xyXG5cclxuICAgIGNvbnN0IGZvb3Rlck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBmb290ZXJNZXNzYWdlLmlubmVyVGV4dCA9ICdEZXZlbG9wZWQgYnkgU3RldmVuIEphcm1lbGwgZm9yIHRoZSBPZGluIFByb2plY3QgMjAyMic7XHJcblxyXG4gICAgZm9vdGVyRGl2LmFwcGVuZChmb290ZXJNZXNzYWdlKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZChmb290ZXJEaXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJGb290ZXIgfTsiLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJIb21lKCkge1xyXG4gICAgbGV0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWVEaXYuY2xhc3NOYW1lID0gJ2hvbWUtZGl2JztcclxuXHJcbiAgICBjb25zdCByZXN0YXVyYW50TmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmVzdGF1cmFudE5hbWVEaXYuaW5uZXJUZXh0ID0gJ0JpZyBCZW5zIEJCUSc7XHJcbiAgICByZXN0YXVyYW50TmFtZURpdi5jbGFzc05hbWUgPSAncmVzdGF1cmFudC10aXRsZSc7XHJcblxyXG4gICAgY29uc3QgcmVzdGF1cmFudFNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGVtcGhhc2l6ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdlbScpO1xyXG4gICAgcmVzdGF1cmFudFNsb2dhbi5hcHBlbmRDaGlsZChlbXBoYXNpemVUZXh0KTtcclxuICAgIGVtcGhhc2l6ZVRleHQuaW5uZXJUZXh0ID0gJ0dldCBhIGZyZWUgbG9vc2llIHdpdGggZXZlcnkgcHVyY2hhc2Ugb3ZlciAkNyc7XHJcbiAgICByZXN0YXVyYW50U2xvZ2FuLmNsYXNzTmFtZSA9ICdzbG9nYW4nO1xyXG5cclxuICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbmV3TG9jYXRpb24uaW5uZXJUZXh0ID0gJ05ldyBMb2NhdGlvbiBPcGVuaW5nIFNvb24gaW4gUGFyaXMsIEZyYW5jZSEnO1xyXG4gICAgbmV3TG9jYXRpb24uY2xhc3NOYW1lID0gJ25ldy1sb2NhdGlvbic7XHJcblxyXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZURpdik7XHJcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRTbG9nYW4pO1xyXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChuZXdMb2NhdGlvbik7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lRGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVySG9tZSB9OyIsImltcG9ydCB7IHJlbmRlck5hdiB9IGZyb20gXCIuL25hdmJhclwiO1xyXG5pbXBvcnQgeyByZW5kZXJIb21lIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyByZW5kZXJGb290ZXIgfSBmcm9tIFwiLi9mb290ZXJcIjtcclxuaW1wb3J0IHsgcmVuZGVyTWVudSB9IGZyb20gXCIuL21lbnVcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgcmVuZGVyTmF2KCk7XHJcbiAgICByZW5kZXJIb21lKCk7XHJcbiAgICByZW5kZXJGb290ZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgcmVuZGVyTmF2KCk7XHJcbiAgICByZW5kZXJNZW51KCk7XHJcbiAgICByZW5kZXJGb290ZXIoKTtcclxufVxyXG5cclxubG9hZEhvbWUoKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmlubmVyVGV4dDtcclxuXHJcbiAgICBpZiAodGFyZ2V0ID09PSAnSE9NRScpIGxvYWRIb21lKCk7XHJcbiAgICBpZiAodGFyZ2V0ID09PSAnTUVOVScpIGxvYWRNZW51KCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IHsgY29udGVudCB9OyIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmNvbnN0IG1lbnUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTbW9rZWQgVHVya2V5XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSGVhcGluZyBzdGFjayBvZiBzbW9rZWQgdHVya2V5IHdpdGggeW91ciBjaG9pY2Ugb2Ygc2lkZSBhbmQgQkJRIHNhdWNlXCIsXHJcbiAgICAgICAgcHJpY2U6IFwiJDE1XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiSmltbXkncyBCcmlza2V0XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQnJpc2tldCBzbW9rZWQgZm9yIDEyIGhvdXJzIHBpbGVkIGhpZ2ggYW5kIGxhdGhlcmVkIGluIG91ciBmYW1vdXMgQkJRIHNhdWNlXCIsXHJcbiAgICAgICAgcHJpY2U6IFwiJDIwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiTGV5cmkncyBSaWJzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUmlsZXkncyB3b3JsZCBmYW1vdXMgcmlicyBzdHJhaWdodCBmcm9tIHRoZSBncmlsbCBhbmQgbGF0aGVyZWQgaW4gb3VyIEJCUSBzYXVjZSB3aXRoIGEgc2VjcmV0IGluZ3JlZGllbnRcIixcclxuICAgICAgICBwcmljZTogXCIkMjBcIixcclxuICAgIH1cclxuXTtcclxuXHJcbmNvbnN0IHNpZGVzID0gW1wiQmFrZWQgQmVhbnNcIiwgXCJGcmVuY2ggRnJpZXNcIiwgXCJNYWMgYW5kIENoZWVzZVwiLCBcIkNvcm5icmVhZFwiLCBcIkJha2VkIEFwcGxlc1wiLCBcIkNvbGVzbGF3XCJdO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcclxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVEaXYuY2xhc3NOYW1lID0gJ21lbnUtZGl2JztcclxuXHJcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbWVudVRpdGxlLmNsYXNzTmFtZSA9ICdtZW51LXRpdGxlJztcclxuICAgIG1lbnVUaXRsZS5pbm5lclRleHQgPSAnbWVudSc7XHJcblxyXG4gICAgY29uc3QgZW50cmVlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGVudHJlZXNUaXRsZS5jbGFzc05hbWUgPSAnbWVudS1zZWN0aW9uJztcclxuICAgIGVudHJlZXNUaXRsZS5pbm5lclRleHQgPSAnZW50cmVlcyc7XHJcblxyXG4gICAgY29uc3Qgc2lkZXNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBzaWRlc1RpdGxlLmNsYXNzTmFtZSA9ICdtZW51LXNlY3Rpb24nO1xyXG4gICAgc2lkZXNUaXRsZS5pbm5lclRleHQgPSAnc2lkZXMnO1xyXG5cclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUl0ZW1zLmNsYXNzTmFtZSA9ICdtZW51LWl0ZW1zJztcclxuXHJcbiAgICBtZW51SXRlbXMuYXBwZW5kKGVudHJlZXNUaXRsZSk7XHJcblxyXG4gICAgbWVudS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpdGVtRGl2LmNsYXNzTmFtZSA9ICdpdGVtJztcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpdGVtUGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IHBpY3R1cmVOYW1lID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnICcsICdfJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHBpY3R1cmVOYW1lID09PSBcInNtb2tlZF90dXJrZXlcIikge1xyXG4gICAgICAgICAgICBpdGVtUGljdHVyZS5zcmMgPSBgLi9pbWFnZXMvJHtwaWN0dXJlTmFtZX0uanBnYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1QaWN0dXJlLnNyYyA9IGAuL2ltYWdlcy8ke3BpY3R1cmVOYW1lfS5ibXBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtUGljdHVyZS5hbHQgPSBgUGljdHVyZSBvZiAke2l0ZW0ubmFtZX1gO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBpdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGl0ZW1JbmZvLmNsYXNzTmFtZSA9ICdpdGVtLWluZm8nO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBpdGVtTmFtZS5pbm5lclRleHQgPSBpdGVtLm5hbWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBpdGVtRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGl0ZW1QcmljZS5pbm5lclRleHQgPSBpdGVtLnByaWNlO1xyXG5cclxuICAgICAgICBpdGVtSW5mby5hcHBlbmQoaXRlbU5hbWUpO1xyXG4gICAgICAgIGl0ZW1JbmZvLmFwcGVuZChpdGVtRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGl0ZW1JbmZvLmFwcGVuZChpdGVtUHJpY2UpO1xyXG5cclxuICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1QaWN0dXJlKTtcclxuICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1JbmZvKTtcclxuXHJcbiAgICAgICAgbWVudUl0ZW1zLmFwcGVuZChpdGVtRGl2KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNpZGVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2lkZUl0ZW1zLmNsYXNzTmFtZSA9ICdzaWRlLWl0ZW1zJztcclxuXHJcbiAgICBzaWRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgaXRlbU5hbWUuaW5uZXJUZXh0ID0gaXRlbTtcclxuICAgICAgICBpdGVtTmFtZS5jbGFzc05hbWUgPSAnc2lkZS1pdGVtJztcclxuXHJcbiAgICAgICAgc2lkZUl0ZW1zLmFwcGVuZChpdGVtTmFtZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtZW51SXRlbXMuYXBwZW5kKHNpZGVzVGl0bGUpO1xyXG4gICAgbWVudUl0ZW1zLmFwcGVuZChzaWRlSXRlbXMpO1xyXG5cclxuICAgIG1lbnVEaXYuYXBwZW5kKG1lbnVUaXRsZSk7XHJcbiAgICBtZW51RGl2LmFwcGVuZChtZW51SXRlbXMpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKG1lbnVEaXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJNZW51IH07IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gJy4vaW5kZXgnXHJcblxyXG5mdW5jdGlvbiByZW5kZXJOYXYoKSB7XHJcblxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIG5hdi5jbGFzc05hbWUgPSAnbmF2YmFyJztcclxuICAgIFxyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBob21lLmlubmVyVGV4dCA9ICdob21lJztcclxuXHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1lbnUuaW5uZXJUZXh0ID0gJ21lbnUnO1xyXG5cclxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGFib3V0LmlubmVyVGV4dCA9ICdhYm91dCc7XHJcblxyXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGFib3V0KTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlck5hdiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=