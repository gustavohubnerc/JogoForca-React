import React from 'react';

export default function Palavra(props) {
  const { palavra, letrasDescobertas } = props;

  const palavraExibida = palavra
    .split('')
    .map((letra) =>
      letrasDescobertas.includes(letra) ? letra : '_'
    )
    .join(' ');

  return <div className="palavra">{palavraExibida}</div>;
}
