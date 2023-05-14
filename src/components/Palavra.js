export default function Palavra({ palavra, letrasDescobertas }) {

  const palavraExibida = palavra
    .split('')
    .map((letra) =>
      letrasDescobertas.includes(letra) ? letra : '_'
    )
    .join(' ');

  return <div className="palavra">{palavraExibida}</div>;
}