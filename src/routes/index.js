import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './../pages/Home';
import User from './../pages/UserGroup/User';
import UserForm from './../pages/UserGroup/UserForm';
import UserFormUpdate from './../pages/UserGroup/UserFormUpdate';
import MediaMovies from './../pages/MediaMoviesGroup/MediaMovies';
import MediaMoviesForm from './../pages/MediaMoviesGroup/MediaMoviesForm';
import MediaMoviesFormUpdate from '../pages/MediaMoviesGroup/MediaMoviesFormUpdate';
import MediaSeries from './../pages/MediaSeriesGroup/MediaSeries';
import MediaSeriesForm from './../pages/MediaSeriesGroup/MediaSeriesForm';
import MediaSeriesFormUpdate from '../pages/MediaSeriesGroup/MediaSeriesFormUpdate';
import MediaBooks from './../pages/MediaBooksGroup/MediaBooks';
import MediaBooksForm from './../pages/MediaBooksGroup/MediaBooksForm';
import MediaBooksFormUpdate from '../pages/MediaBooksGroup/MediaBooksFormUpdate';
import Favorites from './../pages/FavoritesGroup/Favorites';
import FavoritesForm from './../pages/FavoritesGroup/FavoritesForm';
import FavoritesFormUpdate from '../pages/FavoritesGroup/FavoritesFormUpdate';
import Status from './../pages/StatusGroup/Status';
import StatusForm from './../pages/StatusGroup/StatusForm';
import StatusFormUpdate from './../pages/StatusGroup/StatusFormUpdate';
import Type from './../pages/TypeGroup/Type';
import TypeForm from './../pages/TypeGroup/TypeForm';
import TypeFormUpdate from './../pages/TypeGroup/TypeFormUpdate';

import Teste from './../pages/Teste';
import Login from './../pages/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* home */}
                <Route path="/" exact component={Login}/>
                
                {/* user */}
                <Route path="/teste" exact component={Teste}/>

                {/* user */}
                <Route path="/home" exact component={Home}/>

                <Route path="/user" exact component={User}/>
                <Route path="/newuser" exact component={UserForm}/>
                <Route path="/edituser/:id" exact component={UserFormUpdate}/>
                {/* movies */}
                <Route path="/filmes" exact component={MediaMovies}/>
                <Route path="/newmovie" exact component={MediaMoviesForm}/>
                <Route path="/editmediamovie/:id" exact component={MediaMoviesFormUpdate}/>
                {/* series */}
                <Route path="/series" exact component={MediaSeries}/>
                <Route path="/newserie" exact component={MediaSeriesForm}/>
                <Route path="/editmediaserie/:id" exact component={MediaSeriesFormUpdate}/>
                {/* books */}
                <Route path="/livros" exact component={MediaBooks}/>
                <Route path="/newbook" exact component={MediaBooksForm}/>
                <Route path="/editmediabook/:id" exact component={MediaBooksFormUpdate}/>
                {/* favorites */}
                <Route path="/biblioteca" exact component={Favorites}/>
                <Route path="/newfavorite" exact component={FavoritesForm}/>
                <Route path="/editfavorite/:id" exact component={FavoritesFormUpdate}/>
                {/* status */}
                <Route path="/status" exact component={Status}/>
                <Route path="/newstatus" exact component={StatusForm}/>
                <Route path="/editstatus/:id" exact component={StatusFormUpdate}/>
                {/* type */}
                <Route path="/tipo" exact component={Type}/>
                <Route path="/newtype" exact component={TypeForm}/>
                <Route path="/edittype/:id" exact component={TypeFormUpdate}/>
                
                <Route path='*' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;