import React from 'react';
import './App.css';
import Dashboard from './components/dashboard-component/dashboard.component';
import InvalidRoute from './components/invalid-route-component/invalid-route.component';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route path="*" component={InvalidRoute}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
