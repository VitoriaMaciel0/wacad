import { useState, useEffect } from "react";

function VerificarNumeroPrimo() {
  const [numero, setNumero] = useState(0);
  const [veredito, setVeredito] = useState("");

  useEffect(() => {
    if (numero > 1) {
      let isPrimo = true;

      for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          isPrimo = false;
          break;
        }
      }

      const resultado = isPrimo ? "primo" : "não primo";
      setVeredito(resultado);
    } else {
      setVeredito("O número não é primo.");
    }
  }, [numero]);

  const verificarNumeroPrimo = () => {
    alert(`O número é ${veredito}`);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Digite um número"
        onChange={(e) => setNumero(parseInt(e.target.value))}
      />
      <button onClick={verificarNumeroPrimo}>Verificar Número Primo</button>
    </div>
  );
}

export default VerificarNumeroPrimo;
