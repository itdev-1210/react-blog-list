import axios from "axios";
import { articleListAction } from './articleListAction'
const apiUrl = process.env.REACT_APP_API_URL;

export function postArticleAction(data) {
    return function (dispatch) {
        dispatch({ type: "POST_ARTICLE", data });
        axios.post(apiUrl + '/articles', data)
            .then((response) => {
                dispatch({ type: "POST_ARTICLE_FULFILLED", payload: response.data })
                dispatch(articleListAction());
            })
            .catch((err) => {
                dispatch({ type: "POST_ARTICLE_REJECTED", payload: err.response.data })
            })
    }
}


