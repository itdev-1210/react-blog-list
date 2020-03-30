import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Articles from './pages/articles/articles';
import SideBar from './components/sideBar/sideBar'
import Header from './components/header/header'

const homeUrl = process.env.REACT_APP_HOMEPAGE_URL;
// const apiUrl = process.env.REACT_APP_API_URL;

class Routes extends Component {
    render() {
        return (
            <div className="dashboard">
                <SideBar />
                <div className="dashboard-content">
                    <Header />
                    <Route exact path={homeUrl + "/"} component={Articles} />
                </div>
            </div>
        );
    }
}


export default Routes;