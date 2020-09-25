import React, { useState, useEffect } from 'react';
import TitleBar from './TitleBar';
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

import AllImageCard from './AllImageCard';
import FilteredImageCard from './FilteredImageCard';
import reqAPI from './requestAPI';
import '../App.css';

const Gallery = function () {
  const history = useHistory();
  const [artWorks, setArtWorks] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    reqAPI
      .artWork()
      .then(({ id, name, username, avatar, email, bio, artWorks }) => {
        setUser({ id, username, name, avatar, email, bio });
        setArtWorks(artWorks);
      });
  }, []);

  const categories = Array.from(new Set(artWorks.map((x) => x.tags).flat()));

  const links = categories.map((category) => (
    <NavLink
      to={`/gallery/${category}`}
      key={category}
      activeClassName='activeLink'
    >
      {category}
    </NavLink>
  ));

  const routes = categories.map((category) => (
    <Route exact path={`/gallery/${category}`} key={category}>
      <FilteredImageCard artWorks={artWorks} tag={category} />
    </Route>
  ));

  return (
    <BrowserRouter>
      <TitleBar user={user} />
      <div className='inline'>
        <NavLink to='/gallery/all' activeClassName='activeLink'>
          all
        </NavLink>
        {links}
        <button className='btn blue' onClick={() => history.push('/addArt')}>
          Add Art
        </button>
        {/* <button className='btn blue'></button> */}
        {/* <Link to='/addArt' className='btn blue'>Add Art</Link> */}
      </div>

      <Switch>
        <Route exact path='/gallery/all'>
          <AllImageCard artWorks={artWorks} />
        </Route>
        {routes}
      </Switch>
    </BrowserRouter>
  );
};

export default Gallery;
