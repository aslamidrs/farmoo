import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      className="w-full p-2 border border-gray-300 rounded-md"
      {...props}
    />
  );
};
