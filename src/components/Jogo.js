export default function Jogo({onEscolherPalavra, setIsEnabled, indiceImagemForca, imagensForca}) {

  function handleClick() {
    setIsEnabled(true);
    onEscolherPalavra();
  }

  return (
    <div className="container">
      <img className="forca" alt="forca" src={imagensForca[indiceImagemForca]} />
      <button className="start" onClick={handleClick}>
        Escolher palavra
      </button>
    </div>
  );
}
