export default function Letras(props) {
  const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return (
    <div className="teclado">
        {alfabeto.map((letra) => (
            <button key={letra} className="letra" disabled={!props.isEnabled}>{letra}
            </button>
        ))}
    </div>
  );
}  