import { Store, StoreConfig } from '@datorama/akita';
import { UserInterface } from '../../../../interfaces/user.interface';
import {Injectable} from "@angular/core";

export interface UsersState {
  usersList: UserInterface[];
  selectedUser: UserInterface | null;
}

export function createInitialState(): UsersState {
  return {
    usersList: [],
    selectedUser: null
  };
}

@StoreConfig({ name: 'UsersState' })
export class UsersStore extends Store<UsersState> {
  constructor() {
    super(createInitialState());
  }
}
