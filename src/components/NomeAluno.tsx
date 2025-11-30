type NomeAlunoProps = {
  nome: string;
};

export default function NomeAluno({ nome }: NomeAlunoProps) {
  return (
    <div>
      Aluno: <span className='text-cyan-500'>{nome}</span>
    </div>
  );
}
