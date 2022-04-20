import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { UsersService } from '../../store/users/users.service';
import { UsersQuery } from '../../store/users/users.query';
import { UsersStore } from '../../store/users/users.store';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-users',
  templateUrl: 'my-users.component.html',
  styleUrls: ['my-users.component.scss'],
})
export class MyUsersComponent implements OnInit {
  usersList: UserInterface[] = [];
  selectedUser: UserInterface | null;
  usersListChanged$: Observable<UserInterface[]> = this.usersQuery.select('usersList');
  userWasSelected$: Observable<UserInterface> = this.usersQuery.select('selectedUser');

  constructor(
    private usersService: UsersService,
    private usersQuery: UsersQuery,
    private usersStore: UsersStore,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('ua');
  }

  ngOnInit(): void {
    this.checkUsersListChanged();
    this.checkUserWasSelected();
  }

  getUsers(): void {
    this.usersService.getUsers();
  }

  closeCard(): void {
    this.usersService.updateSelectedUser({} as UserInterface);
  }

  chooseUser(userId: string): void {
    const user = this.usersList.find((user) => user.id === userId);
    if (user) this.usersService.updateSelectedUser(user);
  }

  checkIsUserChosen(): boolean {
    return !!this.usersQuery.getValue().selectedUser.id;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  private checkUsersListChanged(): void {
    this.usersListChanged$.subscribe({
      next: (users: UserInterface[]) => {
        this.usersList = users;
      },
    });
  }

  private checkUserWasSelected(): void {
    this.userWasSelected$.subscribe({
      next: (user: UserInterface) => {
        this.selectedUser = user;
      },
    });
  }

  get isUsersListExist(): boolean {
    return !!this.usersList.length;
  }
}
