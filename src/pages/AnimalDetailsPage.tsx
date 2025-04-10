import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useMemo } from "react";
import { getVaccineSchedule } from "../components/vaccine-cow";
import { animalIcons } from "../assets/animal-icons";

export default function AnimalDetailsPage() {
  const { id } = useParams();
  const { animalData } = useAppContext();
  const animal = useMemo(() => {
    return animalData.find((animal) => animal.id === id);
  }, [id]);
  if (!animal) {
    return <div>Animal not found</div>;
  }

  const handleVaccineClick = (months: number, vaccineName: string) => {
    const vaccinationData = JSON.parse(localStorage.getItem(`${id}-vaccination`) || '[]');
    vaccinationData.forEach((vaccine: any) => {
      if (vaccine.ageInMonth === months) {
        vaccine.vaccines.map((v: any) => {
          if (v.name === vaccineName) {
            v.isVaccinated = true;
          }
        });
      }
    });
    localStorage.setItem(`${id}-vaccination`, JSON.stringify(vaccinationData));
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 mt-36">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Basic Details Section */}
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Basic Details
          </h2>
          <div className="rounded-md w-full mb-4">
            {animal.image ? <img
              alt="Animal"
              src={animal.image}
              className="bg-gray-200 w-full h-24 object-cover rounded-md"
            /> : <img
              alt="Animal"
              src={animalIcons[animal.type as keyof typeof animalIcons]}
              className="h-20 w-20 object-cover rounded-md"
            />}
          </div>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Animal UID No :</span>
            </div>
            <div>{animal.id}</div>
            <div>
              <span className="font-semibold">Animal Name :</span>
            </div>
            <div>{animal.name}</div>
            <div>
              <span className="font-semibold">Animal Gender :</span>
            </div>
            <div>{animal.gender}</div>
            <div>
              <span className="font-semibold">Animal Breed :</span>
            </div>
            <div>{animal.breed}</div>
            <div>
              <span className="font-semibold">Animal DOB :</span>
            </div>
            <div>{animal.dob}</div>
          </div>
        </div>

        {/* Health & Vaccination Section */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Health & Vaccination
          </h2>
          <div className="mb-4">
            {
              getVaccineSchedule(new Date(animal.dob), animal.id).map((vaccine) => (
                <div key={vaccine.ageInMonth} className="flex justify-between items-center gap-4 mb-2">
                  <p className="text-sm text-gray-500">{vaccine.ageInMonth} months</p>
                  <div className="flex items-center gap-2">
                  {
                    vaccine.vaccines.map((v: any) => (
                      <form className="flex items-center gap-2">
                        <input checked={v.isVaccinated} disabled={v.isVaccinated} onClick={() => handleVaccineClick(vaccine.ageInMonth, v.name)} id={v.name} name={v.name} type="checkbox" className="w-4 h-4 text-primary" />
                        <label htmlFor={v.name} className="text-md">{v.name}</label>
                      </form>
                    ))
                  }
                  </div>
                </div>
              ))
            }
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