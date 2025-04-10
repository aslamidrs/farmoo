import React, { useState } from "react";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { TextArea } from "../components/ui/TextArea";
import { Label } from "../components/ui/Label";
import { Button } from "../components/ui/Button";

const breedOptions: Record<string, string[]> = {
  cow: ["Gir", "Sahiwal", "Red Sindhi"],
  buffalo: ["Murrah", "Jaffarabadi", "Mehsana"],
  goat: ["Jamunapari", "Boer", "Barbari"],
};

export const AddAnimalPage: React.FC = () => {
  const [animalType, setAnimalType] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4">
        <div className="flex flex-col items-center mb-6">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Animal"
              className="w-24 h-24 rounded-full object-cover border"
            />
          ) : (
            <label htmlFor="animal-image" className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
              Img
            </label>
          )}
          <input
            id="animal-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 text-sm w-0 h-0"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">
          Add Animal Details
        </h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="type" text="Animal Type" />
            <Select
              id="type"
              name="type"
              options={[
                { label: "Select Animal Type", value: "" },
                { label: "Cow", value: "cow" },
                { label: "Buffalo", value: "buffalo" },
                { label: "Goat", value: "goat" },
              ]}
              value={animalType}
              onChange={(e) => setAnimalType(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="breed" text="Breed" />
            <Select
              id="breed"
              name="breed"
              options={(breedOptions[animalType] || []).map((breed) => ({
                label: breed,
                value: breed,
              }))}
              required
            />
          </div>

          <div>
            <Label htmlFor="gender" text="Gender" />
            <Select
              id="gender"
              name="gender"
              options={[
                { label: "Select Gender", value: "" },
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
              required
            />
          </div>

          <div>
            <Label htmlFor="dob" text="Date of Birth / Age" />
            <Input id="dob" name="dob" type="date" required />
          </div>

          <div>
            <Label htmlFor="weight" text="Weight (optional)" />
            <Input id="weight" name="weight" placeholder="e.g., 250 kg" />
          </div>

          <div>
            <Label htmlFor="name" text="Name / Tag ID" />
            <Input
              id="name"
              name="name"
              placeholder="Enter name or tag ID"
              required
            />
          </div>

          <div>
            <Label htmlFor="notes" text="Notes" />
            <TextArea
              id="notes"
              name="notes"
              placeholder="e.g., vaccination history, delivery dates..."
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
    </div>
  );
};
