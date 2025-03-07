// src/components/Button.tsx
import React, { ButtonHTMLAttributes, FC } from "react";
import cn from "classnames";

export type ButtonVariant = "default" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

/**
 * 參考 shadcn UI 設計風格的 Button 元件
 */
const Button: FC<ButtonProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  const variants: Record<ButtonVariant, string> = {
    default: "bg-primary text-white hover:bg-blue-700",
    outline: "border border-primary text-primary hover:bg-blue-50",
  };

  return (
    <button
      className={cn(
        "px-4 py-2 rounded transition-colors duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
