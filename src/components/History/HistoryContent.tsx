import Image from "next/image";

interface HistoryContentProps {
  action: string;
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
          className="rounded-[50%] w-[50px] h-[40px]"
          src="/profile.jpeg"
          width={50}
          height={50}
          alt="Profile"
        />
      </div>
      <div className="flex flex-col ml-[10px] w-full">
        <p className="text-[12px]">{action}</p>
        {comment && <p className="text-[10px]">{comment}</p>}
        <p className="self-end text-[9px]">20/07</p>
      </div>
    </div>
  );
}

export default HistoryContent;
