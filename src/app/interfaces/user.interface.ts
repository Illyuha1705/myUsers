export interface UserInterface {
  userShotInfoInterface: UserShotInfoInterface,
  username: string;
  phone: string;
  website: string;
}

export interface UserShotInfoInterface {
  id: string;
  name: string;
  email: string;
}
