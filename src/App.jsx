import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Wallet from './pages/Wallet/Wallet';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
        </Switch>
      </div>
    );
  }
}

export default App;
