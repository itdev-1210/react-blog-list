import React, { Component } from 'react';
import './header.scss';
import SearchBar from '../serachBar/searchBar'
import UserProfile from '../../assets/images/user_profile.png'

class Header extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="header">
                <SearchBar />

                <div className="profile">
                    <img src={UserProfile} />
                </div>
            </div>
        )
    }
}

export default Header