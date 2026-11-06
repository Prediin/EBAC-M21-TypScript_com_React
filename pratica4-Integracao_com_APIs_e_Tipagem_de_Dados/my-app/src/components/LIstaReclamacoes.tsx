import type { Reclamacao } from "../tipos/Reclamacao";
import ItemReclamacao from "./ItemReclamacao";

type Props = {
    reclamacoes: Reclamacao[];
}

const ListaReclamacoes = ({reclamacoes}: Props) => {

    if (reclamacoes.length === 0)
        return <p className="empty">Nenhuma reclamação foi registrada ainda.</p>

    return (
        <section className="reclamacoes">
            <h2 className="reclamacoes-title">Reclamações registradas <span>{reclamacoes.length}</span></h2>
            {
                reclamacoes.map(item => (<ItemReclamacao key={item._id} reclamacao={item}/>))
            }
        </section>
    );
};

export default ListaReclamacoes;
