import React, { useContext, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { TextArea } from "../components/ui/TextArea";
import { Label } from "../components/ui/Label";
import { Button } from "../components/ui/Button";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const breedOptions: Record<string, string[]> = {
  cow: [
    "Gir",
    "Sahiwal",
    "Red Sindhi",
    "Tharparkar",
    "Kankrej",
    "Jersey",
    "Holstein Friesian",
  ],
  buffalo: ["Murrah", "Jaffarabadi", "Mehsana", "Banni", "Nili-Ravi", "Surti"],
  goat: [
    "Jamunapari",
    "Beetal",
    "Barbari",
    "Black Bengal",
    "Sirohi",
    "Osmanabadi",
  ],
};

export const AddAnimalPage: React.FC = () => {
  const [animalType, setAnimalType] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const { handleAddAnimal, animalData } = useAppContext();


  const onSubmit = (data: any) => {
    handleAddAnimal(data);
    navigate('/protected/animals');
  };

  console.log("Animal Data:", animalData);

  const image = watch("image");
  const imagePreview = useMemo(() => image, [image]);

  const selectedAnimalType = watch("type") || animalType;

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="flex flex-col items-center mb-6">
        <label htmlFor="animal-img">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Animal"
              className="w-24 h-24 rounded-full object-cover border"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
              Img
            </div>
          )}
        </label>
        <Controller
          name="image"
          control={control}
          rules={{ required: "Image is required" }}
          render={({ field }) => (
            <input
              id="animal-img"
              type="file"
              accept="image/*"
              className="mt-2 text-sm w-0 h-0"
              {...field}
            />
          )}
        />
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center text-primary">
        Add Animal Details
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="type" text="Animal Type" />
          <Controller
            name="type"
            control={control}
            rules={{ required: "Animal type is required" }}
            render={({ field }) => (
              <Select
                id="type"
                options={[
                  { label: "Select Animal Type", value: "" },
                  { label: "Cow", value: "cow" },
                  { label: "Buffalo", value: "buffalo" },
                  { label: "Goat", value: "goat" },
                ]}
                {...field}
                onChange={(e) => {
                  setAnimalType(e.target.value);
                  field.onChange(e);
                }}
              />
            )}
          />
          {errors.type && (
            <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="breed" text="Breed" />
          <Controller
            name="breed"
            control={control}
            rules={{ required: "Breed is required" }}
            render={({ field }) => (
              <Select
                id="breed"
                options={(breedOptions[selectedAnimalType] || []).map(
                  (breed) => ({
                    label: breed,
                    value: breed,
                  })
                )}
                {...field}
              />
            )}
          />
          {errors.breed && (
            <p className="text-red-500 text-sm mt-1">{errors.breed.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="gender" text="Gender" />
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Gender is required" }}
            render={({ field }) => (
              <Select
                id="gender"
                options={[
                  { label: "Select Gender", value: "" },
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                {...field}
              />
            )}
          />
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="dob" text="Date of Birth / Age" />
          <Input
            id="dob"
            type="date"
            {...register("dob", { required: "Date of birth is required" })}
          />
          {errors.dob && (
            <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="weight" text="Weight (optional)" />
          <Input
            id="weight"
            placeholder="e.g., 250 kg"
            {...register("weight")}
          />
        </div>

        <div>
          <Label htmlFor="name" text="Name / Tag ID" />
          <Input
            id="name"
            placeholder="Enter name or tag ID"
            {...register("name", { required: "Name or Tag ID is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="notes" text="Notes" />
          <TextArea
            id="notes"
            placeholder="e.g., vaccination history, delivery dates..."
            rows={4}
            {...register("notes")}
          />
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};
