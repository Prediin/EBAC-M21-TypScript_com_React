import FormularioReclamacao from "./components/FormularioReclamacao";
import { useState } from "react";
import type { Reclamacao } from "./tipos/Reclamacao";
import ListaReclamacoes from "./components/LIstaReclamacoes";
import "./App.css";

function App() {

  const [reclamacoes, setReclamacoes] = useState<Reclamacao[]>([])

  const adicionarReclamacao = (dados: Reclamacao) => {
    const nova : Reclamacao = {
      ...dados,
      id: 1,
    }
    setReclamacoes(prev => [...prev, nova]);
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Fale com a gente</p>
        <h1>Central de reclamações</h1>
        <p>Registre seu problema de forma rápida e acompanhe seus relatos.</p>
      </header>
      <FormularioReclamacao aoEnviar={adicionarReclamacao}/>
      <ListaReclamacoes reclamacoes={reclamacoes}/>
    </main>
  )
}

export default App
