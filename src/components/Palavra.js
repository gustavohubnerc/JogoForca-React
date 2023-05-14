export default function Palavra({ result, palavra, letrasDescobertas }) {

  const palavraExibida = palavra
    .split('')
    .map((letra) =>
      letrasDescobertas.includes(letra) ? letra : '_'
    )
    .join(' ');


  return <div data-test="word" className={`palavra ${result}`}>{palavraExibida}</div>;
}
