import React, { Component } from 'react';
import './card.scss';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { readAllAction } from '../../actions/readAllAction'

class Card extends Component {
    constructor(props) {
        super(props)
        this.markAsRead = this.markAsRead.bind(this)
    }

    markAsRead() {
        // let id
        // let data = this.props.articleList;
        // for (let i = 0; i < data.length; i++) {
        //     if (data[i].isRead == false) {
        //         data[i].isRead = true;
        //         id = data[i].id
        //     }
        //     this.props.dispatch(readAllAction(id, data));
        // }
    }

    render() {
        const { cardTitle, cardType, number } = this.props;
        return (
            <div className={cardType == "unread" ? "card-content active" : "card-content"}>
                <div className="card-heading">
                    <h4>{cardTitle}</h4>
                    <div className="dots">
                        <svg width="23px" height="5px" viewBox="0 0 23 5" version="1.1">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.73">
                                <g id="dots" fill="#D0D7DD">
                                    <circle id="Oval" cx="2.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval" cx="11.5" cy="2.5" r="2.5"></circle>
                                    <circle id="Oval" cx="20.5" cy="2.5" r="2.5"></circle>
                                </g>
                            </g>
                        </svg>
                        {cardType == "unread" ? <div className="mark-popup" onClick={() => this.markAsRead()} >
                            <p>Mark All as Read</p>
                        </div> : ' '}
                    </div>
                </div>
                <div className="number">
                    <p><span>{number}</span>This day</p>
                </div>

            </div>
        )
    }
}


export default withRouter(connect((store) => {
    return {
        listStyle: store.listStyle.listStyle,
        articleList: store.articleList.articleList,
    };
})(Card))