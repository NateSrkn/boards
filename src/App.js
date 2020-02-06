import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import BoardsView from './components/BoardsView'
import BoardPage from './components/BoardPage'

function App() {
  return (
    <div className="App container">
      <Switch>
        <Route exact path="/" component={BoardsView} />
        <Route path="/b/:shortLink" component={BoardPage} />
      </Switch>
    </div>
  );
}

export default App;
