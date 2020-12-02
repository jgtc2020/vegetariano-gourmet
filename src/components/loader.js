import React from 'react';
import '../css/loader.css';

class Loader extends React.Component{
  render(){
    const desappear = ()=> {
      var containerSlide = document.getElementsByClassName("slide-charge")[0];
      containerSlide.style.visibility = 'hidden';
      containerSlide.style.opacity = '0';
      containerSlide.style.transition = '.5s';
    };

    setTimeout(desappear, 1000);

    return(
      <React.Fragment>
      <div className="slide-charge">
      <div id="contenedor">
      <div className="loader" id="loader">Loading...</div>
      </div>
      </div>
      </React.Fragment>
    )
  }
}

export default Loader;
