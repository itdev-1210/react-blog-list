import React, { Component } from 'react';
import './articles.scss'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Card from '../../components/card/card'
import ListStyle from '../../components/listStyle/listStyle'
import Articlecard from '../../components/articleCard/articleCard'
import listStyleAction from '../../actions/listStyleAction'
import { articleListAction } from '../../actions/articleListAction'
import uuidv4 from 'uuid/v4';
import _ from 'lodash';

class Articles extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cardTitle: '',
            cardType: '',
        }
    }

    componentDidMount() {
        this.props.dispatch(articleListAction());
    }


    render() {
        const { listStyle, articleList } = this.props
        let unread = 0
        for (let i = 0; i < articleList.length; i++) {
            if (!articleList[i].isRead) {
                unread++;
            }
        }

        return (
            <div className="article">
                <div className="article-heading">
                    <h1>Articles</h1>
                    <ListStyle />
                </div>
                <div className="cards">
                    <Card cardTitle="Number of articles" number={articleList.length} />
                    <Card cardTitle="Unread Articles" cardType="unread" number={unread} />
                </div>
                <div className="day">
                    <h3>Today</h3>
                </div>
                <div className={listStyle == "card" ? "article-list card" : "article-list"}>
                    {
                        _.map(articleList, (item) => (
                            <Articlecard data={item} key={uuidv4()} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(connect((store) => {
    return {
        listStyle: store.listStyle.listStyle,
        articleList: store.articleList.articleList,
    };
})(Articles))