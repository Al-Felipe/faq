import { AreaPerguntas } from "./AreaPerguntas";
import { faqData } from "./data";

function App() {
  return (
    <div className="App">
      <h1>Perguntas Frequentes</h1>
      {faqData.map((pergunta) => (
        <AreaPerguntas perguntas={pergunta} key={pergunta.id} />
      ))}
    </div>
  );
}

export default App;
