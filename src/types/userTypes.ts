export type IUser = {
  id: number
  email: string
  roles: IUserRoles[]
}

export type IUserRoles = {
  id: number
  name: string
  description: string
}
