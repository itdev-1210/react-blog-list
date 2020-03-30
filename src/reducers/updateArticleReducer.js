export default function reducer(state = {
    updateList: {},
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "UPDATE_ARTICLE": {
            return { ...state, fetching: true }
        }
        case "UPDATE_ARTICLE_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
        }
        case "UPDATE_ARTICLE_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                updateList: action.payload,
            }
        }
    }

    return state
}
