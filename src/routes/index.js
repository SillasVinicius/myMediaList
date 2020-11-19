import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './../pages/Home';
import MediaMovies from './../pages/MediaMovies';
import MediaSeries from './../pages/MediaSeries';
import MediaBooks from './../pages/MediaBooks';
import Status from './../pages/Status';
import Type from './../pages/Type';
import User from './../pages/User';
import Favorites from '../pages/Favorites';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* home */}
                <Route path="/" exact component={Home}/>
                {/* user */}
                <Route path="/user" exact component={User}/>
                {/* movies */}
                <Route path="/filmes" exact component={MediaMovies}/>
                {/* series */}
                <Route path="/series" exact component={MediaSeries}/>
                {/* books */}
                <Route path="/livros" exact component={MediaBooks}/>
                {/* favorites */}
                <Route path="/biblioteca" exact component={Favorites}/>
                {/* status */}
                <Route path="/status" exact component={Status}/>
                {/* type */}
                <Route path="/tipo" exact component={Type}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;