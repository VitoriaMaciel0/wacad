import { useState } from "react";


function Quadrado() {
  const [n1, SetN1] = useState(0);
  const [n2, SetN2] = useState(0);
  
  function AreaQuadrado() {
    alert(n1 * n2)
  }

  return (
    <div>
      <input
        placeholder="Base 1"
        onChange={(e) => SetN1(parseInt(e.target.value))}
      />
      <input
        placeholder="Altura 2"
        onChange={(e) => SetN2(parseInt(e.target.value))}
      />
      <button onClick={() => AreaQuadrado()}>Area Quadrado</button>
    </div>
  );
}

export default Quadrado;