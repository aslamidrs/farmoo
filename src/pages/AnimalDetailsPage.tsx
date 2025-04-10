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
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Animal Details</h1>
            <p className="text-lg">Details about the selected animal will be displayed here.</p>
            {/* Add more details and components as needed */}
        </div>
    );
}