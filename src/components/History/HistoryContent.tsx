import Image from "next/image";

interface HistoryContentProps {
  action: "Foto Atualizada" | "Nome Atualizado" | "Comentário";
  comment?: string;
  photo: string;
  title: string;
  date: string;
}

function HistoryContent({
  action,
  photo,
  title,
  comment,
  date,
}: HistoryContentProps) {
  return (
    <div className="border-[1px] my-4 flex items-center py-4 px-3">
      <div className="">
        <Image
          className="rounded-[50%] w-[40px] h-[40px]"
          src="/profile.jpeg"
          width={40}
          height={40}
          alt="Profile"
        />
      </div>
      <div className="flex flex-col ml-[5px] w-full">
        <p className="text-[12px]">{action}</p>
        {comment && <p>{comment}</p>}
        <p className="self-end">20/07</p>
      </div>
    </div>
  );
}

export default HistoryContent;
