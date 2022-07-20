import { Query } from '@datorama/akita';
import { UsersStoreStore } from './users-store.store';
import { Injectable } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { UsersState } from '../../interfaces/user-state.interface';

@Injectable()
export class UsersStoreQuery extends Query<UsersState> {
  constructor(protected usersStore: UsersStoreStore) {
    super(usersStore);
  }

  get users(): UserInterface[] {
    return this.getValue().usersList;
  }

  get usersLength(): number {
    return this.users.length;
  }

  get selectedUser(): UserInterface {
    return this.getValue().selectedUser;
  }
}
