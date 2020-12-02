import React from 'react';
import '../css/home.css';
import Header from '../components/header';
import Loader from '../components/loader';
import '../img/img.jpeg';
import '../img/img2.jpeg';
import '../img/img3.jpeg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';



const Home = ()=>{

  return(
    <React.Fragment>
    <motion.div
     initial={{opacity: 0}}
     exit={{opacity: 0}}
     animate={{opacity: 1}}>
        <Header />
        <Loader />
 <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="img-1-home">
    <h1 className="title-carousel-home">Somos Vegetariano Gourmet</h1>
    <h3 className="title-carousel-home-small">Vida y equilibrio natural</h3>
    </div>
    </div>
    <div className="carousel-item">
    <div className="img-2-home">
    <h1 className="title-carousel-home">Nustras viandas son calidad</h1>
    <h3 className="title-carousel-home-small">Viandas saludables al mejor precio</h3>
    </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

        <div className="general-container-posters-home">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card-home one">
                <h1 className="title-tag-home">Vegetariano Gourmet</h1>
                  <h1 className="item-card">¿Quienes somos?</h1>
                  <Link to="/info/nosotros"><button type="button" className="btn-card-home">Visitar</button></Link>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
               <div className="card-home two">
               <h1 className="title-tag-home">Vegetariano Gourmet</h1>
               <h1 className="item-card">Nuestros packs</h1>
               <Link to="/info/packs"><button type="button" className="btn-card-home">Visitar</button></Link>
               </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
              <div className="card-home three">
              <h1 className="title-tag-home">Vegetariano Gourmet</h1>
              <h1 className="item-card">Contacto</h1>
              <Link to="/info/contacto"><button type="button" className="btn-card-home">Visitar</button></Link>
              </div>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
    </React.Fragment>
  )
}

export default Home;
