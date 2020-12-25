import React from 'react';
import './header.component.css';
import {Movies} from '../../pages/MoviePage';
import {People} from '../../pages/PeoplePage';
import {TvShows} from '../../pages/TvShowPage';
import {HomePage} from '../../pages/HomePage';
import {SearchBar} from './SearchBarComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { SearchResult } from '../../pages/SearchResultsPage';
import { DetailsPage } from '../../pages/DetailsPage';
import { PersonDetailsPage } from "../../pages/PersonDetailsPage";

export const Header = () => {
    return (
        <Router>
            <div className='header'>
                <div className='logo'>
                <Link to='/' >  <img src='./assets/logo.png' alt='logo' width='60px' /> </Link>
                </div>
                <ul className='nav-bar'>
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/movie"> Movies</Link></li>
                    <li><Link to="/tv-show">TV Shows</Link></li>
                    <li><Link to='/people'>People</Link></li>
                </ul>
                <SearchBar />
            </div>
                <Switch>
                    <Route path='/movie' component={Movies}/>
                    <Route path='/tv-show' component={TvShows}/>
                    <Route path='/people' component={People}/>
                    <Route path='/search-result' component={SearchResult} />
                    <Route path='/details/:mediaType/:id' component={DetailsPage} />
                    <Route path='/PersonDetailsPage/:id' component={PersonDetailsPage} />
                    <Route path='/' exact component={HomePage}/>

                </Switch>
        </Router>
    );
}
