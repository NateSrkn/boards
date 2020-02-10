import React from 'react';
import { Route, Switch } from 'react-router-dom'
import BoardsView from './components/BoardsView'
import BoardPage from './components/BoardPage'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App container-fluid">
      <NavBar />
      <Switch>
        <Route exact path="/" component={BoardsView} />
        <Route path="/b/:shortLink" component={BoardPage} />
      </Switch>
    </div>
  );
}

export default App;
