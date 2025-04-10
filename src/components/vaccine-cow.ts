interface Vaccine {
  name: string;
  fullName?: string;
  purpose: string;
  repeat: string;
  isOptional?: boolean;
  forFemaleOnly?: boolean;
}

interface VaccineSchedule {
  ageInMonth: number;
  vaccines: Vaccine[];
}

export const getVaccineSchedule = (dateOfBirth: Date): VaccineSchedule[] => {
  const schedule: VaccineSchedule[] = [
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
  ];

  // Add annual vaccines based on DOB
  const today = new Date();
  const ageInMonths = (today.getTime() - dateOfBirth.getTime()) / (1000 * 60 * 60 * 24 * 30);
  
  if (ageInMonths >= 12) {
    schedule.push({
      ageInMonth: 12,
      vaccines: [
        {
          name: "FMD, HS, BQ",
          purpose: "Disease immunity",
          repeat: "Repeated every year"
        }
      ]
    });
  }

  return schedule;
};
