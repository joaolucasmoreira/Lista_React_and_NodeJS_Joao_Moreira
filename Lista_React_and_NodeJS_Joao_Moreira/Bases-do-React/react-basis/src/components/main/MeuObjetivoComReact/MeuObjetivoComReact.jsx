/* eslint-disable no-unused-vars */
import "./MeuObjetivoComReact.css";
const MeuObjetivoComReact = () => {
  const objetivos = [
    "Criar aplicações otimizadas e de reação rápidas",
    "Criar webaps belos e dinâmicos",
    "Criar meu próprio website",
  ];

  return (
    <>
      <h2>Meus Objetivos com React</h2>
      <div className="goal-card">
        <ul>
          {objetivos.map((objetivo, index) => (
            <li key={index}>{objetivo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MeuObjetivoComReact;
