import { useNavigate, useParams } from "react-router-dom"
import { listaProdutos } from "../../components/listaProdutos"
import Menu from "../../components/Menu"
import Footer from "../../components/Footer"

export default function EditarProdutos() {

    const lista = listaProdutos
    const navegacao = useNavigate()
    const {id} = useParams()

    const idNumber = Number(id)
    const proc = lista.filter(produto => produto.id == idNumber)
    const produto = proc[0]

    const salvar = () => {
        alert(`Produto: ${produto.nome} editado com sucesso!`)
        return navegacao('/produtos')

    }
    return(
        <main>
            <Menu/>
            <h1 className="text-center font-semibold mt-5 text-2xl uppercase">Editando o Produto</h1>
            <p className="font-medium text-gray-700 ml-5">Editando os dados do produto: <span className='text-cyan-500'>{produto.nome}</span></p>
            <button className="p-5 bg-[#ed145b] bd-5 m-5 text-white font-semibold rounded-xl" onClick={salvar}>Salvar</button>
            <Footer/>
        </main>
    )
}