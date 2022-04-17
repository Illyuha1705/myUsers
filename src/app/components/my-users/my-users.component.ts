import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { UsersService } from '../store/users/users-service/users.service';
import { UsersQuery } from '../store/users/users-query/users.query';
import { UsersStore } from '../store/users/users-store/users.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-users',
  templateUrl: 'my-users.component.html',
  styleUrls: ['my-users.component.scss'],
})
export class MyUsersComponent {
  usersList: UserInterface[] = [];
  selectedUser: UserInterface | null;
  usersListChanged$: Observable<UserInterface[]> = this.usersQuery.select('usersList');

  constructor(private usersService: UsersService, private usersQuery: UsersQuery, private usersStore: UsersStore) {
    this.usersListChanged$.subscribe({
      next: (users: UserInterface[]) => {
        this.usersList = users;
      },
    });
  }

  getUsers(): void {
    this.usersService.getUsers();
  }

  get isUsersListExist(): boolean {
    return !!this.usersList.length;
  }

  closeCard(): void {
    this.usersService.updateSelectedUser(null);
    this.setSelectedUser();
  }

  checkIsUserChosen(): boolean {
    return !!this.usersQuery.getValue().selectedUser;
  }

  private setSelectedUser(): void {
    this.selectedUser = this.usersStore.getValue().selectedUser;
  }
}
