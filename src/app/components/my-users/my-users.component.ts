import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { UsersStoreService } from '../../store/users/users-store.service';
import { UsersQuery } from '../../store/users/users.query';
import { UsersStore } from '../../store/users/users.store';
import { Observable, Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { UsersService } from '../../services/users-service/users.service';
import { catchError, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-my-users',
  templateUrl: 'my-users.component.html',
  styleUrls: ['my-users.component.scss'],
})
export class MyUsersComponent {
  usersList$: Observable<UserInterface[]> = this.usersQuery.select('usersList');
  selectedUser$: Observable<UserInterface> = this.usersQuery.select('selectedUser');

  constructor(
    private usersStoreService: UsersStoreService,
    private usersQuery: UsersQuery,
    private usersStore: UsersStore,
    private translate: TranslateService,
    private usersService: UsersService
  ) {
    translate.setDefaultLang('ua');
  }

  getUsers(): void {
    this.usersService.getUsers();
  }

  closeCard(): void {
    this.usersStoreService.updateSelectedUser({} as UserInterface);
  }

  chooseUser(userId: string): void {
    const user = this.usersQuery.getValue().usersList.find((user) => user.id === userId);
    if (user) this.usersStoreService.updateSelectedUser(user);
  }

  checkIsUserChosen(): boolean {
    return !!this.usersQuery.getValue().selectedUser.id;
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  get isUsersListExist(): boolean {
    return !!this.usersQuery.getValue().usersList.length;
  }
}
