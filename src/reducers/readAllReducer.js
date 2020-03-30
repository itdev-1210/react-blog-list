export default function reducer(state = {
    readAll: {},
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "READ_ALL": {
            return { ...state, fetching: true }
        }
        case "READ_ALL_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
        }
        case "READ_ALL_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                readAll: action.payload,
            }
        }
    }

    return state
}
