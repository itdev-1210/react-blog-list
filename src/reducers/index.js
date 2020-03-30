import { combineReducers } from "redux"
import listStyle from './listStyleReducer'
import articleList from './articleListReducer'
import deleteArticle from './deleteArticleReducer'
import updateList from './updateArticleReducer'
import readAll from './readAllReducer'

export default combineReducers({
    listStyle,
    articleList,
    deleteArticle,
    updateList,
    readAll
})