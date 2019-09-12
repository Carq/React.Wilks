import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import WilksCalculator from 'containers/WilksCalculator';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      defaultTitle="React.Wilks"
      titleTemplate="%s - React.js Boilerplate"
    >
      <meta
        content="Simple Wilks Calculator (powerlifting) created with React as Progressive Web App."
        name="description"
      />
    </Helmet>
    <Switch>
      <Route component={WilksCalculator} exact path="/" />
      <Route component={NotFoundPage} path="" />
    </Switch>
  </div>
);

export default App;
