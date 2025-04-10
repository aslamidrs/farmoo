import React, { createContext, useContext, useState, ReactNode } from "react";

interface AnimalData {
  type: string;
  breed: string;
  gender: string;
  dob: string;
  weight?: string;
  name: string;
  notes?: string;
  image?: string;
}

interface AppContextType {
  animalData: AnimalData | null;
  setAnimalData: (data: AnimalData) => void;
  user: string | null;
  setUser: (user: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [animalData, setAnimalData] = useState<AnimalData | null>(null);
  const [user, setUser] = useState<string | null>(null);

  return (
    <AppContext.Provider
      value={{
        animalData,
        setAnimalData,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
