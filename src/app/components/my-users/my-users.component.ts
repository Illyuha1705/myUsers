import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { UsersService } from '../store/users/users-service/users.service';
import { UsersQuery } from '../store/users/users-query/users.query';
import { UsersStore } from '../store/users/users-store/users.store';

@Component({
  selector: 'app-my-users',
  templateUrl: 'my-users.component.html',
  styleUrls: ['my-users.component.scss'],
})
export class MyUsersComponent implements OnInit {
  usersList: UserInterface[] = [];
  selectedUser: UserInterface | null;

  constructor(
    private usersService: UsersService,
    private usersQuery: UsersQuery,
    private usersStore: UsersStore,
  ) {}

  ngOnInit(): void {
    this.checkIsUsersListChanged();
  }

  public getUsers(): void {
    this.usersService.getUsers();
  }

  closeCard(): void {
    this.usersService.updateSelectedUser(null);
    this.setSelectedUser();
  }

  checkIsUserChosen(): boolean {
    return !!this.usersQuery.getValue().selectedUser;
  }

  private setUsersList(): void {
    this.usersList = this.usersQuery.getValue().usersList;
  }

    private checkIsUsersListChanged(): void {
    this.usersService.usersListWasUpdated$.subscribe({
      next: () => {
        this.setUsersList();
      },
    });
  }

  private setSelectedUser(): void {
    this.selectedUser = this.usersStore.getValue().selectedUser;
  }
}
