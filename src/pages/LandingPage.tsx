import React from "react";

export const LandingPage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-background">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center w-full p-4 shadow-xl mt-36 bg-white rounded-2xl">
        <h2 className="text-2xl p-4 font-bold text-primary text-center">Upcoming Vaccines</h2>
          <div className="flex flex-col p-4 w-full">
            <div className="my-2 w-full flex flex-row shadow rounded-2xl">
              <div className="w-32 h-20 flex flex-col items-center justify-center border-r border-red-500">
                <p className="text-2xl font-bold text-red-500">7</p>
                <p className="text-sm text-red-500">Apr 2025</p>
              </div>
              <div className="w-full flex flex-col">
                <div className="bg-red-500 w-full h-8 flex items-center justify-center border-red-500 border border-l-0 relative">
                  <p className="text-sm text-white rounded-md">Missed Vaccine</p>
                  {/* <div className="absolute -left-1 h-full w-2 bg-red-500" ></div> */}
                </div>
                <div className="w-full h-12 flex items-center justify-center">
                  <p className="text-md">Akash | Vaccine Name</p>
                </div>
              </div>
            </div>
            <div className="my-2 w-full flex flex-row shadow rounded-2xl">
              <div className="w-32 h-20 flex flex-col items-center justify-center border-r border-blue-500">
                <p className="text-2xl font-bold text-blue-500">27</p>
                <p className="text-sm text-blue-500">Apr 2025</p>
              </div>
              <div className="w-full flex flex-col relative">
                <div className="w-full h-20 flex items-center justify-center">
                  <p className="text-md">Sandeep | Vaccine Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
