import React from "react";

interface CountryCodeSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CountryCodeSelect: React.FC<CountryCodeSelectProps> = ({
  value,
  onChange,
}) => {
  return (
    <select
      name="countryCode"
      value={value}
      onChange={onChange}
      className="w-[80px] h-[56px] bg-[rgba(255,255,255,0.15)] rounded-l-[12px] px-[8px] pt-[20px] text-white border-[1px] border-r-0 border-[rgba(255,255,255,0.2)] focus:border-[#4CAF50] outline-none transition-colors text-[16px]"
    >
      <option value="+91">+91</option>
      <option value="+1">+1</option>
      <option value="+44">+44</option>
    </select>
  );
};

export default CountryCodeSelect;
