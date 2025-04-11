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
  status: string;
  lastAi: string;
  lastCalving: string;
}

interface User {
  id: string;
  fullName: string;
  mobileNumber: string;
  address: string;
  district: string;
  state: string;
  pincode: string;
  aadharCard: File | null;
  languagePreference: any;
  termsAgreed: boolean;
  password: string;
  animalTypes: {
    cow: boolean;
    buffalo: boolean;
    goat: boolean;
  };
  numberOfAnimals: string;
}

interface Notification {
  id: string;
  title: string;
  description: string;
  date: string;
  read: boolean;
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
  registeredUsers: User[];
  handleRegisteredUsers: (data: User) => void;
  notifications: Notification[];
  handlePushNotification: (notification: Notification) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const useAnimalDataState = createPersistedState<AnimalData[]>("animalData");
const useUserState = createPersistedState<string | null>("user");
const useAiData = createPersistedState<string[]>("aiData");
const useRegisteredUsers = createPersistedState<User[]>("registeredUsers");
const useNotifications = createPersistedState<Notification[]>("notifications");

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [animalData, setAnimalData] = useAnimalDataState([]);
    const [user, setUser] = useUserState(null);
    const [ aiData, setAiData ] = useAiData([]);
  const [vetAiData, setVetAiData] = useAiData([]);
  const [registeredUsers, setRegisteredUsers] = useRegisteredUsers([]);
  const [notifications, setNotifications] = useNotifications([]);

  const handleRegisteredUsers = (data: User) => { 
    setRegisteredUsers((prev) => [...prev, data]);
  }

  const handleAddAnimal = (data: AnimalData) => {
    setAnimalData((prev) => [...prev, data]);
  };

  const handlePushNotification = (notification: Notification) => {
    setNotifications((prev) => [...prev, notification]);
   }

  return (
    <AppContext.Provider
      value={{
        animalData,
        handleAddAnimal,
        user,
        setUser,
        aiData,
        setAiData,
        vetAiData,
        setVetAiData,
        registeredUsers,
        handleRegisteredUsers,
        notifications,
        handlePushNotification,
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
