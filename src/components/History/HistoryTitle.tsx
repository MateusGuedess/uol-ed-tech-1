interface HistoryTitleProps {
  title: string;
}

function HistoryTitle({ title }: HistoryTitleProps) {
  return (
    <div className="">
      <p className="text-[25px]">{title}</p>
    </div>
  );
}

export default HistoryTitle;
