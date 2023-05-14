export default function Palavra({ errado, palavra, letrasDescobertas }) {

  const palavraExibida = palavra
    .split('')
    .map((letra) =>
      letrasDescobertas.includes(letra) ? letra : '_'
    )
    .join(' ');

  return <div className={`palavra ${errado}`}>{palavraExibida}</div>;
}