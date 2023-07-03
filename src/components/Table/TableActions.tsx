import Button from "../Button";
import Input from "../Input";

interface TableActionsProps {
  onButtonClick: () => void;
}

function TableActions({ onButtonClick }: TableActionsProps) {
  return (
    <div className="flex w-full justify-between align-center">
      <Input
        className="h-[35px] rounded-md focus:ring-0 ring-0 border-[#a29bfe]"
        type="text"
      />
      <Button
        className="w-[120px] h-[35px] mt-[15px] bg-[#a29bfe] rounded-2xl text-[#fff] font-bold cursor-pointer"
        onClick={onButtonClick}
      >
        Criar
      </Button>
    </div>
  );
}

export default TableActions;
