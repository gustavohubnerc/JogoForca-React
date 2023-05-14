export default function Letras({isEnabled, letrasEscolhidas, palavraEscolhida, onLetraEscolhida}) {
  
  const alfabeto = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  return (
    <div className="teclado">
      {alfabeto.map((letra) => (
        <button
          key={letra}
          className="letra"
          disabled={
            !isEnabled ||
            letrasEscolhidas.includes(letra)
          }
          onClick={() => onLetraEscolhida(letra)}
        >
          {letra}
        </button>
      ))}
    </div>
  );
}
