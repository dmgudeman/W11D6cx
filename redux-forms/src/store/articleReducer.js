import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'addAricle';

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};
export const addArticleAC = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  }
}


const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    default:
      return state;
  }
};

export default articleReducer;