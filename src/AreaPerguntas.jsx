import { useState } from "react";

export const AreaPerguntas = ({ perguntas }) => {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  return (
    <>
      <h2>{perguntas.pergunta}</h2>
      <button onClick={() => setMostrarResposta(!mostrarResposta)}>
        {mostrarResposta ? "-" : "+"}
      </button>
      {mostrarResposta && <p>{perguntas.resposta}</p>}
    </>
  );
};
