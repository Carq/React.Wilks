import React from 'react';
import { Helmet } from 'react-helmet';
import WilksCalculator from 'containers/WilksCalculator';

import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      defaultTitle="React.Wilks"
    >
      <meta
        content="Simple Wilks Calculator (powerlifting) created with React as Progressive Web App."
        name="description"
      />
    </Helmet>
    <WilksCalculator />
  </div>
);

export default App;
