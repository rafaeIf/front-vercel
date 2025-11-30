import Menu from "../../components/Menu";
import { listaProdutos } from '../../components/listaProdutos'
import { Link } from "react-router-dom";

export default function Produtos() {
    return(
        <main>
            <Menu></Menu>
            <h1>PRODUTOS</h1>
            {listaProdutos.map(produto => (
                <div key={produto.id}>
                    <Link to={`/produtos/editar/${produto.id}`}>
                    Editar o Produto: {produto.nome}
                    </Link>
                </div>
            ))}
        </main>
    )
}