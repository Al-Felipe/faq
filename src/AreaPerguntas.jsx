import { useState } from "react";

export const AreaPerguntas = ({ perguntas }) => {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  return (
    <>
      <div className="container">
        <h2>{perguntas.pergunta}</h2>
        <button onClick={() => setMostrarResposta(!mostrarResposta)}>
          {mostrarResposta ? "-" : "+"}
        </button>
      </div>
      <div className="resposta">
        {mostrarResposta && <p>{perguntas.resposta}</p>}
      </div>
    </>
  );
};
