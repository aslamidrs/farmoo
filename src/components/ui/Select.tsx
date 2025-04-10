import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string }[];
}

export const Select: React.FC<SelectProps> = ({ options, ...props }) => {
  return (
    <select className="w-full p-2 border border-gray-300 rounded-md" {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
