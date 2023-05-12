import React, { useState } from 'react';
import Jogo from './components/Jogo';
import Letras from './components/Letras';
import palavras from './palavras';

export default function App() {

  const [isEnabled, setIsEnabled] = useState(false);

  function handleClick() {
    setIsEnabled(true);
  }

  return (
    <>
      <Jogo setIsEnabled={setIsEnabled}/>
      <Letras isEnabled={isEnabled}/>
    </>
  );
}