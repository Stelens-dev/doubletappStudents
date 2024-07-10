interface DropdownI {
  data: DropdownParametrsI[] | undefined,
  filterItem: (arr: DropdownParametrsI[] | null) => void
}

interface DropdownParametrsI {
  value: string,
  text: string,
  select: boolean | void,
  selectButton?: boolean
}

export type { DropdownI, DropdownParametrsI };