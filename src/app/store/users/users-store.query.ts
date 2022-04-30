import { Query } from '@datorama/akita';
import { UsersState, UsersStoreStore } from './users-store.store';
import { Injectable } from '@angular/core';
import {UserInterface} from "../../interfaces/user.interface";

@Injectable()
export class UsersStoreQuery extends Query<UsersState> {
  constructor(protected store: UsersStoreStore) {
    super(store);
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
