import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import '../css/nosotros.css';


const Nosotros = ()=>{
  const functionOpen = ()=>{
    window.open("https://krunker.io/");
  };
 return(
   <React.Fragment>
   <motion.div
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{opacity: 1}}>
    <div className="poster-nos">
    <h1>¿Qué Ofrecemos?</h1>
    </div>

    <div className="card-text-nos">
      <h1 className="text-nos">Nuestro servicio está orientado hacia una alimentación balanceada, donde podrás conseguir alimentos vivos que te permitan obtener los nutrientes que tu cuerpo necesita.</h1>
    </div>
    <div className="card-text-nos">
      <h1 className="text-nos">Ofrecemos viandas vegetarianas y viandas híper proteicas donde son elaboradas por personal calificado y en estaciones de servicio separadas evitando así contaminaciones cruzadas</h1>
    </div>
    <div className="card-text-nos">
      <h1 className="text-nos">El bienestar de nuestros clientes es la prioridad y su organismo va a representar la calidad de nuestro servicio por ello atrévete a invertir en una alimentación saludable sin perder el placer del buen comer, Vegetarianos Gourmet esta para servirte. Gracias</h1>
      <button type="button" className="btn-contact" onClick={functionOpen}>Contactar</button>
    </div>
  
   </motion.div>
   </React.Fragment>
 )
}

export default Nosotros;
