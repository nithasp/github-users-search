import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import {Navbar} from './components/index';
import { Home, ErrorPage } from "./pages/index";

// CSS
import "./css/style.css";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
