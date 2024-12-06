/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import CoreConcept from "../coreconcetp/CoreConcept.jsx";
import "./MainContent.css";
import MeuObjetivoComReact from "./MeuObjetivoComReact/MeuObjetivoComReact.jsx";

import { conceitosChaves } from "../../data.js";
import TabButton from "../tabbutton/tabbutton.jsx";

import { useState } from "react";

const MainContent = () => {
  const [tabContent, setTabContent] = useState("Clique em uma opção acima!");

  const handleConceptCick = (e) => {
    //Método para lidar com o click que "joga" um alert com o texto do elemento target/"alvo" clicado
    alert(e.target.innerText);
  };

  const handleTabButton = (e) => {
    setTabContent(e.target.innerText);
  };

  return (
    <main>
      <MeuObjetivoComReact />
      <section id="core-concepts">
        {conceitosChaves &&
          conceitosChaves.map((conceitoChave, key) => {
            // Exemplo de props via 'Spread Operators ...conceitoChave e exemplo de Handler de click no componente CoreConcept '
            return (
              <CoreConcept
                key={key}
                {...conceitoChave}
                action={handleConceptCick}
              />
            );
          })}
      </section>
      <section id="examples">
        <h2>Exemplos</h2>
        <menu>
          {conceitosChaves &&
            conceitosChaves.map((conceitoChave, key) => {
              return (
                <TabButton key={key} onClick={handleTabButton}>
                  {conceitoChave.titulo}
                </TabButton>
              );
            })}
        </menu>
            <div id="tab-content">
              <h3></h3>
              <p></p>
              <pre>
                <code>
                  
                </code>
              </pre>
            </div>



        {tabContent}
      </section>
    </main>
  );
};

export default MainContent;
