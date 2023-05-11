import Jogo from './components/Jogo'
import Letras from './components/Letras'
import './palavras';
import { useState } from 'react';


const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);  
  return (
    <>
      <Jogo/>
      <Letras/>
    </>  
  );
}


export default App;