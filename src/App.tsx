import React from 'react';
import './App.css';
import Dashboard from './components/dashboard-component/dashboard.component';
import Search from './components/search-component/search.component';

function App() {
  return (
    <div className="App">
      <Search />
      <Dashboard />
    </div>
  );
}

export default App;
