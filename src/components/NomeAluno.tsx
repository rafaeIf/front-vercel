type NomeAlunoProps = {
  nome: string;
};

export default function NomeAluno({ nome }: NomeAlunoProps) {
  return (
    <div>
      Aluno: {nome}
    </div>
  );
}
