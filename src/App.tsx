import React, { Suspense } from 'react';
import './App.css';
import ControlPanel from './routes/cp/ControlPanel';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from './routes/Home';
import config from './config.json';
import KarmaControlPanel from './routes/cp/KarmaControlPanel';
import StatsControlPanel from './routes/cp/StatsControlPanel';
import UserControlPanel from './routes/cp/UserControlPanel';
import logo from './logo.svg';


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/cp/karma">
            <KarmaControlPanel />
          </Route>
          <Route path="/cp/stats">
            <StatsControlPanel />
          </Route>
          <Route path="/cp/user">
            <UserControlPanel />
          </Route>
          <Route path="/cp">
            <ControlPanel />
          </Route>
          <Route path="/callback">
            <Redirect to="/cp" />
          </Route>
          <Route path="/login" render={() => (window.location.href = `https://discord.com/oauth2/authorize?client_id=${config['clientid']}&response_type=code&scope=identify&redirect_uri=${encodeURIComponent(config["url"] + '/callback')}`)} />
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    </Suspense>
  );
}

export default App;
