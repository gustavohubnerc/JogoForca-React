import React, { useState } from 'react';
import palavras from '../palavras';
import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';

function Jogo(props) {
  const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  const maxErrors = images.length;

  const { isEnabled, escolherPalavra } = props;
  const [palavra, setPalavra] = useState('');
  const [palavraOculta, setPalavraOculta] = useState('');

  function handleClick() {
    escolherPalavra();
  }

  return (
    <div className="container">
      <div>{palavraOculta}</div>
      <img
        className="forca"
        alt={`forca${palavraOculta.length}`}
        src={images[palavraOculta.length]}
      />
      <button className="start" onClick={handleClick} disabled={isEnabled}>
        Escolher palavra
      </button>
    </div>
  );
}

export default Jogo;


