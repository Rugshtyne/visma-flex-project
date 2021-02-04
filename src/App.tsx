import React from 'react';

import { SubLevel } from './components/SubLevel/SubLevel';
import classes from './App.module.css';
import Landing from './components/Landing/Landing';
import { Navigation } from './components/Navigation/Navigation';

const App = (): JSX.Element => (
  <div className={classes.App}>
    <Navigation />
    <Landing />
    <SubLevel />
  </div>
);

export default App;
