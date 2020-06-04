import React, { Suspense } from 'react';

import history from './history';
import { Router, Route, Switch } from 'react-router-dom';

// pages
const Home = React.lazy(() =>
  import('./pages/Home')
);
const Example = React.lazy(() =>
  import('./pages/Example')
);
const NotFound = React.lazy(() =>
  import('./pages/NotFound')
);

// containers
const Navigation = React.lazy(() =>
  import('../containers/Navigation')
);
const Footer = React.lazy(() =>
  import('../containers/Footer')
);


const Main = () => {
  return (
    <Suspense fallback={<h1>LOADING</h1>}>

      <Router history={history}>

        <Navigation />

        <div className="views-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/example" component={Example} />

            <Route component={NotFound} />
          </Switch>
        </div>
        
        <Footer/>

      </Router>
    </Suspense>
  )
}

export default Main
