import React, { useState } from 'react';
import Jogo from './components/Jogo';
import Letras from './components/Letras';
import Palavra from './components/PalavraSecreta';
import palavras from './palavras';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [palavraEscolhida, setPalavraEscolhida] = useState('');
  const [letrasPalavra, setLetrasPalavra] = useState([]);
  const [letrasDescobertas, setLetrasDescobertas] = useState([]);

  function escolherPalavra() {
    const indice = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[indice];
    setPalavraEscolhida(palavra);
    setLetrasPalavra(palavra.split(''));
    setLetrasDescobertas([]);
  }

  function handleLetraEscolhida(letra) {
    setLetrasDescobertas((letrasDescobertas) =>
      letrasDescobertas.concat(letra)
    );
  }

  return (
    <>
      <Jogo onEscolherPalavra={escolherPalavra} setIsEnabled={setIsEnabled} />
      <Palavra palavra={palavraEscolhida} letrasDescobertas={letrasDescobertas} />
      <Letras
        isEnabled={isEnabled}
        letrasEscolhidas={letrasDescobertas}
        palavraEscolhida={letrasPalavra}
        onLetraEscolhida={handleLetraEscolhida}
      />

      
    </>
  );
}
