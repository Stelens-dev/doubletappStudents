interface StudentsI {
  students?: StudentsParametrI[]
}

interface PropsI {
    update: (id: number) => void;
    arrId: number
}

interface StudentsParametrI extends PropsI {
  id: number,
  email: string,
  name: string,
  sex: string,
  specialty: string,
  group: string,
  color: string,
  rating: number,
  birthday: string,
  avatar: string
}

interface HandleButtonClickI {
  id: number
}

export type { StudentsI, StudentsParametrI, PropsI, HandleButtonClickI };