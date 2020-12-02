import React from 'react';
import '../css/us.css';
import Loader from '../components/loader';
import Nosotros from '../components/nosotros';
import Menus from '../components/menus';
import Contacto from '../components/contacto';
import Packs from '../components/packs';
import Home from '../pages/home';
import {AnimatePresence, motion} from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';


const Us = ()=>{
  return(
    <React.Fragment>
    <motion.div
     initial={{opacity: 0}}
     exit={{opacity: 0}}
     animate={{opacity: 1}}>
     <Router>
     <Switch>
     <Route path="/" exact>
     <Home />
     </Route>
     <div class="container-fluid">
       <div class="row">
         <div class="col-lg-2">
         <div className="items-nav-phone">
         <NavLink to="/info/packs" className="btn">Packs responsive</NavLink>
         </div>
         
         <div className="items-nav-laptop">
         <Link to="/" className="btn"><i class="icon-back fas fa-arrow-left"></i>Regresar</Link>
         <NavLink to="/info/menus" className="btn" activeClassName="active">Menús</NavLink>
         <NavLink to="/info/contacto" className="btn">Contacto</NavLink>
         <NavLink to="/info/nosotros" className="btn">Servicio</NavLink>
         <NavLink to="/info/packs" className="btn">Packs</NavLink>
         </div>
         </div>
         <div class="col-lg-10">
         <Route path="/info/nosotros" exact>
         <Nosotros />
         </Route>
         <Route path="/info/menus" exact>
         <Menus />
         </Route>
         <Route path="/info/contacto" exact>
         <Contacto />
         </Route>
         <Route path="/info/packs" exact>
         <Packs />
         </Route>
         </div>
       </div>
     </div>
     </Switch>
     </Router>
     </motion.div>
    </React.Fragment>
  )
}

export default Us;
