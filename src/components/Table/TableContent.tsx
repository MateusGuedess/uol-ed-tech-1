interface TableContentProps {
  data: User[];
}

type User = {
  nome: string;
  cargo: string;
  cpf: string;
  email: string;
};

function TableContent({ data }: TableContentProps) {
  return <div>TableContent</div>;
}

export default TableContent;
