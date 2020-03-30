export default function reducer(state = {
    deleteArticle: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "DELETE_ARTICLE": {
            return { ...state, fetching: true }
        }
        case "DELETE_ARTICLE_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
        }
        case "DELETE_ARTICLE_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                deleteArticle: state.deleteArticle.filter((data, i) => i !== action.id),
            }
        }
    }

    return state
}

