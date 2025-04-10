import dayjs from "dayjs";

export const getYearDifference = (dateString: string): number => {
  const now = dayjs();
  const pastDate = dayjs(dateString);
  return now.diff(pastDate, "year");
};
