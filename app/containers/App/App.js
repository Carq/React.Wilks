import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import WilksCalculator from 'containers/WilksCalculator';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.Wilks"
    >
      <meta name="description" content="Simple Wilks Calculator (powerlifting) created with React as Progressive Web App." />
    </Helmet>
    <Switch>
      <Route exact path="/" component={WilksCalculator} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
