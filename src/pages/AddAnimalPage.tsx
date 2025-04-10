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

const vaccinationData = {
  cow: [
      {
        ageInMonth: 0,
        vaccines: [
          {
            name: "Calfhood Vaccine",
            purpose: "Basic respiratory protection",
            repeat: "Once",
            isOptional: true
          }
        ]
      },
      {
        ageInMonth: 3, // 3 months
        vaccines: [
          {
            name: "FMD",
            fullName: "Foot & Mouth Disease", 
            purpose: "Viral disease prevention",
            repeat: "Every 6 months"
          }
        ]
      },
      {
        ageInMonth: 4, // 4 months
        vaccines: [
          {
            name: "HS",
            fullName: "Hemorrhagic Septicemia",
            purpose: "Bacterial infection (monsoon disease)",
            repeat: "Annually"
          },
          {
            name: "BQ",
            fullName: "Black Quarter",
            purpose: "Sudden muscle infection", 
            repeat: "Annually"
          }
        ]
      },
      {
        ageInMonth: 6, // 6 months
        vaccines: [
          {
            name: "Brucellosis",
            purpose: "Infertility/abortion prevention",
            repeat: "Once in lifetime",
            forFemaleOnly: true
          }
        ]
      },
      {
        ageInMonth: 9, // 9 months
        vaccines: [
          {
            name: "Theileriosis",
            purpose: "Tick-borne disease",
            repeat: "Once",
            isOptional: true
          }
        ]
      }
  ],
  buffalo: [
      {
        ageInMonth: 0,
        vaccines: [
          {
            name: "Calfhood Vaccine",
            purpose: "Basic respiratory protection",
            repeat: "Once",
            isOptional: true
          }
        ]
      },
      {
        ageInMonth: 3, // 3 months
        vaccines: [
          {
            name: "FMD",
            fullName: "Foot & Mouth Disease", 
            purpose: "Viral disease prevention",
            repeat: "Every 6 months"
          }
        ]
      },
      {
        ageInMonth: 4, // 4 months
        vaccines: [
          {
            name: "HS",
            fullName: "Hemorrhagic Septicemia",
            purpose: "Bacterial infection (monsoon disease)",
            repeat: "Annually"
          },
          {
            name: "BQ",
            fullName: "Black Quarter",
            purpose: "Sudden muscle infection", 
            repeat: "Annually"
          }
        ]
      },
      {
        ageInMonth: 6, // 6 months
        vaccines: [
          {
            name: "Brucellosis",
            purpose: "Infertility/abortion prevention",
            repeat: "Once in lifetime",
            forFemaleOnly: true
          }
        ]
      },
      {
        ageInMonth: 9, // 9 months
        vaccines: [
          {
            name: "Theileriosis",
            purpose: "Tick-borne disease",
            repeat: "Once",
            isOptional: true
          }
        ]
      }
  ],
  goat: [
      {
        ageInMonth: 0,
        vaccines: [
          {
            name: "Calfhood Vaccine",
            purpose: "Basic respiratory protection",
            repeat: "Once",
            isOptional: true
          }
        ]
      },
      {
        ageInMonth: 3, // 3 months
        vaccines: [
          {
            name: "FMD",
            fullName: "Foot & Mouth Disease", 
            purpose: "Viral disease prevention",
            repeat: "Every 6 months"
          }
        ]
      },
      {
        ageInMonth: 4, // 4 months
        vaccines: [
          {
            name: "HS",
            fullName: "Hemorrhagic Septicemia",
            purpose: "Bacterial infection (monsoon disease)",
            repeat: "Annually"
          },
          {
            name: "BQ",
            fullName: "Black Quarter",
            purpose: "Sudden muscle infection", 
            repeat: "Annually"
          }
        ]
      },
      {
        ageInMonth: 6, // 6 months
        vaccines: [
          {
            name: "Brucellosis",
            purpose: "Infertility/abortion prevention",
            repeat: "Once in lifetime",
            forFemaleOnly: true
          }
        ]
      },
      {
        ageInMonth: 9, // 9 months
        vaccines: [
          {
            name: "Theileriosis",
            purpose: "Tick-borne disease",
            repeat: "Once",
            isOptional: true
          }
        ]
      }
  ],
}

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
    const reader = new FileReader();
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2)
    if (data.image) {
      reader.onloadend = () => {
        const base64 = reader.result as string;
        // use context handler to save
        handleAddAnimal({
          ...data,
          id,
          image: base64,
        });
      };
      reader.readAsDataURL(data.image);
    } else {
       handleAddAnimal({
         ...data,
         id,
         image: '',
       });
    }
    localStorage.setItem(`${id}-vaccination`, JSON.stringify(vaccinationData[data.type as keyof typeof vaccinationData]));
    navigate('/protected/animals');
  };

const image = watch("image"); // This is now a real File object

const imagePreview = useMemo(() => {
  if (image instanceof File) {
    return URL.createObjectURL(image);
  }
  return null;
}, [image]);
  
  const selectedAnimalType = watch("type") || animalType;

  return (
    <div className="min-h-screen bg-background py-8 mt-32 mb-8 px-4">
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
          rules={{  }}
          render={({ field: { onChange, ref } }) => (
            <input
              id="animal-img"
              type="file"
              accept="image/*"
              className="mt-2 text-sm w-0 h-0"
              ref={ref}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  onChange(file); // 🔁 Save the actual File object in form state
                }
              }}
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

        <Button type="submit" className="w-full mb-10">
          Submit
        </Button>
      </form>
    </div>
  );
};
