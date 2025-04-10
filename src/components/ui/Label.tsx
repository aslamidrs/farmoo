import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

export const Label: React.FC<LabelProps> = ({ text, ...props }) => {
  return (
    <label className="block mb-1 text-sm font-medium text-gray-700" {...props}>
      {text}
    </label>
  );
};
