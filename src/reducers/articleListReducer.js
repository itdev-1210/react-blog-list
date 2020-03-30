export default function reducer(state = {
    articleList: {},
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "ARTICLE_LIST": {
            return { ...state, fetching: true }
        }
        case "ARTICLE_LIST_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
        }
        case "ARTICLE_LIST_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                articleList: action.payload,
            }
        }
    }

    return state
}
