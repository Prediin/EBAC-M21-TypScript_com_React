import type { Reclamacao } from "../tipos/Reclamacao";

type Props = {
    reclamacao: Reclamacao
}

const ItemReclamacao = ({reclamacao}: Props) => {

    return (
        <article className="reclamacao-card">
            <div>
                <strong>{reclamacao.nome}</strong>
            </div>
            <p>{reclamacao.mensagem}</p>
        </article>
    );
};

export default ItemReclamacao;
