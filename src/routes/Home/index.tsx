import NomeAluno from '../../components/NomeAluno'
import Logo from "../../assets/Fiap-logo-novo.jpg"
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

export default function Home() {

    const campus = 'Paulista'
    const curso = 'IA'
    const aluno = 'João'

    return(
        <main>
            <Menu/>
            <h1 className='text-center font-semibold mt-5 text-2xl'>TDS FIAP - HOME</h1>
            <div className='flex justify-center'><img src={Logo}  alt="logo" className='h-20 center text-center'/></div>
            <div className='font-medium text-gray-700 ml-5'>
                <p>Campus: <span className='text-cyan-500'>{campus}</span></p>
                <p>Curso: <span className='text-cyan-500'>{curso}</span></p>
                <NomeAluno nome={aluno}/>
            </div>
            <Footer/>
        </main>
    )
}