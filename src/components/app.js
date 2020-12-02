import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from '../pages/home';
import Nosotros from '../components/nosotros';
import Menus from '../components/menus';
import Contacto from '../components/contacto';
import Packs from '../components/packs';
import Us from '../pages/us';

const App = () => {
  return(
    <Router>
    <AnimatePresence>
    <Switch>
    <Route path="/" exact>
    <Home />
    </Route>
    <Route path="/info" exact>
    <Us />
    </Route>
    <Route path="/info/menus" exact>
    <Us />
    </Route>
    <Route path="/info/contacto" exact>
    <Us />
    </Route>
    <Route path="/info/nosotros" exact>
    <Us />
    </Route>
    <Route path="/info/packs" exact>
    <Us />
    </Route>
    </Switch>
    </AnimatePresence>
    </Router>
  )
};

export default App;
