import { UsersRound, Receipt, Plus } from "lucide-react";
import { NavigateFunction } from "react-router-dom";

export interface NavbarContainerProps {
  navigate: NavigateFunction;
}

export default function NavbarContainer(props: NavbarContainerProps) {
    return (
      <footer className="fixed w-full bottom-0 bg-white shadow-inner flex justify-around text-xs">
        <button
          onClick={() => props.navigate("/protected/community")}
          className="flex flex-col items-center p-2 w-28"
        >
          <UsersRound size={28} className="text-primary" />
          <span>Community</span>
        </button>
        <div className="relative w-16">
          <button
            onClick={() => props.navigate("/protected/add-animal")}
            className="flex flex-col items-center absolute w-16 h-16 bottom-6 rounded-full bg-primary justify-center"
          >
            <Plus size={28} color="white" />
          </button>
        </div>
        <button
          onClick={() => props.navigate("/protected/profile")}
          className="flex flex-col items-center p-2 w-28"
        >
          <Receipt size={28} className="text-primary" />
          <span>Trade</span>
        </button>
      </footer>
    );
}