import { Store, StoreConfig } from '@datorama/akita';
import { UserInterface } from '../../interfaces/user.interface';
import { Injectable } from '@angular/core';

export interface UsersState {
  usersList: UserInterface[];
  selectedUser: UserInterface;
}

export function createInitialState(): UsersState {
  return {
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
}

@Injectable()
@StoreConfig({ name: 'UsersState' })
export class UsersStoreStore extends Store<UsersState> {
  constructor() {
    super(createInitialState());
  }
}
