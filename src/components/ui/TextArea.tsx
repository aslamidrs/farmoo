import React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <textarea
      className="w-full p-2 border border-gray-300 rounded-md"
      {...props}
    />
  );
};
