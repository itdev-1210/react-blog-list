import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export function listStyleAction(data) {
    return function (dispatch) {
        dispatch({ type: "List_Style", payload: data });
    }
}

