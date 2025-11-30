import NomeAluno from '../../components/NomeAluno'
import Logo from "../../assets/Fiap-logo-novo.jpg"
import Menu from '../../components/Menu'

export default function Home() {

    const campus = 'Paulista'
    const curso = 'IA'
    const aluno = 'João'

    return(
        <main>
            <Menu/>
            <h1>TDS FIAP - HOME</h1>
            <img src={Logo}  alt="logo" />
            <p>Campus: {campus}</p>
            <p>Curso: {curso}</p>
            <NomeAluno nome={aluno}/>
        </main>
    )
}