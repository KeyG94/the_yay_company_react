import React from 'react';
import './scss/styles.scss';
import './scss/global/global.scss';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import News from './components/news/News';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/News">News</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
