import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './../pages/Home';
import User from './../pages/UserGroup/User';
import MediaMovies from './../pages/MediaMoviesGroup/MediaMovies';
import MediaSeries from './../pages/MediaSeriesGroup/MediaSeries';
import MediaBooks from './../pages/MediaBooksGroup/MediaBooks';
import Favorites from './../pages/FavoritesGroup/Favorites';
import Status from './../pages/StatusGroup/Status';
import Type from './../pages/TypeGroup/Type';
import UserForm from './../pages/UserGroup/UserForm/index';
import MediaMoviesForm from './../pages/MediaMoviesGroup/MediaMoviesForm/index';
import MediaSeriesForm from './../pages/MediaSeriesGroup/MediaSeriesForm/index';
import MediaBooksForm from './../pages/MediaBooksGroup/MediaBooksForm/index';
import FavoritesForm from './../pages/FavoritesGroup/FavoritesForm/index';
import StatusForm from './../pages/StatusGroup/StatusForm/index';
import TypeForm from './../pages/TypeGroup/TypeForm/index';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* home */}
                <Route path="/" exact component={Home}/>
                {/* user */}
                <Route path="/user" exact component={User}/>
                <Route path="/newuser" exact component={UserForm}/>
                <Route path="/edituser/:id" exact component={UserForm}/>
                {/* movies */}
                <Route path="/filmes" exact component={MediaMovies}/>
                <Route path="/newmovie" exact component={MediaMoviesForm}/>
                <Route path="/editmediamovie/:id" exact component={MediaMoviesForm}/>
                {/* series */}
                <Route path="/series" exact component={MediaSeries}/>
                <Route path="/newserie" exact component={MediaSeriesForm}/>
                <Route path="/editmediaserie/:id" exact component={MediaSeriesForm}/>
                {/* books */}
                <Route path="/livros" exact component={MediaBooks}/>
                <Route path="/newbook" exact component={MediaBooksForm}/>
                <Route path="/editmediabook/:id" exact component={MediaBooksForm}/>
                {/* favorites */}
                <Route path="/biblioteca" exact component={Favorites}/>
                <Route path="/newfavorite" exact component={FavoritesForm}/>
                <Route path="/editfavorite/:id" exact component={FavoritesForm}/>
                {/* status */}
                <Route path="/status" exact component={Status}/>
                <Route path="/newstatus" exact component={StatusForm}/>
                <Route path="/editstatus/:id" exact component={StatusForm}/>
                {/* type */}
                <Route path="/tipo" exact component={Type}/>
                <Route path="/newtype" exact component={TypeForm}/>
                <Route path="/edittype/:id" exact component={TypeForm}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;