import React, { useState } from 'react';
import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';


export default function Jogo(props) {
  const [imagemForca, setImagemForca] = useState(forca0);

  function handleClick() {
    props.setIsEnabled(true);
    props.onEscolherPalavra();
    setImagemForca(forca0);
  }

  return (
    <div className="container">
      <img className="forca" alt="forca" src={imagemForca} />
      <button className="start" onClick={handleClick}>
        Escolher palavra
      </button>
    </div>
  );
}
