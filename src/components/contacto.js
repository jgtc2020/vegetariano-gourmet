import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import '../css/contacto.css';


const Contacto = ()=>{
  const functionOpen = ()=>{
    window.open("https://krunker.io/");
  };
 return(
   <React.Fragment>
   <motion.div
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    animate={{opacity: 1}}>
    <div className="poster-con">
    <h1>¡Comunicate con nosotros!</h1>
    </div>

    <div className="cartel-warning">
      <h1 className="title-cartel-warning">Envíos a Caba y Gran buenos aires (preguntar por zona), los días de entrgas son los: miércoles de 18:00pma 21:00pm y sábadosde 12:00pm a 17:00pm. No obstante, para realizar tu pedido debes contactarnos los días lunes y martes: hasta las 17:00pm para ser entrgado el día miércoles, jueves y viernes hasta las 17:00pm.</h1>
    </div>

    <div className="card-text-con">
      <h1 className="text-con">Estamos en boedo Caba Argentina.</h1>
      <h1 className="text-con">Nuestro mail es: viandasveg.gourmet@gmail.com</h1>
      <h1 className="text-con">Nuestro instagram es: vegetariano.gourmet</h1>
      <h1 className="text-con">Teléfono: 11-2167-7695 <button type="button" className="btn-contact" onClick={functionOpen}>Contactar</button></h1>
    </div>
   </motion.div>
   </React.Fragment>
 )
}

export default Contacto;
