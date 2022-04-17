import { Query } from '@datorama/akita';
import { UsersState, UsersStore } from '../users-store/users.store';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersQuery extends Query<UsersState> {
  constructor(protected store: UsersStore) {
    super(store);
  }
}
