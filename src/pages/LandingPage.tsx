import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVaccineSchedule } from "../components/vaccine-cow";

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [vaccineSchedule, setVaccineSchedule] = useState<any[]>([]);

  useEffect(() => {
    const schedule = getVaccineSchedule(new Date());
    setVaccineSchedule(schedule);
  }, []);

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
        {/* <div className="flex flex-col justify-center w-full p-4 shadow-xl bg-white rounded-2xl">
          <h2 className="text-2xl p-4 font-bold text-primary text-center">Vaccine Schedule</h2>
          <div className="flex flex-col p-4 w-full">
            
          </div>
        </div> */}
        <div 
          onClick={() => window.open('https://wa.me/7460833848', '_blank')}
          className="flex border-2 rounded-2xl w-7/8 mt-8 mb-2 p-4 bg-white border-gray-400 cursor-pointer hover:bg-gray-50"
        >
          <div className="flex items-center justify-center p-4 border-r border-gray-400">
            <img width="50" height="50" src="https://img.icons8.com/ios/50/whatsapp.png" alt="whatsapp" />
          </div>
          <div className="flex flex-col pl-4 justify-center">
            <p className="text-xl font-bold text-primary">Chat with Farmoo</p>
            <p className="text-md text-gray-500">Ask anything about your farm</p>
          </div>
        </div>
        <div onClick={() => navigate('/protected/ai?vet=true')} className="flex border-2 rounded-2xl w-7/8 p-4 bg-white border-gray-400">
          <div className="flex items-center justify-center p-4 border-r border-gray-400">
          <img width="50" height="50" src="https://img.icons8.com/ios/50/veterinarian-male.png" alt="veterinarian-male"/>
          </div>
          <div className="flex flex-col pl-4 justify-center">
            <p className="text-xl font-bold text-primary">Ask our AI Vet</p>
            <p className="text-md text-gray-500">Get instant help from our AI Vet</p>
          </div>
        </div>
      </div>
    </div>
  );
};
