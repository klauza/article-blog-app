import React, { Suspense } from 'react';

import history from './history';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

// pages
const Home = React.lazy(() =>
  import('./pages/Home')
);
const Category = React.lazy(() =>
  import('./pages/Articles/Category')
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


const Main = ( { toggleTheme }) => {
  return (
    <Suspense fallback={<h1>LOADING</h1>}>

      <Router history={history}>

        <Navigation toggleTheme={toggleTheme} />

        <div className="views-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/articles/:category" component={Category} />
            <Redirect from="/articles" to="/articles/all" />
            
            <Route component={NotFound} />
          </Switch>
        </div>
        
        <Footer/>

      </Router>
    </Suspense>
  )
}

export default Main
