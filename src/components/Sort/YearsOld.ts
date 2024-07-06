export const YearsOld = (str_birthday: string | undefined): number | null => {
  if (str_birthday !== undefined) {
    const data: number[] = str_birthday.split("-").map(Number);
    const [year, mounth, date] = data!;
    let age: number; // Age

    const now = new Date(); // Date now
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Date now, doen't use time
    const birthday = new Date(year!, mounth!, date!); // Birthday
    const birthday_now = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate()); // Birthday this year

    // Age = current year - year of birth
    age = today.getFullYear() - birthday.getFullYear();
    // If you still have a birthday this year, then subtract one year from age
    if (today < birthday_now) {
      age = age - 1;
    }
    return age;
  } else {
    return null;
  }
};