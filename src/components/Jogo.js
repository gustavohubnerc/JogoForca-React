export default function Jogo({onEscolherPalavra, setIsEnabled, indiceImagemForca, imagensForca, setLetrasDescobertas,
  setIndiceImagemForca,}) {

  function handleClick() {
    setIsEnabled(true);
    setLetrasDescobertas([]);
    setIndiceImagemForca(0);
    onEscolherPalavra();
  }


  return (
    <div className="container">
      <img data-test="game-image" className="forca" alt="forca" src={imagensForca[indiceImagemForca]} />
      <button data-test="choose-word" className="start" onClick={handleClick}>
        Escolher palavra
      </button>
    </div>
  );
}