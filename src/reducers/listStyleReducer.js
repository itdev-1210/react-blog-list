export default function reducer(state = {
    listStyle: {},
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "List_Style": {
            return { ...state, fetching: true, listStyle: action.payload, }
        }
    }

    return state
}
