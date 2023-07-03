import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  size?: string;
  type?: "submit";
  onClick?: () => void;
  disabled?: boolean;
}

function Button({
  children,
  size,
  className,
  type,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
