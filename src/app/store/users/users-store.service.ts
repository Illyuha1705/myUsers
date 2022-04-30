import { Injectable } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { UsersStoreStore } from './users-store.store';
import {Observable} from "rxjs";
import {UsersStoreQuery} from "./users-store.query";

@Injectable()
export class UsersStoreService {

  constructor(private selectedUsersStore: UsersStoreStore, private usersStoreQuery: UsersStoreQuery) {}

  updateSelectedUser(user: UserInterface): void {
    this.selectedUsersStore.update({ selectedUser: user });
  }

  setUsersList(users: UserInterface[]): void {
    this.selectedUsersStore.update({ usersList: users });
  }

  getUserById(userId: string): UserInterface | null {
    return this.usersStoreQuery.users.find(user => user.id === userId) || null;
  }

  hasUsers$(): Observable<UserInterface[]> {
    return this.usersStoreQuery.select('usersList');
  }

  hasSelectedUser$(): Observable<UserInterface> {
    return this.usersStoreQuery.select('selectedUser');
  }
}
