import React, { useState } from 'react';
import forca0 from '../assets/forca0.png';

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
