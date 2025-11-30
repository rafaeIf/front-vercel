import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import { listaProdutos } from '../../components/listaProdutos'
import { Link } from "react-router-dom";

export default function Produtos() {
    return(
        <main>
            <Menu></Menu>
            <h1 className="text-center font-semibold mt-5 text-2xl">PRODUTOS</h1>
            {listaProdutos.map(produto => (
                <div className="font-medium text-gray-700 ml-5" key={produto.id}>
                    <Link to={`/produtos/editar/${produto.id}`}>
                    Editar o Produto: <span className='text-cyan-500'>{produto.nome}</span>
                    </Link>
                </div>
            ))}
            <Footer/>
        </main>
    )
}