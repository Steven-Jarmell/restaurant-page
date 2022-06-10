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

    if (target === 'HOME') {
        console.log(3);
        loadHome();
    }
    if (target === 'MENU') {
        console.log(5);
        loadMenu();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFjO0FBQ2xCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNia0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQW1CO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnFDO0FBQ0Q7QUFDSTtBQUNKO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2IsSUFBSSxpREFBVTtBQUNkLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2IsSUFBSSxpREFBVTtBQUNkLElBQUkscURBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0Esd0NBQXdDLFVBQVU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBYztBQUNsQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0VpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQW1CO0FBQ3ZCO0FBQ0E7Ozs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XHJcbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvb3RlckRpdi5jbGFzc05hbWUgPSAnZm9vdGVyJztcclxuXHJcbiAgICBjb25zdCBmb290ZXJNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZm9vdGVyTWVzc2FnZS5pbm5lclRleHQgPSAnRGV2ZWxvcGVkIGJ5IFN0ZXZlbiBKYXJtZWxsIGZvciB0aGUgT2RpbiBQcm9qZWN0IDIwMjInO1xyXG5cclxuICAgIGZvb3RlckRpdi5hcHBlbmQoZm9vdGVyTWVzc2FnZSk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmQoZm9vdGVyRGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyRm9vdGVyIH07IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcclxuICAgIGxldCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lRGl2LmNsYXNzTmFtZSA9ICdob21lLWRpdic7XHJcblxyXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJlc3RhdXJhbnROYW1lRGl2LmlubmVyVGV4dCA9ICdCaWcgQmVucyBCQlEnO1xyXG4gICAgcmVzdGF1cmFudE5hbWVEaXYuY2xhc3NOYW1lID0gJ3Jlc3RhdXJhbnQtdGl0bGUnO1xyXG5cclxuICAgIGNvbnN0IHJlc3RhdXJhbnRTbG9nYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBlbXBoYXNpemVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZW0nKTtcclxuICAgIHJlc3RhdXJhbnRTbG9nYW4uYXBwZW5kQ2hpbGQoZW1waGFzaXplVGV4dCk7XHJcbiAgICBlbXBoYXNpemVUZXh0LmlubmVyVGV4dCA9ICdHZXQgYSBmcmVlIGxvb3NpZSB3aXRoIGV2ZXJ5IHB1cmNoYXNlIG92ZXIgJDcnO1xyXG4gICAgcmVzdGF1cmFudFNsb2dhbi5jbGFzc05hbWUgPSAnc2xvZ2FuJztcclxuXHJcbiAgICBjb25zdCBuZXdMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG5ld0xvY2F0aW9uLmlubmVyVGV4dCA9ICdOZXcgTG9jYXRpb24gT3BlbmluZyBTb29uIGluIFBhcmlzLCBGcmFuY2UhJztcclxuICAgIG5ld0xvY2F0aW9uLmNsYXNzTmFtZSA9ICduZXctbG9jYXRpb24nO1xyXG5cclxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWVEaXYpO1xyXG4gICAgaG9tZURpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50U2xvZ2FuKTtcclxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQobmV3TG9jYXRpb24pO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZURpdik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlbmRlckhvbWUgfTsiLCJpbXBvcnQgeyByZW5kZXJOYXYgfSBmcm9tIFwiLi9uYXZiYXJcIjtcclxuaW1wb3J0IHsgcmVuZGVySG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgcmVuZGVyRm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCB7IHJlbmRlck1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIHJlbmRlck5hdigpO1xyXG4gICAgcmVuZGVySG9tZSgpO1xyXG4gICAgcmVuZGVyRm9vdGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIHJlbmRlck5hdigpO1xyXG4gICAgcmVuZGVyTWVudSgpO1xyXG4gICAgcmVuZGVyRm9vdGVyKCk7XHJcbn1cclxuXHJcbmxvYWRIb21lKCk7XHJcblxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmlubmVyVGV4dDtcclxuXHJcbiAgICBpZiAodGFyZ2V0ID09PSAnSE9NRScpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygzKTtcclxuICAgICAgICBsb2FkSG9tZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRhcmdldCA9PT0gJ01FTlUnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coNSk7XHJcbiAgICAgICAgbG9hZE1lbnUoKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgeyBjb250ZW50IH07IiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuY29uc3QgbWVudSA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlNtb2tlZCBUdXJrZXlcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJIZWFwaW5nIHN0YWNrIG9mIHNtb2tlZCB0dXJrZXkgd2l0aCB5b3VyIGNob2ljZSBvZiBzaWRlIGFuZCBCQlEgc2F1Y2VcIixcclxuICAgICAgICBwcmljZTogXCIkMTVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJKaW1teSdzIEJyaXNrZXRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJCcmlza2V0IHNtb2tlZCBmb3IgMTIgaG91cnMgcGlsZWQgaGlnaCBhbmQgbGF0aGVyZWQgaW4gb3VyIGZhbW91cyBCQlEgc2F1Y2VcIixcclxuICAgICAgICBwcmljZTogXCIkMjBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJMZXlyaSdzIFJpYnNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJSaWxleSdzIHdvcmxkIGZhbW91cyByaWJzIHN0cmFpZ2h0IGZyb20gdGhlIGdyaWxsIGFuZCBsYXRoZXJlZCBpbiBvdXIgQkJRIHNhdWNlIHdpdGggYSBzZWNyZXQgaW5ncmVkaWVudFwiLFxyXG4gICAgICAgIHByaWNlOiBcIiQyMFwiLFxyXG4gICAgfVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcclxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVEaXYuY2xhc3NOYW1lID0gJ21lbnUtZGl2JztcclxuXHJcbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgbWVudVRpdGxlLmNsYXNzTmFtZSA9ICdtZW51LXRpdGxlJztcclxuICAgIG1lbnVUaXRsZS5pbm5lclRleHQgPSAnbWVudSc7XHJcblxyXG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51SXRlbXMuY2xhc3NOYW1lID0gJ21lbnUtaXRlbXMnO1xyXG5cclxuICAgIG1lbnUuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaXRlbURpdi5jbGFzc05hbWUgPSAnaXRlbSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaXRlbVBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCBwaWN0dXJlTmFtZSA9IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnXycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChwaWN0dXJlTmFtZSA9PT0gXCJzbW9rZWRfdHVya2V5XCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coMSk7XHJcbiAgICAgICAgICAgIGl0ZW1QaWN0dXJlLnNyYyA9IGAuL2ltYWdlcy8ke3BpY3R1cmVOYW1lfS5qcGdgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbVBpY3R1cmUuc3JjID0gYC4vaW1hZ2VzLyR7cGljdHVyZU5hbWV9LmJtcGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZW1QaWN0dXJlLmFsdCA9IGBQaWN0dXJlIG9mICR7aXRlbS5uYW1lfWA7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaXRlbUluZm8uY2xhc3NOYW1lID0gJ2l0ZW0taW5mbyc7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGl0ZW1OYW1lLmlubmVyVGV4dCA9IGl0ZW0ubmFtZTtcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBpdGVtLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgaXRlbVByaWNlLmlubmVyVGV4dCA9IGl0ZW0ucHJpY2U7XHJcblxyXG4gICAgICAgIGl0ZW1JbmZvLmFwcGVuZChpdGVtTmFtZSk7XHJcbiAgICAgICAgaXRlbUluZm8uYXBwZW5kKGl0ZW1EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgaXRlbUluZm8uYXBwZW5kKGl0ZW1QcmljZSk7XHJcblxyXG4gICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbVBpY3R1cmUpO1xyXG4gICAgICAgIGl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbUluZm8pO1xyXG5cclxuICAgICAgICBtZW51SXRlbXMuYXBwZW5kKGl0ZW1EaXYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWVudURpdi5hcHBlbmQobWVudVRpdGxlKTtcclxuICAgIG1lbnVEaXYuYXBwZW5kKG1lbnVJdGVtcyk7XHJcbiAgICBjb250ZW50LmFwcGVuZChtZW51RGl2KTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyTWVudSB9OyIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4J1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyTmF2KCkge1xyXG5cclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBuYXYuY2xhc3NOYW1lID0gJ25hdmJhcic7XHJcbiAgICBcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgaG9tZS5pbm5lclRleHQgPSAnaG9tZSc7XHJcblxyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtZW51LmlubmVyVGV4dCA9ICdtZW51JztcclxuXHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBhYm91dC5pbm5lclRleHQgPSAnYWJvdXQnO1xyXG5cclxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51KTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChhYm91dCk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJOYXYgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9