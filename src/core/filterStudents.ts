import { YearsOld } from "./YearsOld";
import { StudentsParametrI } from "../interface/api/Interface.Students";
import { DropdownParametrsI } from "../interface/components/Interface.Dropdown";

export const filterStudents = (students: StudentsParametrI[], sortStudent: string | null, colorOptions: DropdownParametrsI[] | undefined ): StudentsParametrI[] | undefined => {
  const color: string | undefined = colorOptions?.map((e) => e.value).find((e) => e === sortStudent);
  // const copyItems: StudentsParametrI[] = students;

  if (sortStudent === "name_senior") {
    return students!.sort((a, b) => a["name"] > b["name"] ? 1 : -1); // Сортировака по имени От A-Z (name_senior)
  }
  if (sortStudent === "name_junior") {
    return students!.sort((a, b) => a["name"] < b["name"] ? 1 : -1); // Сортировка по имени от Z-A (name_junior)
  }
  if (sortStudent === "younger_first") {
    return students!.sort((a, b) => YearsOld(a.birthday)! - YearsOld(b.birthday)!); // Сортировка по возрасту cначала моложе (younger_first)
  }
  if (sortStudent === "older_first") {
    return students!.sort((a, b) => YearsOld(b.birthday)! - YearsOld(a.birthday)!); // Сортировка по возрасту cначала старше (older_first)
  }
  if (sortStudent === "high_rating") {
    return students!.sort((a, b) => b.rating - a.rating); // Сортировка по рейтенгу cначала высокий (high_rating)
  }
  if (sortStudent === "low_rating") {
    return students!.sort((a, b) => a.rating - b.rating); // Сортировка по рейтенгу cначала низкий (low_rating)
  }
  if (color !== undefined && sortStudent === color) {
    return students!.filter((e) => e.color === sortStudent); // Сортировка по любимому цвету
  }
  if (sortStudent === null || color === undefined) {
    // return copyItems;
  }
};