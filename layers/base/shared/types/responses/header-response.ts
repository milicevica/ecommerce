export type HeaderResponse = {
  name: string,
  logo: string,
  categories: Category[]
}

export type Category = {
  id: number,
  name: string
}
