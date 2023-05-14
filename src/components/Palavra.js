export default function Palavra({ result, palavra, letrasDescobertas }) {

  const palavraExibida = palavra
    .split('')
    .map((letra) =>
      letrasDescobertas.includes(letra) ? letra : '_'
    )
    .join(' ');


  return <div className={`palavra ${result}`}>{palavraExibida}</div>;
}
