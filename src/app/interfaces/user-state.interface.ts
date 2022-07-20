import { UserInterface } from './user.interface';

export interface UsersState {
  usersList: UserInterface[];
  selectedUser: UserInterface;
}

export enum UsersStateProps {
  usersList = 'usersList',
  selectedUser = 'selectedUser',
}

export type UsersStatePropTypes = UserInterface | UserInterface[];
