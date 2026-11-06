import FormularioReclamacao from "./components/FormularioReclamacao";
import { useEffect, useState } from "react";
import type { Reclamacao } from "./tipos/Reclamacao";
import ListaReclamacoes from "./components/LIstaReclamacoes";
import "./App.css";
import axios from "axios";

const API_URL = 'https://crudcrud.com/api/07c6cf7b46414d06a4b5e347876b9ae7/reclamacoes';

function App() {

  const [reclamacoes, setReclamacoes] = useState<Reclamacao[]>([])

  const adicionarReclamacao = (dados: Reclamacao) => {

    axios
      .post<Reclamacao>(API_URL, dados)
      .then(resposta => setReclamacoes(prev => [...prev, resposta.data]))
  }

  useEffect(() => {
    axios
      .get<Reclamacao[]>(API_URL)
      .then(resposta => setReclamacoes(resposta.data));
  }, [])

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
