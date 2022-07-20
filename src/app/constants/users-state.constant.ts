import { UsersState } from '../interfaces/user-state.interface';

export const UserState: UsersState = {
  usersList: [],
  selectedUser: {
    id: '',
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  },
};
