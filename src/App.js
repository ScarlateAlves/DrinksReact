import logo from "./logo.svg";
import "./App.css";
import Cabecalho from "./menu/Cabecalho";
import Rodape from "./menu/Rodape";
import Exercicio1 from "./menu/Exercicio1";

function App() {
  return (
    <div className="body">
      <Cabecalho />
      <h1 className="tituloContato">Contato</h1>
      <div className="corpoDois">
        <div className="imagemDiv">
          <img src=""></img>
        </div>
        <div className="contato">
          <div className="caixasDiv">
            <label>Nome</label>
            <input
              type="text"
              className="caixasInputs"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="caixasDiv">
            <label>Email</label>
            <input
              type="email"
              className="caixasInputs"
              placeholder="exemple@gmail.com"
            />
          </div>
          <div className="caixasDiv">
            <label>Mensagem</label>
            <textarea
              className="caixaTexto"
              placeholder="Deixe sua mensagem"
            ></textarea>
          </div>
          <div className="caixasDiv">
            <button type="submit" className="botao">
              Enviar
            </button>
          </div>
        </div>
      </div>
      {/* <Exercicio1 /> */}
      <Rodape />
    </div>
  );
}
export default App;
