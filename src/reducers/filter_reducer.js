import {
  FILTER_IMAGES,
  LOAD_DATA,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  SORT_ARTICLES,
  SORT_IMAGES,
  UPDATE_FILTERS_ARTICLES,
  UPDATE_FILTERS_IMAGES,
  UPDATE_SORT,
  UPDATE_SORT_ARTICLES,
  FILTER_ARTICLES,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_DATA) {
    const { articles, images } = action.payload;
    return {
      ...state,
      all_articles: [...articles],
      filtered_articles: [...articles],
      all_images: [...images],
      filtered_images: [...images],
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === UPDATE_SORT_ARTICLES) {
    return { ...state, sort_articles: action.payload };
  }

  if (action.type === SORT_IMAGES) {
    const { sort, filtered_images } = state;
    let tempImages = [...filtered_images];
    if (sort === "date-desc") {
      tempImages.sort((a, b) => b.year - a.year);
    }
    if (sort === "date-asc") {
      tempImages.sort((a, b) => a.year - b.year);
    }
    return { ...state, filtered_images: tempImages };
  }

  if (action.type === SORT_ARTICLES) {
    const { sort_articles, filtered_articles } = state;
    let tempArticles = [...filtered_articles];
    if (sort_articles === "date-desc") {
      tempArticles.sort((a, b) => b.year - a.year);
    }
    if (sort_articles === "date-asc") {
      tempArticles.sort((a, b) => a.year - b.year);
    }
    return { ...state, filtered_articles: tempArticles };
  }

  if (action.type === UPDATE_FILTERS_IMAGES) {
    const { name, value } = action.payload;
    return {
      ...state,
      filters_images: { ...state.filters_images, [name]: value },
    };
  }

  if (action.type === UPDATE_FILTERS_ARTICLES) {
    const { name, value } = action.payload;
    return {
      ...state,
      filters_articles: { ...state.filters_articles, [name]: value },
    };
  }

  if (action.type === FILTER_IMAGES) {
    const { all_images } = state;
    const { period } = state.filters_images;
    let tempImages = [...all_images];
    if (period === "Avant 1980") {
      tempImages = tempImages.filter((image) => image.year < 1980);
    }
    if (period === "1980 - 1999") {
      tempImages = tempImages.filter(
        (image) => image.year >= 1980 && image.year < 2000
      );
    }
    if (period === "Depuis 2000") {
      tempImages = tempImages.filter((image) => image.year >= 2000);
    }
    return { ...state, filtered_images: tempImages };
  }

  if (action.type === FILTER_ARTICLES) {
    const { all_articles } = state;
    const { period } = state.filters_articles;
    let tempArticles = [...all_articles];
    if (period === "Avant 1980") {
      tempArticles = tempArticles.filter((art) => art.year < 1980);
    }
    if (period === "1980 - 1999") {
      tempArticles = tempArticles.filter(
        (art) => art.year >= 1980 && art.year < 2000
      );
    }
    if (period === "Depuis 2000") {
      tempArticles = tempArticles.filter((art) => art.year >= 2000);
    }
    return { ...state, filtered_articles: tempArticles };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
