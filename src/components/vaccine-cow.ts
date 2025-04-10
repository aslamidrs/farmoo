interface Vaccine {
  name: string;
  fullName?: string;
  purpose: string;
  repeat: string;
  isOptional?: boolean;
  forFemaleOnly?: boolean;
  isCompleted?: boolean;
}

interface VaccineSchedule {
  ageInMonth: number;
  vaccines: Vaccine[];
}

export const getVaccineSchedule = (dateOfBirth: Date, id: string): VaccineSchedule[] => {
  const schedule = JSON.parse(localStorage.getItem(`${id}-vaccination`) || '[]');

  // Add annual vaccines based on DOB
  const today = new Date();

  const ageInMonths = (today?.valueOf() - dateOfBirth.valueOf()) / (1000 * 60 * 60 * 24 * 30);
  
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
