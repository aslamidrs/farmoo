import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <div className="relative">
      <input
        {...props}
        className={`w-full h-[56px] bg-[rgba(255,255,255,0.15)] rounded-[12px] px-[16px] pt-[20px] text-white border-[1px] border-[rgba(255,255,255,0.2)] focus:border-[#85B362] outline-none transition-colors text-[16px] ${className}`}
        placeholder=" "
      />
      <label className="absolute text-[14px] text-[rgba(255,255,255,0.6)] left-[16px] top-[8px]">
        {label}
      </label>
    </div>
  );
};

export default InputField;
