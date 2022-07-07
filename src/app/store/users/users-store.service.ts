import { Injectable } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { UsersStoreStore } from './users-store.store';
import { Observable } from 'rxjs';
import { UsersStoreQuery } from './users-store.query';

@Injectable()
export class UsersStoreService {
  hasUsers$: Observable<UserInterface[]> = this.usersStoreQuery.select('usersList');
  hasSelectedUser$: Observable<UserInterface> = this.usersStoreQuery.select('selectedUser');

  constructor(private selectedUsersStore: UsersStoreStore, private usersStoreQuery: UsersStoreQuery) {}

  setSelectedUser(user: UserInterface): void {
    this.selectedUsersStore.update({ selectedUser: user });
  }

  setUsersList(users: UserInterface[]): void {
    this.selectedUsersStore.update({ usersList: users });
  }

  resetSelectedUser(): void {
    this.selectedUsersStore.update({ selectedUser: {} as UserInterface });
  }

  getUserById(userId: string): UserInterface | null {
    return this.usersStoreQuery.users.find((user) => user.id === userId) || null;
  }
}
