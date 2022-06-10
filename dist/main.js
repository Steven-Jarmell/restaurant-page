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

function renderMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu-div';

    const menuTitle = document.createElement('h1');
    menuTitle.className = 'menu-title';
    menuTitle.innerText = 'menu';

    const menuItems = document.createElement('div');
    menuItems.className = 'menu-items';

    menu.forEach((item) => {

        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        
        const itemPicture = document.createElement('img');
        const pictureName = item.name.toLowerCase().replace(' ', '_');
        
        if (pictureName === "smoked_turkey") {
            console.log(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFjO0FBQ2xCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNia0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQW1CO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnFDO0FBQ0Q7QUFDSTtBQUNKO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2IsSUFBSSxpREFBVTtBQUNkLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2IsSUFBSSxpREFBVTtBQUNkLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBLHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQWM7QUFDbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNFaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFtQjtBQUN2QjtBQUNBOzs7Ozs7O1VDdEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udGVudCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xyXG4gICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb290ZXJEaXYuY2xhc3NOYW1lID0gJ2Zvb3Rlcic7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGZvb3Rlck1lc3NhZ2UuaW5uZXJUZXh0ID0gJ0RldmVsb3BlZCBieSBTdGV2ZW4gSmFybWVsbCBmb3IgdGhlIE9kaW4gUHJvamVjdCAyMDIyJztcclxuXHJcbiAgICBmb290ZXJEaXYuYXBwZW5kKGZvb3Rlck1lc3NhZ2UpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKGZvb3RlckRpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckZvb3RlciB9OyIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XHJcbiAgICBsZXQgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG9tZURpdi5jbGFzc05hbWUgPSAnaG9tZS1kaXYnO1xyXG5cclxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZXN0YXVyYW50TmFtZURpdi5pbm5lclRleHQgPSAnQmlnIEJlbnMgQkJRJztcclxuICAgIHJlc3RhdXJhbnROYW1lRGl2LmNsYXNzTmFtZSA9ICdyZXN0YXVyYW50LXRpdGxlJztcclxuXHJcbiAgICBjb25zdCByZXN0YXVyYW50U2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgZW1waGFzaXplVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2VtJyk7XHJcbiAgICByZXN0YXVyYW50U2xvZ2FuLmFwcGVuZENoaWxkKGVtcGhhc2l6ZVRleHQpO1xyXG4gICAgZW1waGFzaXplVGV4dC5pbm5lclRleHQgPSAnR2V0IGEgZnJlZSBsb29zaWUgd2l0aCBldmVyeSBwdXJjaGFzZSBvdmVyICQ3JztcclxuICAgIHJlc3RhdXJhbnRTbG9nYW4uY2xhc3NOYW1lID0gJ3Nsb2dhbic7XHJcblxyXG4gICAgY29uc3QgbmV3TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBuZXdMb2NhdGlvbi5pbm5lclRleHQgPSAnTmV3IExvY2F0aW9uIE9wZW5pbmcgU29vbiBpbiBQYXJpcywgRnJhbmNlISc7XHJcbiAgICBuZXdMb2NhdGlvbi5jbGFzc05hbWUgPSAnbmV3LWxvY2F0aW9uJztcclxuXHJcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lRGl2KTtcclxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFNsb2dhbik7XHJcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKG5ld0xvY2F0aW9uKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJIb21lIH07IiwiaW1wb3J0IHsgcmVuZGVyTmF2IH0gZnJvbSBcIi4vbmF2YmFyXCI7XHJcbmltcG9ydCB7IHJlbmRlckhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IHJlbmRlckZvb3RlciB9IGZyb20gXCIuL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICByZW5kZXJOYXYoKTtcclxuICAgIHJlbmRlckhvbWUoKTtcclxuICAgIHJlbmRlckZvb3RlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICByZW5kZXJOYXYoKTtcclxuICAgIHJlbmRlck1lbnUoKTtcclxuICAgIHJlbmRlckZvb3RlcigpO1xyXG59XHJcblxyXG5sb2FkSG9tZSgpO1xyXG5cclxuZXhwb3J0IHsgY29udGVudCB9OyIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmNvbnN0IG1lbnUgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTbW9rZWQgVHVya2V5XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSGVhcGluZyBzdGFjayBvZiBzbW9rZWQgdHVya2V5IHdpdGggeW91ciBjaG9pY2Ugb2Ygc2lkZSBhbmQgQkJRIHNhdWNlXCIsXHJcbiAgICAgICAgcHJpY2U6IFwiJDE1XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiSmltbXkncyBCcmlza2V0XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQnJpc2tldCBzbW9rZWQgZm9yIDEyIGhvdXJzIHBpbGVkIGhpZ2ggYW5kIGxhdGhlcmVkIGluIG91ciBmYW1vdXMgQkJRIHNhdWNlXCIsXHJcbiAgICAgICAgcHJpY2U6IFwiJDIwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiTGV5cmkncyBSaWJzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUmlsZXkncyB3b3JsZCBmYW1vdXMgcmlicyBzdHJhaWdodCBmcm9tIHRoZSBncmlsbCBhbmQgbGF0aGVyZWQgaW4gb3VyIEJCUSBzYXVjZSB3aXRoIGEgc2VjcmV0IGluZ3JlZGllbnRcIixcclxuICAgICAgICBwcmljZTogXCIkMjBcIixcclxuICAgIH1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XHJcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51RGl2LmNsYXNzTmFtZSA9ICdtZW51LWRpdic7XHJcblxyXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIG1lbnVUaXRsZS5jbGFzc05hbWUgPSAnbWVudS10aXRsZSc7XHJcbiAgICBtZW51VGl0bGUuaW5uZXJUZXh0ID0gJ21lbnUnO1xyXG5cclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUl0ZW1zLmNsYXNzTmFtZSA9ICdtZW51LWl0ZW1zJztcclxuXHJcbiAgICBtZW51LmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGl0ZW1EaXYuY2xhc3NOYW1lID0gJ2l0ZW0nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGl0ZW1QaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgcGljdHVyZU5hbWUgPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCcgJywgJ18nKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAocGljdHVyZU5hbWUgPT09IFwic21va2VkX3R1cmtleVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKDEpO1xyXG4gICAgICAgICAgICBpdGVtUGljdHVyZS5zcmMgPSBgLi9pbWFnZXMvJHtwaWN0dXJlTmFtZX0uanBnYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1QaWN0dXJlLnNyYyA9IGAuL2ltYWdlcy8ke3BpY3R1cmVOYW1lfS5ibXBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtUGljdHVyZS5hbHQgPSBgUGljdHVyZSBvZiAke2l0ZW0ubmFtZX1gO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBpdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGl0ZW1JbmZvLmNsYXNzTmFtZSA9ICdpdGVtLWluZm8nO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBpdGVtTmFtZS5pbm5lclRleHQgPSBpdGVtLm5hbWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBpdGVtRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGl0ZW1QcmljZS5pbm5lclRleHQgPSBpdGVtLnByaWNlO1xyXG5cclxuICAgICAgICBpdGVtSW5mby5hcHBlbmQoaXRlbU5hbWUpO1xyXG4gICAgICAgIGl0ZW1JbmZvLmFwcGVuZChpdGVtRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGl0ZW1JbmZvLmFwcGVuZChpdGVtUHJpY2UpO1xyXG5cclxuICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1QaWN0dXJlKTtcclxuICAgICAgICBpdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1JbmZvKTtcclxuXHJcbiAgICAgICAgbWVudUl0ZW1zLmFwcGVuZChpdGVtRGl2KTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1lbnVEaXYuYXBwZW5kKG1lbnVUaXRsZSk7XHJcbiAgICBtZW51RGl2LmFwcGVuZChtZW51SXRlbXMpO1xyXG4gICAgY29udGVudC5hcHBlbmQobWVudURpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlck1lbnUgfTsiLCJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9pbmRleCdcclxuXHJcbmZ1bmN0aW9uIHJlbmRlck5hdigpIHtcclxuXHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbmF2LmNsYXNzTmFtZSA9ICduYXZiYXInO1xyXG4gICAgXHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGhvbWUuaW5uZXJUZXh0ID0gJ2hvbWUnO1xyXG5cclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWVudS5pbm5lclRleHQgPSAnbWVudSc7XHJcblxyXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgYWJvdXQuaW5uZXJUZXh0ID0gJ2Fib3V0JztcclxuXHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYWJvdXQpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyTmF2IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==