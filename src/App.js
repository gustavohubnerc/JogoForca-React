import React, { useState } from 'react';
import Jogo from './components/Jogo';
import Letras from './components/Letras';
import Palavra from './components/Palavra';
import palavras from './palavras';
import forca0 from './assets/forca0.png';
import forca1 from './assets/forca1.png';
import forca2 from './assets/forca2.png';
import forca3 from './assets/forca3.png';
import forca4 from './assets/forca4.png';
import forca5 from './assets/forca5.png';
import forca6 from './assets/forca6.png';

const imagensForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];


export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [palavraEscolhida, setPalavraEscolhida] = useState('');
  const [letrasPalavra, setLetrasPalavra] = useState([]);
  const [letrasDescobertas, setLetrasDescobertas] = useState([]);
  let [indiceImagemForca, setIndiceImagemForca] = useState(0);
  

  


  function escolherPalavra() {
    const indice = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[indice];
    setPalavraEscolhida(palavra);
    setLetrasPalavra(palavra.split(''));
    setLetrasDescobertas([]);
  }

  /* function handleLetraEscolhida(letra) {
   if (!letrasPalavra.includes(letra)) {
      //setIndiceImagemForca(indiceImagemForca += 1);
      setIndiceImagemForca(indiceImagemForca += 1);
    } 
    

    setLetrasDescobertas((letrasDescobertas) =>
      letrasDescobertas.concat(letra)
    );
  } */

  function handleLetraEscolhida(letra) {
    if (!letrasPalavra.includes(letra)) {
      setIndiceImagemForca((indice) => indice + 1);
    }
  
    setLetrasDescobertas((letrasDescobertas) =>
      letrasDescobertas.concat(letra)
    );
  }
  
  

  return (
    <>
      <Jogo
        imagensForca={imagensForca}
        onEscolherPalavra={escolherPalavra}
        setIsEnabled={setIsEnabled}
        indiceImagemForca={indiceImagemForca}
      />



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
