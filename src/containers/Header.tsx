import { Bell, Menu } from "lucide-react";

export default function HeaderContainer() {
    return (
      <header className="sticky top-0  shadow-sm z-10 flex flex-col gap-2 bg-white py-2">
        <div className="flex justify-between items-center px-4">
          <div className="flex items-center gap-4" >
            <button>
              <Menu size={32} className="text-primary" />
            </button>
            <h1 className="text-2xl text-primary font-bold">Farmoo</h1>
          </div>
          <Bell size={20} className="text-primary" />
        </div>
        <div className="relative w-full max-w-md px-2">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
            <div className="relative w-6 h-6">
              {/* Animated stars */}
              <div className="absolute left-2 inset-0 animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Ask me anything..."
            className="w-full pl-12 pr-4 py-2 focus:outline-none rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"
          />
        </div>
      </header>
    );
}