import axios from "axios";
import { articleListAction } from './articleListAction'
const apiUrl = process.env.REACT_APP_API_URL;

export function updateArticleAction(id, data) {
    return function (dispatch) {
        dispatch({ type: "READ_ARTICLE", id, data });
        axios.patch(apiUrl + '/articles/' + id, data)
            .then((response) => {
                dispatch({ type: "READ_ARTICLE_FULFILLED", payload: response.data })
                console.log(response)
                dispatch(articleListAction());
            })
            .catch((err) => {
                dispatch({ type: "READ_ARTICLE_REJECTED", payload: err.response.data })
            })
    }
}


