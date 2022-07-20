import { Injectable } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { UsersStoreStore } from './users-store.store';
import { Observable } from 'rxjs';
import { UsersStoreQuery } from './users-store.query';
import { UsersState, UsersStateProps, UsersStatePropTypes } from '../../interfaces/user-state.interface';

@Injectable()
export class UsersStoreService {
  hasUsers$: Observable<UserInterface[]> = this.usersStoreQuery.select('usersList');
  hasSelectedUser$: Observable<UserInterface> = this.usersStoreQuery.select('selectedUser');

  constructor(private usersStore: UsersStoreStore, private usersStoreQuery: UsersStoreQuery) {}

  updateUserState(userStateProp: UsersStateProps, value: UsersStatePropTypes): void {
    this.usersStore.update({ [userStateProp]: value });
  }

  updateEntireUserState(newUserState: UsersState): void {
    this.usersStore.update(newUserState);
  }

  getUserById(userId: string): UserInterface | null {
    return this.usersStoreQuery.users.find((user) => user.id === userId) || null;
  }
}
