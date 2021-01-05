/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_site_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/site-menu.js */ "./source/js/view/site-menu.js");
/* harmony import */ var _view_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/breadcrumbs.js */ "./source/js/view/breadcrumbs.js");
/* harmony import */ var _view_filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/filters.js */ "./source/js/view/filters.js");
/* harmony import */ var _view_catalog_sort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/catalog-sort.js */ "./source/js/view/catalog-sort.js");
/* harmony import */ var _view_catalog_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/catalog-list.js */ "./source/js/view/catalog-list.js");
/* harmony import */ var _view_catalog_item_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/catalog-item.js */ "./source/js/view/catalog-item.js");
/* harmony import */ var _view_catalog_pagination_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/catalog-pagination.js */ "./source/js/view/catalog-pagination.js");








const PRODUCT_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.page-header`);
const siteCatalogElement = document.querySelector(`.catalog`);
const siteFiltersColumnElement = document.querySelector(`.catalog__filters-column`);
const siteCatalogColumnElement = document.querySelector(`.catalog__catalog-column`);

render(siteHeaderElement, Object(_view_site_menu_js__WEBPACK_IMPORTED_MODULE_0__["createSiteMenuTemplate"])(), `afterbegin`);
render(siteCatalogElement, Object(_view_breadcrumbs_js__WEBPACK_IMPORTED_MODULE_1__["createBreadcrumbsTemplate"])(), `beforebegin`);
render(siteFiltersColumnElement, Object(_view_filters_js__WEBPACK_IMPORTED_MODULE_2__["createFiltersElement"])(), `afterbegin`);
render(siteCatalogColumnElement, Object(_view_catalog_sort_js__WEBPACK_IMPORTED_MODULE_3__["createCatalogSortElement"])(), `beforeend`);
render(siteCatalogColumnElement, Object(_view_catalog_list_js__WEBPACK_IMPORTED_MODULE_4__["createCatalogListElement"])(), `beforeend`);

const siteCatalogColumnListElement = document.querySelector(`.catalog__list`);

for (let i = 0; i < PRODUCT_COUNT; i++) {
  render(siteCatalogColumnListElement, Object(_view_catalog_item_js__WEBPACK_IMPORTED_MODULE_5__["createCatalogItemElement"])(), `afterbegin`);
}

render(siteCatalogColumnElement, Object(_view_catalog_pagination_js__WEBPACK_IMPORTED_MODULE_6__["createCatalogPaginationElement"])(), `beforeend`);


/***/ }),

/***/ "./source/js/view/breadcrumbs.js":
/*!***************************************!*\
  !*** ./source/js/view/breadcrumbs.js ***!
  \***************************************/
/*! exports provided: createBreadcrumbsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBreadcrumbsTemplate", function() { return createBreadcrumbsTemplate; });
const createBreadcrumbsTemplate = () => {
  return (
    `<ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <a href="#" class="breadcrumbs__link">Главная</a>
    </li>
    <li class="breadcrumbs__item breadcrumbs__item--current">
      <a href="#" class="breadcrumbs__link">Каталог</a>
    </li>
  </ul>`
  );
};


/***/ }),

/***/ "./source/js/view/catalog-item.js":
/*!****************************************!*\
  !*** ./source/js/view/catalog-item.js ***!
  \****************************************/
/*! exports provided: createCatalogItemElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCatalogItemElement", function() { return createCatalogItemElement; });
const createCatalogItemElement = () => {
  return (
    `<li class="list__item">
      <img src="img/gitar-electric_1.png" width="80" height="202" alt="Изображение товара">
      <div class="list__rating rating">
        <div class="list__stars rating__stars">
          <span style="width: 85%;"></span>
          <span class="visually-hidden">Rating</span>
        </div>
        <span class="rating__amount">15</span>
      </div>
      <div class="list__descriotion-wrapper">
        <h3>Честер Bass</h3>
        <p>17 500 ₽</p>
      </div>
      <div class="list__navigation-wrapper">
        <a href="" class="catalog__button--info catalog__button">Подробнее</a>
        <a href="" class="catalog__button--buy catalog__button">Купить</a>
      </div>
    </li>`
  );
};


/***/ }),

/***/ "./source/js/view/catalog-list.js":
/*!****************************************!*\
  !*** ./source/js/view/catalog-list.js ***!
  \****************************************/
/*! exports provided: createCatalogListElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCatalogListElement", function() { return createCatalogListElement; });
const createCatalogListElement = () => {
  return (
    `<ul class="catalog__list list"></ul>`
  );
};


/***/ }),

/***/ "./source/js/view/catalog-pagination.js":
/*!**********************************************!*\
  !*** ./source/js/view/catalog-pagination.js ***!
  \**********************************************/
/*! exports provided: createCatalogPaginationElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCatalogPaginationElement", function() { return createCatalogPaginationElement; });
const createCatalogPaginationElement = () => {
  return (
    `<ul class="catalog__pagination pagination">
      <li class="pagination__item pagination__item--current">
        <a href="#">1</a>
      </li>
      <li class="pagination__item">
        <a href="#">2</a>
      </li>
      <li class="pagination__item">
        <a href="#">...</a>
      </li>
      <li class="pagination__item">
        <a href="#">7</a>
      </li>
      <li class="pagination__item pagination__item--button">
        <a href="#">Далее</a>
      </li>
    </ul>`
  );
};


/***/ }),

/***/ "./source/js/view/catalog-sort.js":
/*!****************************************!*\
  !*** ./source/js/view/catalog-sort.js ***!
  \****************************************/
/*! exports provided: createCatalogSortElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCatalogSortElement", function() { return createCatalogSortElement; });
const createCatalogSortElement = () => {
  return (
    `<div class="catalog__sort-wrapper">
      <span>Сортировать:</span>
      <ul class="catalog__sort sort">
        <li class="sort__item sort__item--active">
          <a href="#">по цене</a>
        </li>
        <li class="sort__item">
          <a href="#">по популярности</a>
        </li>
      </ul>
      <div class="catalog__sort-buttons">
        <button class="sort-button sort-button--up sort-button--active" type="button"></button>
        <button class="sort-button sort-button--down" type="button"></button>
      </div>
    </div>`
  );
};


/***/ }),

/***/ "./source/js/view/filters.js":
/*!***********************************!*\
  !*** ./source/js/view/filters.js ***!
  \***********************************/
/*! exports provided: createFiltersElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFiltersElement", function() { return createFiltersElement; });
const createFiltersElement = () => {
  return (
    `<h2>Фильтр</h2>
    <form class="catalog__filters-form" action="#" method="GET">
      <fieldset>
        <h3>Цена, ₽</h3>
        <div class="catalog__filters-price-wrapper">
          <input type="text" name="filters-form-price-from" id="filters-form-price-from" placeholder="1 000" value="1 000">
          <input type="text" name="filters-form-price-to" id="filters-form-price-to" placeholder="30 000" value="30 000">
        </div>
      </fieldset>
      <fieldset>
        <h3>Тип гитар</h3>
        <div class="catalog__filters-type-wrapper">
          <div class="catalog__filters-type-content-wrapper">
            <input class="visually-hidden" type="checkbox" name="filters-form-type" id="filters-form-type-value-1">
            <label for="filters-form-type-value-1">Акустические гитары</label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <input class="visually-hidden" type="checkbox" name="filters-form-type" id="filters-form-type-value-2" checked="">
            <label for="filters-form-type-value-2">Электрогитары</label>
          </div>
          <div class="catalog__filters-type-content-wrapper">
            <input class="visually-hidden" type="checkbox" name="filters-form-type" id="filters-form-type-value-3" checked="">
            <label for="filters-form-type-value-3">Укулеле</label>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <h3>Количество струн</h3>
        <div class="catalog__filters-amount-wrapper">
          <label>
            <input class="visually-hidden" type="checkbox" name="filters-form-amount" id="4" checked="">
            <span>4</span>
          </label>
          <label>
            <input class="visually-hidden" type="checkbox" name="filters-form-amount" id="6" checked="">
            <span>6</span>
          </label>
          <label>
            <input class="visually-hidden" type="checkbox" name="filters-form-amount" id="7">
            <span>7</span>
          </label>
          <label>
            <input class="visually-hidden" type="checkbox" name="filters-form-amount" id="12" disabled="">
            <span>12</span>
          </label>
        </div>
      </fieldset>
      <button type="submit" disabled="">показать</button>
    </form>`
  );
};


/***/ }),

/***/ "./source/js/view/site-menu.js":
/*!*************************************!*\
  !*** ./source/js/view/site-menu.js ***!
  \*************************************/
/*! exports provided: createSiteMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSiteMenuTemplate", function() { return createSiteMenuTemplate; });
const createSiteMenuTemplate = () => {
  return `<nav class="main-nav">
    <div class="container">
      <div class="main-nav__wrapper">
        <a class="main-nav__logo">
          <svg width="67" height="70">
            <use xlink:href="img/sprite.svg#logo"></use>
          </svg>
        </a>
        <ul class="main-nav__list site-list">
          <li class="site-list__item">
            <a href="#">Каталог</a>
          </li>
          <li class="site-list__item">
            <a href="#">Где купить?</a>
          </li>
          <li class="site-list__item">
            <a href="#">О компании</a>
          </li>
          <li class="site-list__item">
            <a href="#">Cервис-центры</a>
          </li>
        </ul>
        <ul class="main-nav__list user-list">
          <li class="user-list__item user-list__item--location">
            <a href="#">
              <span class="visually-hidden">Локация</span>
              <svg width="14" height="17">
                <use xlink:href="img/sprite.svg#icon_location"></use>
              </svg>
                <!-- <img src="img/icon_location.svg" width="14" height="17" alt="Локация"> -->
            </a>
          </li>
          <li class="user-list__item user-list__item--search">
            <a href="#">
              <span class="visually-hidden">Поиск по сайту</span>
              <svg width="14" height="14">
                <use xlink:href="img/sprite.svg#icon_search"></use>
              </svg>
              <!-- <img src="img/icon_search.svg" width="14" height="14" alt="Поиск по сайту"> -->
            </a>
          </li>
          <li class="user-list__item user-list__item--basket">
            <a href="basket.html">
              <span class="visually-hidden">Корзина</span>
              <svg width="16" height="18">
                <use xlink:href="img/sprite.svg#icon_basket"></use>
              </svg>
              <!-- <img src="img/icon_basket.svg" width="16" height="18" alt="Корзина"> -->
            </a>
            <span class="" data-title="2"></span>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map