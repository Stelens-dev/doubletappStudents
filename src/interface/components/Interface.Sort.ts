import { StudentsParametrI } from "../api/Interface.Students";
import { MainI } from "../pages/interface.Main";

interface SortI {
  data: MainI | null,
  students: StudentsParametrI[] | undefined,
}

export type { SortI };