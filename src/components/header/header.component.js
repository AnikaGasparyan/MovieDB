import React from 'react';
import './header.component.css';
import {Movies} from '../../pages/movie.page';
import {People} from '../../pages/people.page';
import {TvShows} from '../../pages/tv-shows.page';
import {HomePage} from '../../pages/home.page';
import {SearchBar} from './search-bar.component';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { SearchResult } from '../../pages/search-result.page';
import { DetailsPage } from '../../pages/details.page';

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
                    <Route path='/' component={HomePage}/>

                </Switch>
        </Router>
    );
}
