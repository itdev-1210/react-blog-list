import axios from "axios";
import { articleListAction } from './articleListAction'

const apiUrl = process.env.REACT_APP_API_URL;


export function deleteArticleAction(id, data) {
    return function (dispatch) {
        dispatch({ type: "DELETE_ARTICLE", id, data });
        axios.delete(apiUrl + '/articles/' + id, data)
            .then((response) => {
                dispatch({ type: "DELETE_ARTICLE_FULFILLED", payload: response.data })
                dispatch(articleListAction());
            })
            .catch((err) => {
                dispatch({ type: "DELETE_ARTICLE_REJECTED", payload: err.response.data })

            })
    }
}

