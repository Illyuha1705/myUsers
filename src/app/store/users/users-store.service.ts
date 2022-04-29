import { Injectable } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { UsersStore } from './users.store';

@Injectable({ providedIn: 'root' })
export class UsersStoreService {

  constructor(private selectedUsersStore: UsersStore) {}

  updateSelectedUser(user: UserInterface): void {
    this.selectedUsersStore.update({ selectedUser: user });
  }

  setUsersList(users: UserInterface[]): void {
    this.selectedUsersStore.update({ usersList: users });
  }
}
