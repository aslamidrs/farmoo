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
  id: string;
}

interface User {
  fullName: string;
  phoneNumber: string;
  address: string;
  state: string;
  pincode: string;

}

interface AppContextType {
  animalData: AnimalData[];
  handleAddAnimal: (data: AnimalData) => void;
  user: string | null;
  setUser: (user: string | null) => void;
  aiData: string[];
  setAiData: (data: string[]) => void;
    vetAiData: string[];
    setVetAiData: (data: string[]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const useAnimalDataState = createPersistedState<AnimalData[]>("animalData");
const useUserState = createPersistedState<string | null>("user");
const useAiData = createPersistedState<string[]>("aiData");

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [animalData, setAnimalData] = useAnimalDataState([]);
    const [user, setUser] = useUserState(null);
    const [ aiData, setAiData ] = useAiData([]);
    const [ vetAiData, setVetAiData ] = useAiData([]);

  const handleAddAnimal = (data: AnimalData) => {
    setAnimalData((prev) => [...prev, data]);
  };

  return (
    <AppContext.Provider value={{ animalData, handleAddAnimal, user, setUser, aiData, setAiData, vetAiData, setVetAiData }}>
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
