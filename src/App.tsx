import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import { BuyFlow, ProductIds, PRODUCT_IDS_TO_NAMES } from './flows';
import { Button } from './ui-kit';
import urls from 'configs/urls';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path={`${urls.internal.BUY_INSURANCE_DEVELOPER_FLOW}`}>
            <BuyFlow productId={ProductIds.devIns} />
          </Route>
          <Route path={`${urls.internal.BUY_INSURANCE_DESIGNER_FLOW}`}>
            <BuyFlow productId={ProductIds.desIns} />
          </Route>
          <Route path="/">
            <h1>Welcome to Getsafe</h1>
            <h3>Choose the insurance: </h3>

            <div>
              <Link to={`${urls.internal.BUY_INSURANCE_DESIGNER_FLOW}`}>
                <Button>{PRODUCT_IDS_TO_NAMES[ProductIds.desIns]}</Button>
              </Link>

              <Link to={`${urls.internal.BUY_INSURANCE_DEVELOPER_FLOW}`}>
                <Button>{PRODUCT_IDS_TO_NAMES[ProductIds.devIns]}</Button>
              </Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
