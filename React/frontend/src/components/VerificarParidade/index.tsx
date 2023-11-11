import { useState } from "react";

function VerificarParidade() {
  const [numero, setNumero] = useState(0);

  function verificarParidade() {
    const resultado = numero % 2 === 0 ? "par" : "ímpar";
    alert(`O número é ${resultado}`);
  }

  return (
    <div>
      <input
        placeholder="Digite um número"
        onChange={(e) => setNumero(parseInt(e.target.value))}
      />
      <button onClick={verificarParidade}>Verificar Paridade</button>
    </div>
  );
}

export default VerificarParidade;
