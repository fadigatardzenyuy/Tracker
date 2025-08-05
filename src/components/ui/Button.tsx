import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  disabled,
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const styles = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 shadow-sm",
    secondary:
      "bg-slate-100 text-slate-800 hover:bg-slate-200 focus:ring-slate-400",
    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-400",
    destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const size = "px-6 py-3 text-lg";

  return (
    <button
      type={type}
      className={`${baseStyle} ${size} ${styles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
