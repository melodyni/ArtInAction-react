import React, { useState, useEffect } from 'react';
import TitleBar from './TitleBar';
import { NavLink, Route, Switch, useHistory } from 'react-router-dom';

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
    <div>
      <TitleBar user={user} />
      <div className='inline'>
        <div className='links'>
          <NavLink to='/gallery/all' activeClassName='activeLink'>
            all
          </NavLink>
          {links}
        </div>
        <button className='btn blue' onClick={() => history.push('/addArt')}>
          Add Art
        </button>
      </div>

      <Switch>
        <Route exact path='/gallery/all'>
          <AllImageCard artWorks={artWorks} />
        </Route>
        {routes}
      </Switch>
    </div>
  );
};

export default Gallery;
