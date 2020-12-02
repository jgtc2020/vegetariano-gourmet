import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import '../css/packs.css';
import img1 from '../img/energetica-1.jpeg';
import img2 from '../img/energetica-2.jpeg';
import img3 from '../img/energetica-3.jpeg';
import img4 from '../img/equilibrio-1.jpeg';
import img5 from '../img/equilibrio-2.jpeg';
import img6 from '../img/equilibrio-3.jpeg';


const functionWhatsapp = (e)=>{
  var tag = e.target.parentElement.getElementsByClassName("text-pack")[0].textContent;
  window.open("https://api.whatsapp.com/send?phone=+541124626149&text=Hola! quiero este pack de Vegetariano Gourmet: "+tag);
};

const Packs = ()=>{
  const functionOpen = ()=>{
    window.open("https://krunker.io/");
  };


 return(
   <React.Fragment>
   <motion.div
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{opacity: 1}}>
    <div className="poster-p">
    <h1>Pedí uno de nuestros packs!</h1>
    </div>

    <div className="cartel-warning">
      <h1 className="title-cartel-warning">Por la compra de 10 viandas en adelante el envío solo en Caba sale gratis, preguntar en Gran Bs. También organiza con el número de pack la cantidad de viandas que querés, en calorías o gramos a elección, recordá que están clasificadas en dos categorías (Energéticas de 400gr y Equilibrio natural de 250gr)</h1>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-xl-4">
        <div class="card-packs">
          <div class="poster-img-pack">
          <img className="img-pack" src={img1} />
          </div>
           <div class="container-text-pack">
             <h1 class="text-pack">Pack 1-  5 viandas Energéticas de 400 gramos 1350 $</h1>
             <button type="button" class="btn-req-pack" onClick={functionWhatsapp}>Pedir</button>
           </div>
        </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-4">
        <div class="card-packs">
          <div class="poster-img-pack">
          <img className="img-pack" src={img2} />
          </div>
           <div class="container-text-pack">
             <h1 class="text-pack">Pack 2- 10 viandas Energéticas de 400 gramos 2700 $</h1>
             <button type="button" class="btn-req-pack" onClick={functionWhatsapp}>Pedir</button>
           </div>
        </div>
        </div>

        <div class="col-md-6 col-lg-6 col-xl-4">
        <div class="card-packs">
          <div class="poster-img-pack">
          <img className="img-pack" src={img3} />
          </div>
           <div class="container-text-pack">
             <h1 class="text-pack">Pack 3- 14 viandas Energéticas de 400 gramos 3780 $</h1>
             <button type="button" class="btn-req-pack" onClick={functionWhatsapp}>Pedir</button>
           </div>
        </div>
        </div>

        <div class="col-md-6 col-lg-6 col-xl-4">
        <div class="card-packs">
          <div class="poster-img-pack">
          <img className="img-pack" src={img4} />
          </div>
           <div class="container-text-pack">
             <h1 class="text-pack">Pack 4- 5 viandas Equilibrio natural 250 gramos 1200 $</h1>
             <button type="button" class="btn-req-pack" onClick={functionWhatsapp}>Pedir</button>
           </div>
        </div>
        </div>

        <div class="col-md-6 col-lg-6 col-xl-4">
        <div class="card-packs">
          <div class="poster-img-pack">
          <img className="img-pack" src={img5} />
          </div>
           <div class="container-text-pack">
             <h1 class="text-pack">Pack 5- 10 viandas Equilibrio natural 250 gramos 2400 $</h1>
             <button type="button" class="btn-req-pack" onClick={functionWhatsapp}>Pedir</button>
           </div>
        </div>
        </div>

        <div class="col-md-6 col-lg-6 col-xl-4">
        <div class="card-packs">
          <div class="poster-img-pack">
          <img className="img-pack" src={img6} />
          </div>
           <div class="container-text-pack">
             <h1 class="text-pack">Pack 6- 14 viandas Equilibrio natural 250 gramos 3360 $</h1>
             <button type="button" class="btn-req-pack" onClick={functionWhatsapp}>Pedir</button>
           </div>
        </div>
        </div>

      </div>
    </div>

   </motion.div>
   </React.Fragment>
 )
}

export default Packs;
