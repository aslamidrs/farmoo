import React, { createContext, useContext, ReactNode } from "react";
import createPersistedState from "use-persisted-state";
interface AnimalData {
  type: string;
  breed: string;
  gender: string;
  dob: string;
  weight?: string;
  name: string;
  notes?: string;
  image: string;
}

interface AppContextType {
  animalData: AnimalData[];
  handleAddAnimal: (data: AnimalData) => void;
  user: string | null;
  setUser: (user: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const useAnimalDataState = createPersistedState<AnimalData[]>("animalData");
const useUserState = createPersistedState<string | null>("user");

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [animalData, setAnimalData] = useAnimalDataState([]);
  const [user, setUser] = useUserState(null);

  const handleAddAnimal = (data: AnimalData) => {
    setAnimalData((prev) => [...prev, data]);
  };

  return (
    <AppContext.Provider value={{ animalData, handleAddAnimal, user, setUser }}>
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
