interface StudentsInterface {
  students?: StudentsParametrInterface[]
}

interface StudentsParametrInterface {
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

export type { StudentsInterface };