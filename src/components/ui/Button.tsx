import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-lg font-medium transition-colors",
        {
          "bg-primary text-white hover:bg-primary-dark": variant === "primary",
          "bg-secondary text-black hover:bg-secondary-dark":
            variant === "secondary",
        },
        className
      )}
      {...props}
    />
  );
};
