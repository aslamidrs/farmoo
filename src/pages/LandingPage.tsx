import React from "react";

export const LandingPage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-background">
      <div className="flex flex-col items-center h-full">
        <div className="relative w-full max-w-md p-4">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center">
            <div className="relative w-6 h-6">
              {/* Animated stars */}
              <div className="absolute left-4 inset-0 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Ask me anything..."
            className="w-full pl-12 pr-4 py-3 focus:outline-none rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex flex-col justify-center w-full p-4 shadow-xl bg-white rounded-2xl">
        <h2 className="text-2xl p-4 font-bold text-primary text-center">Upcoming Vaccines</h2>
          <div className="flex flex-col p-4 w-full">
            <div className="my-2 w-full flex flex-row shadow rounded-2xl">
              <div className="w-32 h-20 flex flex-col items-center justify-center bg-red-100 border-red-500 border">
                <p className="text-2xl font-bold text-red-500">7</p>
                <p className="text-sm text-gray-500">Apr 2025</p>
              </div>
              <div className="w-full flex flex-col">
                <div className="bg-red-100 w-full h-8 flex items-center justify-center border-red-500 border border-l-0 relative">
                  <p className="text-sm text-red-500 rounded-md">Missed Vaccine</p>
                  <div className="absolute -left-1 h-full w-2 bg-red-100" ></div>
                </div>
                <div className="w-full h-12 flex items-center justify-center">
                  <p className="text-md">Akash | Vaccine Name</p>
                </div>
              </div>
            </div>
            <div className="my-2 w-full flex flex-row shadow rounded-2xl">
              <div className="w-32 h-20 flex flex-col items-center justify-center bg-blue-200 border-blue-500 border">
                <p className="text-2xl font-bold text-blue-500">27</p>
                <p className="text-sm text-gray-500">Apr 2025</p>
              </div>
              <div className="w-full flex flex-col relative">
                <div className="bg-blue-200 w-full h-8 flex items-center justify-center border-blue-500 border border-l-0">
                  <p className="text-sm text-blue-500">Due in 16 days</p>
                </div>
                <div className="w-full h-12 flex items-center justify-center">
                  <p className="text-md">Akash | Vaccine Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
