import CatalogBoardView from "../view/catalog-board.js";
import CatalogSortView from "../view/catalog-sort.js";
import CatalogListView from "../view/catalog-list.js";
import CatalogPaginationView from "../view/catalog-pagination.js";

import CardPresenter from "../presenter/card.js";
import BasketPresenter from "../presenter/basket.js";
import FilterPresenter from "../presenter/filter.js";

import {render, RenderPosition, remove} from "../utils/render.js";
import {sortPriceUp, sortPriceDown, sortPopularityUp, sortPopularityDown} from "../utils/card.js";
import {SortType, OrderType} from "../const.js";
import {filteredCardsByKey} from "../utils/filter.js";
import {MenuItem} from "../const.js";

const CARD_COUNT_PER_STEP = 9;

export default class Board {
  constructor(catalogContainer, cardsModel, filterModel, siteMenuModel) {
    this._cardsModel = cardsModel;
    this._filterModel = filterModel;
    this._siteMenuModel = siteMenuModel;
    this._catalogContainer = catalogContainer;
    this._renderedCardsCount = CARD_COUNT_PER_STEP;
    this._currentSortType = SortType.DEFAULT;
    this._currentOrderType = OrderType.DEFAULT;
    this._cardPresenter = {};

    this._catalogComponent = new CatalogBoardView();
    this._catalogListComponent = new CatalogListView();
    this._catalogPaginationComponent = new CatalogPaginationView();

    this._filterPresenter = new FilterPresenter(this._catalogContainer, this._filterModel, this._cardsModel);

    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._handleOrderTypeChange = this._handleOrderTypeChange.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleMenuModel = this._handleMenuModel.bind(this);
    // this._handleModeChange = this._handleModeChange.bind(this);
    this._siteMenuModel.addObserver(this._handleMenuModel);
  }

  init() {
    render(this._catalogContainer, this._catalogComponent, RenderPosition.BEFOREEND);
    render(this._catalogComponent, this._catalogListComponent, RenderPosition.BEFOREEND);

    this._cardsModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);

    this._renderBoard();
  }

  destroy() {
    // console.log(2);
    this._clearBoard({resetRenderedCardsCount: true, resetSortType: true});

    remove(this._catalogListComponent);
    remove(this._catalogComponent);

    this._cardsModel.removeObserver(this._handleModelEvent);
    this._filterModel.removeObserver(this._handleModelEvent);
  }

  _getCards() {
    const filterType = this._filterModel.getFilter();
    const cards = this._cardsModel.getCards();

    let filteredCards = null;

    if (filterType.length !== 0) {
      filteredCards = filteredCardsByKey(cards, filterType);
    } else {
      filteredCards = cards;
    }

    switch (this._currentSortType) {
      case SortType.DEFAULT:
        if (this._currentOrderType === OrderType.UP) {
          this._currentSortType = SortType.PRICE;
          return filteredCards.sort(sortPopularityUp);
        }
        if (this._currentOrderType === OrderType.DOWN) {
          this._currentSortType = SortType.PRICE;
          return filteredCards.sort(sortPopularityDown);
        }
        break;
      case SortType.PRICE:
        if (this._currentOrderType === OrderType.DEFAULT) {
          this._currentOrderType = OrderType.UP;
          return filteredCards.sort(sortPriceUp);
        }
        if (this._currentOrderType === OrderType.UP) {
          return filteredCards.sort(sortPriceUp);
        }
        if (this._currentOrderType === OrderType.DOWN) {
          return filteredCards.sort(sortPriceDown);
        }
        break;
      case SortType.POPULARITY:
        if (this._currentOrderType === OrderType.DEFAULT) {
          this._currentOrderType = OrderType.UP;
          return filteredCards.sort(sortPopularityUp);
        }
        if (this._currentOrderType === OrderType.UP) {
          return filteredCards.sort(sortPopularityUp);
        }
        if (this._currentOrderType === OrderType.DOWN) {
          return filteredCards.sort(sortPopularityDown);
        }
        break;
    }

    return filteredCards;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;

    this._clearBoard({resetRenderedCardsCount: true});
    this._renderBoard();
  }

  _handleOrderTypeChange(orderType) {
    if (this._currentOrderType === orderType) {
      return;
    }

    this._currentOrderType = orderType;

    this._clearBoard({resetRenderedCardsCount: true});
    this._renderBoard();
  }

  _handleModelEvent() {
    this._clearBoard({resetRenderedCardsCount: true});
    this._renderBoard();
  }


  _handleMenuModel(menuItem) {
    switch (menuItem) {
      case MenuItem.CARDS:

        this.destroy();
        this.init();
        this._basketPresenter.destroy();
        break;
      case MenuItem.BASKET:
        this.destroy();
        this._filterPresenter.destroy();

        const siteMainElement = document.querySelector(`.page-main`);
        const siteMainContainerElement = siteMainElement.querySelector(`.container`);

        this._basketPresenter = new BasketPresenter(siteMainContainerElement);

        this._basketPresenter.init();
        break;
    }
  }

  _renderSort() {
    if (this._catalogSortComponent !== null) {
      this._catalogSortComponent = null;
    }

    this._catalogSortComponent = new CatalogSortView(this._currentSortType, this._currentOrderType);
    this._catalogSortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
    this._catalogSortComponent.setOrderTypeChangeHandler(this._handleOrderTypeChange);

    render(this._catalogComponent, this._catalogSortComponent, RenderPosition.AFTERBEGIN);
  }

  _renderCard(card) {
    const cardPresenter = new CardPresenter(this._catalogListComponent, this._siteMenuModel);
    cardPresenter.init(card);
    this._cardPresenter[card.id] = cardPresenter;
  }

  _renderCards(cards) {
    cards.forEach((card) => this._renderCard(card));
  }

  _renderPagination() {
    render(this._catalogComponent, this._catalogPaginationComponent, RenderPosition.BEFOREEND);
  }

  _clearBoard({resetRenderedCardsCount = false, resetSortType = false} = {}) {
    const cardCount = this._getCards().length;

    Object
        .values(this._cardPresenter)
        .forEach((presenter) => presenter.destroy());
    this._cardPresenter = {};

    remove(this._catalogSortComponent);

    if (resetRenderedCardsCount) {
      this._renderedCardsCount = CARD_COUNT_PER_STEP;
    } else {
      this._renderedCardsCount = Math.min(cardCount, this._renderedCardsCount);
    }

    if (resetSortType) {
      this._currentSortType = SortType.DEFAULT;
      this._currentOrderType = OrderType.DEFAULT;
    }
  }

  _renderBoard() {
    const cards = this._getCards();
    const cardCount = cards.length;

    // if (cardCount === 0) {
    //   this._renderNoCards();
    //   return;
    // }

    if (this._filterPresenter !== null) {
      this._filterPresenter.init();
    }

    this._renderSort();
    this._renderCards(cards.slice(0, Math.min(cardCount, this._renderedCardsCount)));

    // if (cardCount > this._renderedCardsCount) {
    this._renderPagination();


    // }
  }
}
