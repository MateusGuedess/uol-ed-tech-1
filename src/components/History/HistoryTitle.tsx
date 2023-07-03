interface HistoryTitleProps {
  title: string;
}

function HistoryTitle({ title }: HistoryTitleProps) {
  return (
    <div className="h-[35px] my-4">
      <p className="text-[25px]">{title}</p>
    </div>
  );
}

export default HistoryTitle;
