import {
  GET_ARTICLES_BEGIN,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
  GET_IMAGES_BEGIN,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR,
  GET_SINGLE_IMAGE_BEGIN,
  GET_SINGLE_IMAGE_SUCCESS,
  GET_SINGLE_IMAGE_ERROR,
  GET_SINGLE_ARTICLE_BEGIN,
  GET_SINGLE_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE_ERROR,
  GET_BIBLIO_BEGIN,
  GET_BIBLIO_SUCCESS,
  GET_BIBLIO_ERROR,
} from "../actions";

const data_reducer = (state, action) => {
  if (action.type === GET_ARTICLES_BEGIN) {
    return { ...state, articlesLoading: true };
  }
  if (action.type === GET_ARTICLES_SUCCESS) {
    return {
      ...state,
      articles: action.payload,
      articlesLoading: false,
    };
  }
  if (action.type === GET_ARTICLES_ERROR) {
    return { ...state, articlesLoading: false, articlesError: true };
  }

  if (action.type === GET_IMAGES_BEGIN) {
    return { ...state, imagesLoading: true };
  }
  if (action.type === GET_IMAGES_SUCCESS) {
    return {
      ...state,
      images: action.payload,
      imagesLoading: false,
    };
  }
  if (action.type === GET_IMAGES_ERROR) {
    return { ...state, imagesLoading: false, imagesError: true };
  }

  if (action.type === GET_SINGLE_IMAGE_BEGIN) {
    return { ...state, imageLoading: true };
  }
  if (action.type === GET_SINGLE_IMAGE_SUCCESS) {
    return {
      ...state,
      image: action.payload,
      imageLoading: false,
    };
  }
  if (action.type === GET_SINGLE_IMAGE_ERROR) {
    return {
      ...state,
      imageLoading: false,
      imageError: true,
    };
  }

  if (action.type === GET_SINGLE_ARTICLE_BEGIN) {
    return { ...state, single_articleLoading: true };
  }
  if (action.type === GET_SINGLE_ARTICLE_SUCCESS) {
    return {
      ...state,
      single_article: action.payload,
      single_articleLoading: false,
    };
  }
  if (action.type === GET_SINGLE_ARTICLE_ERROR) {
    return {
      ...state,
      single_articleLoading: false,
      single_articleError: true,
    };
  }

  if (action.type === GET_BIBLIO_BEGIN) {
    return { ...state, bibliosLoading: true };
  }

  if (action.type === GET_BIBLIO_SUCCESS) {
    return {
      ...state,
      bibliosLoading: false,
      biblios: action.payload,
    };
  }
  if (action.type === GET_BIBLIO_ERROR) {
    return { ...state, bibliosLoading: false, bibliosError: true };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default data_reducer;
