import SiteMenuView from "./view/site-menu.js";
import BreadcrumbsView from "./view/breadcrumbs.js";
// import FiltersView from "./view/filters.js";
import CatalogPresenter from "./presenter/catalog.js";
import FilterPresenter from "./presenter/filter.js";
import CardsModel from "./model/cards.js";
import FilterModel from "./model/filter.js";

import {generateProduct} from "./mock/product.js";
import {render, RenderPosition} from "./utils/render.js";

const PRODUCT_COUNT = 10;

const cards = new Array(PRODUCT_COUNT).fill().map(generateProduct);

const cardsModel = new CardsModel();
cardsModel.setCards(cards);

const filterModel = new FilterModel();

const siteHeaderElement = document.querySelector(`.page-header`);
const siteCatalogElement = document.querySelector(`.catalog`);
const siteCatalogWrapperElement = document.querySelector(`.catalog__content-wrapper`);
const siteFiltersColumnElement = document.querySelector(`.catalog__filters-column`);

// const filtersComponent = new FiltersView(cards);
const catalogPresenter = new CatalogPresenter(siteCatalogWrapperElement, cardsModel, filterModel);
const filterPresenter = new FilterPresenter(siteFiltersColumnElement, filterModel, cardsModel);

render(siteHeaderElement, new SiteMenuView(), RenderPosition.AFTERBEGIN);
render(siteCatalogElement, new BreadcrumbsView(), RenderPosition.BEFOREBEGIN);
// render(siteFiltersColumnElement, filtersComponent, RenderPosition.BEFOREEND);

filterPresenter.init();
catalogPresenter.init();