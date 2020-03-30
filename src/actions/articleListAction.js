import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export function articleListAction() {
    return function (dispatch) {
        dispatch({ type: "ARTICLE_LIST" });
        axios.get(apiUrl + '/articles')
            .then((response) => {
                dispatch({ type: "ARTICLE_LIST_FULFILLED", payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: "ARTICLE_LIST_REJECTED", payload: err.response })
            })
    }
}

