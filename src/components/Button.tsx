import { MouseEventHandler } from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
  isDisabled?: boolean;
}

const Button = ({ className, children, onClick, isDisabled }: ButtonProps) => {
  // Default Tailwind classes for the button
  const defaultClasses = "px-8 py-1.5 rounded-lg shadow-md";

  // Combine default classes with any custom classes passed via props
  const combinedClasses = `${defaultClasses} ${className || ""}`.trim();
  const disabledClasses = "cursor-not-allowed bg-gray-400 text-gray-700";
  const enabledClasses =
    "bg-blue-400 text-white hover:bg-blue-500 cursor-pointer";
  const classes = `${combinedClasses} ${
    isDisabled ? disabledClasses : enabledClasses
  }`;
  return (
    <div onClick={onClick} className={classes}>
      {children}
    </div>
  );
};

export default Button;
