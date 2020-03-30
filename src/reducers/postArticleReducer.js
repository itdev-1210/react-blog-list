export default function reducer(state = {
    postArticle: {},
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "POST_ARTICLE": {
            return { ...state, fetching: true }
        }
        case "POST_ARTICLE_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
        }
        case "POST_ARTICLE_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                postArticle: action.payload,
            }
        }
    }

    return state
}
