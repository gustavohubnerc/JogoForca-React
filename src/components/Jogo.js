import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';

export default function Jogo(props) {
  const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

  let {palavras, palavra} = props;

  function handleClick() {
    props.setIsEnabled(true);
  }

  return (
    <div className="container">
        <img className="forca" alt="forca0" src={forca0}/>
        <button className="start" onClick={handleClick}>Escolher palavra</button>
    </div>
  );
}


//criar variaveis de estado no App 

//onclick no botao escolher palavra -> essa função vai pegar uma string aleatoria do array de palavras no arquivo palavras.js -> 
//criar uma array que copia a palavra mas exibe underlines no lugar
