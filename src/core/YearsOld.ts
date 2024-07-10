// Считаем возраст студента
export const YearsOld = (strBirthday: string | undefined): number | null => {
  if (strBirthday === undefined) {
    return null;
  }

  const [year, month, date] = strBirthday.split("-").map(Number);
  const today = new Date();
  const birthday = new Date(today.getFullYear(), month! - 1, date!);

  return today.getFullYear() - year - (today < birthday ? 1 : 0);
};
