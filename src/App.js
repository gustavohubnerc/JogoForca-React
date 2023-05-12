import React, { useState } from 'react';
import Jogo from './components/Jogo';
import Letras from './components/Letras';
import palavras from './palavras';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [palavra, setPalavra] = useState('');
  const [arrayPalavra, setArrayPalavra] = useState([]);
  const [palavraOculta, setPalavraOculta] = useState('');

  function escolherPalavra() {
    const randomIndex = Math.floor(Math.random() * palavras.length);
    setPalavra(palavras[randomIndex]);
  }

  return (
    <>
      <Jogo isEnabled={isEnabled} escolherPalavra={escolherPalavra} />
      <Letras isEnabled={isEnabled} />
    </>
  );
}
