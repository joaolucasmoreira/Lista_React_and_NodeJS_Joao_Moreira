/* eslint-disable react/prop-types */
import "./CoreConcept.css"

const CoreConcept = ({titulo, conceitos}) => {
    return (
      <>
      <h2>{titulo}</h2>
      <ul>
        <li>{conceitos}</li>
      </ul>
      </>
    )
  };

export default CoreConcept;