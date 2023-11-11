import "./App.css"
import Quadrado from "./components/Quadrado";
import Triangulo from "./components/Triangulo";
import Trapezio from "./components/Trapezio";
import VerificarParidade from "./components/VerificarParidade";
import VerificarNumeroPrimo from "./components/NumeroPrimo";

function App() {
  return (
  <div>
    <Triangulo />
    <Quadrado />
    <Trapezio />
    <VerificarParidade />
    <VerificarNumeroPrimo />
  </div>
  );
}

export default App;