import { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password" | "file";
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  className: string;
  placeholder: string;
  accept?: string;
}

function Input({
  type = "text",
  value = "",
  onChange,
  name = "",
  id = "",
  className = "",
  placeholder = "",
  accept,
}: Partial<InputProps>) {
  return (
    <input
      placeholder={placeholder}
      style={{ border: "1.5px solid #e9e9e9" }}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      className={`${className} h-[35px] rounded-lg px-[5px]`}
      accept={accept}
    />
  );
}

export default Input;
