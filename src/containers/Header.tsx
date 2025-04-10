import { Menu } from "lucide-react";

export default function HeaderContainer() {
    return (
      <header className="sticky top-0  shadow-sm p-4 z-10 flex flex-col gap-2 bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Farmoo</h1>
          <button>
            <Menu size={28} className="text-gray-600" />
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search animals, services..."
            className="w-full px-4 py-2 rounded-lg border-2 border-primary focus:outline-none"
          />
        </div>
      </header>
    );
}