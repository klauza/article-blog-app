import React from 'react';

import history from './history';
import { Router, Route, Switch } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Example from './pages/Example';
import NotFound from './pages/NotFound';


const Main = () => {
  return (
    <Router history={history}>

      {/* <Sidebar /> */}

      <main>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/example" component={Example} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </main>
      
      {/* <Footer/> */}

    </Router>
  )
}

export default Main
