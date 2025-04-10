import React from "react";

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mx-auto">
      {children}
    </div>
  );
};
