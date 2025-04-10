import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useMemo } from "react";

export default function AnimalDetailsPage() {
    const [searchParams] = useSearchParams();
    const animalId = searchParams.get("id");
    const { animalData } = useAppContext();
    const animal = useMemo(() => {
        return animalData.find((animal) => animal.id === animalId);
    }, [animalId]);
    if (!animal) {
        return <div>Animal not found</div>;
    }
    return (
    <div className="bg-gray-100 min-h-screen p-4 mt-36">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Basic Details Section */}
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Basic Details
          </h2>
          <div className="bg-gray-200 rounded-md h-24 w-full mb-4">
                        <img
                            alt="Animal"
                            src={animal.image}
                            className="w-full h-full object-cover rounded-md"
                        />
          </div>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Animal UID No :</span>
            </div>
            <div>1,200</div>
            <div>
              <span className="font-semibold">Animal Name :</span>
            </div>
            <div>1,200</div>
            <div>
              <span className="font-semibold">Animal Type :</span>
            </div>
            <div>1,200</div>
            <div>
              <span className="font-semibold">Animal Breed :</span>
            </div>
            <div>1,200</div>
          </div>
        </div>

        {/* Health & Vaccination Section */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Health & Vaccination
          </h2>
          <div className="mb-4">
            <div className="flex justify-between items-center text-sm text-gray-700">
              <div className="font-semibold">Vaccination History</div>
              {/* Placeholder for Info Icon */}
              <div className="text-gray-500">ⓘ</div>
            </div>
            <div className="text-gray-700">
              <div className="font-semibold">Abc</div>
              <div className="text-gray-500 text-xs">date of vaccination</div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center text-sm text-gray-700">
              <div className="font-semibold">Vaccination History</div>
              {/* Placeholder for Info Icon */}
              <div className="text-gray-500">ⓘ</div>
            </div>
            <div className="text-gray-700">
              <div className="font-semibold">Abc</div>
              <div className="text-gray-500 text-xs">date of vaccination</div>
            </div>
          </div>
          {/* Add more vaccination history items here if needed */}
        </div>

        {/* Breeding Info Section */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Breeding info
          </h2>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Status</span>
            </div>
            <div>Dry</div>
            <div>
              <span className="font-semibold">last calving</span>
            </div>
            <div>
              <span className="font-semibold">expecting Calving</span>
            </div>
            <div>date</div>
            <div>date</div>
          </div>
        </div>
      </div>
    </div>
  );
}