
const homeUrl = process.env.REACT_APP_HOMEPAGE_URL;


export const requireAuth = (ownProps) => {
    if (!localStorage.getItem('token')) {
        ownProps.history.push(homeUrl + '/login');
    } else {
        let data = {
            key:localStorage.getItem('token'),
            user:JSON.parse(localStorage.getItem('user'))
        }
        ownProps.dispatch({ type: "LOGIN_FULFILLED", payload: data })
    }
}


export const auth = (ownProps) => {
    if (localStorage.getItem('token')) {
        ownProps.history.push(homeUrl + '/filmSearch');
    }
}
