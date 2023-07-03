interface HistoryContentProps {
  action: "Foto Atualizada" | "Nome Atualizado" | "Comentário";
  comment?: string;
  photo: string;
  title: string;
}

function HistoryContent({
  action,
  photo,
  title,
  comment,
}: HistoryContentProps) {
  return <div className="border-[1px]">teste</div>;
}

export default HistoryContent;
