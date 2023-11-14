import { useState } from "react";

function Trapezio() {
  const [baseMaior, setBaseMaior] = useState(0);
  const [baseMenor, setBaseMenor] = useState(0);
  const [altura, setAltura] = useState(0);

  function calcularAreaTrapezio() {
    const area = ((baseMaior + baseMenor) * altura) / 2;
    alert(`A área do trapézio é: ${area}`);
  }

  return (
    <div>
      <input
        placeholder="Base Maior"
        onChange={(e) => setBaseMaior(parseFloat(e.target.value))}
      />
      <input
        placeholder="Base Menor"
        onChange={(e) => setBaseMenor(parseFloat(e.target.value))}
      />
      <input
        placeholder="Altura"
        onChange={(e) => setAltura(parseFloat(e.target.value))}
      />
      <button onClick={calcularAreaTrapezio}>Calcular Área do Trapézio</button>
    </div>
  );
}

export default Trapezio;
