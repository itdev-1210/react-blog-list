import React, { Component } from 'react';
import './searchBar.scss';
import serachIcon from '../../assets/images/search_icon.png'


class SearchBar extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="serach-field">
                <img src={serachIcon} />
                <input placeholder="find a user, team, meeting.." />
            </div>
        )
    }
}

export default SearchBar