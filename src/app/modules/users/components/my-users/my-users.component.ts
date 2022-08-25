import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserInterface } from '../../../../interfaces/user.interface';
import { UsersStoreService } from '../../../../store/users/users-store.service';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { UsersService } from '../../../../services/users/users.service';
import { takeUntil } from 'rxjs/operators';
import { UsersStoreQuery } from '../../../../store/users/users-store.query';
import { UsersStateProps } from '../../../../interfaces/user-state.interface';
import { FormatTextService } from '../../../../services/format-text/format-text.service';
import { UserInfoService } from '../../../../services/user-info/user-info.service';
import { ChatHeaderOptionStore } from '../../../../store/chat-header-options/chat-header-options.store';

@Component({
  selector: 'app-my-users',
  templateUrl: 'my-users.component.html',
  styleUrls: ['my-users.component.scss'],
})
export class MyUsersComponent implements OnInit, OnDestroy {
  usersList$: Observable<UserInterface[]> = this.usersStoreService.hasUsers$;
  selectedUser$: Observable<UserInterface> = this.usersStoreService.hasSelectedUser$;

  private destroy$: Subject<void> = new Subject();

  searchTerm: string;
  isUserInfoOpen = false;
  isUserInfoTray = false;

  constructor(
    private usersStoreService: UsersStoreService,
    private usersStoreQuery: UsersStoreQuery,
    private usersService: UsersService,
    private formatTextService: FormatTextService,
    private userInfoService: UserInfoService,
    private chatHeaderOptionStore: ChatHeaderOptionStore
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.toggleUserInfo();
    this.toggleUserInfoTray();
  }

  getUsers(): void {
    this.usersService
      .getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (users: UserInterface[]) => {
          this.usersStoreService.updateEntireUserState({ usersList: users, selectedUser: users[0] });
        },
        error: () => alert('There is no user'),
      });
  }

  chooseUser(userId: string): void {
    const user: UserInterface | null = this.usersStoreService.getUserById(userId);
    if (user) this.usersStoreService.updateUserState(UsersStateProps.selectedUser, user);
  }

  searchUser(searchValue: string): void {
    if (searchValue) {
      this.formatTextService.toLowerCaseString(searchValue);
      this.retrieveUserList();
      combineLatest([this.usersList$, of(searchValue)]).subscribe(([userList, searchValue]) => {
        this.usersList$ = of(
          userList.filter((user: UserInterface) =>
            this.formatTextService.toLowerCaseString(user.name).includes(searchValue)
          )
        );
      });
    } else {
      this.retrieveUserList();
    }
  }

  retrieveUserList(): Observable<UserInterface[]> {
    return (this.usersList$ = this.usersStoreService.hasUsers$);
  }

  isActiveCurrentItem(id: string): boolean {
    return this.usersStoreQuery.selectedUser.id === id;
  }

  toggleUserInfo(): void {
    this.userInfoService.showUserInfoSection$.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => (this.isUserInfoOpen = !this.isUserInfoOpen),
    });
  }

  toggleUserInfoTray(): void {
    this.userInfoService.showUserInfoTray$.pipe(takeUntil(this.destroy$)).subscribe({
      next: () => (this.isUserInfoTray = !this.isUserInfoTray),
    });
  }

  closeUserInfo(): void {
    this.isUserInfoOpen = false;
  }

  closeUserInfoTray(): void {
    this.isUserInfoTray = false;
    this.chatHeaderOptionStore.update(1, { isCustomOptionActive: false });
  }

  get isUserSelected(): boolean {
    return !!this.usersStoreQuery.selectedUser.id;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
