import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import '../css/menus.css';
import imgMenuVe from '../img/Menu-vegetariano.png';
import imgMenuPr from '../img/Menu-proteico.png';
import imgMenuSn from '../img/Menu-sin.png';


const Menus = ()=>{

const imgMenu = document.getElementsByClassName("btn");

const functionShowAdd = (e)=> {
  const containerImgAdd = document.getElementsByClassName("poster-img-add")[0];
  containerImgAdd.style.visibility = 'visible';
  containerImgAdd.style.opacity = '1';
  const img = e.target.parentElement.getElementsByClassName("img-menu-col")[0].src;
  const imgAdd = document.getElementsByClassName("img-add")[0];
  imgAdd.src = img;
};

const functionHideAdd = (e)=> {
  const containerImgAdd = document.getElementsByClassName("poster-img-add")[0];
  containerImgAdd.style.visibility = 'hidden';
  containerImgAdd.style.opacity = '0';
};


 return(
   <React.Fragment>
   <motion.div
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{opacity: 1}}>

    <div className="poster-img-add">
    <div className="container-img">
    <button type="button" className="btn-img-add" onClick={functionHideAdd}><i class="fas fa-times"></i></button>
    <img className="img-add" src={imgMenuPr} />
    </div>
    </div>

    <div className="poster-menu">
    <h1>Menús de Vegetariano Gourmet</h1>
    </div>

    <div className="container-fluid container-menus">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
         <h1 className="title-menu">Menú Vegetariano</h1>
          <img className="img-menu-col" src={imgMenuVe} onClick={functionShowAdd}/>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
        <h1 className="title-menu">Menú Proteico</h1>
         <img className="img-menu-col" src={imgMenuPr} onClick={functionShowAdd}/>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
        <h1 className="title-menu">Menú sin harinas</h1>
         <img className="img-menu-col" src={imgMenuSn} onClick={functionShowAdd}/>
        </div>
      </div>
    </div>

   </motion.div>
   </React.Fragment>
 )
}

export default Menus;
