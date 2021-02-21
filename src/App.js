import "./App.css";
import Cabecalho from "./Componentes/Cabecalho/Cabecalho";
import Rodape from "./Componentes/Rodape/Rodape";
import Exercicio1 from "./Componentes/Exercicio1";
import PagContato from "./Componentes/PagContato/PagContato";
import PagHome from "./Componentes/PagHome/PagHome";

function App() {
  return (
    <div className="body">
      <Cabecalho />
      {/* <PagHome /> */}
      <PagContato />
      <Rodape />
      {/* <Exercicio1 /> */}
    </div>
  );
}
export default App;
