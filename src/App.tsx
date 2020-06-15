import React from 'react';
import './App.css';
import Dashboard from './components/dashboard-component/dashboard.component';
import { Route } from 'react-router-dom';
function App(): JSX.Element {
  return (
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
