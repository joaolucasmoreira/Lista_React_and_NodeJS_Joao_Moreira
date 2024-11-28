import logo from "./logo.svg";
import "./App.css";
import NovoComponente from "./novo-componente/novo-componente";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Estou usando React</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quero aprender mais sobre React
        </a>
        <NovoComponente />
      </header>
    </div>
  );
}

export default App;
