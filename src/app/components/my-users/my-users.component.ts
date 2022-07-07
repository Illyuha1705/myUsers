import { Component, OnDestroy } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { UsersStoreService } from '../../store/users/users-store.service';
import { UsersStoreQuery } from '../../store/users/users-store.query';
import { Observable, Subject } from 'rxjs';
import { UsersService } from '../../services/users-service/users.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-my-users',
  templateUrl: 'my-users.component.html',
  styleUrls: ['my-users.component.scss'],
})
export class MyUsersComponent implements OnDestroy {
  usersList$: Observable<UserInterface[]> = this.usersStoreService.hasUsers$;
  selectedUser$: Observable<UserInterface> = this.usersStoreService.hasSelectedUser$;
  private destroy$: Subject<void> = new Subject();

  constructor(
    private usersStoreService: UsersStoreService,
    private usersQuery: UsersStoreQuery,
    private usersService: UsersService
  ) {}

  getUsers(): void {
    this.usersService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (users: UserInterface[]) => {
          this.usersStoreService.setUsersList(users);
        },
        error: () => {
          alert('There is no user');
        },
      });
  }

  closeCard(): void {
    this.usersStoreService.resetSelectedUser();
  }

  chooseUser(userId: string): void {
    const user: UserInterface | null = this.usersStoreService.getUserById(userId);
    if (user) this.usersStoreService.setSelectedUser(user);
  }

  checkIsUserChosen(): boolean {
    return !!this.usersQuery.selectedUser.id;
  }

  get isUsersListExist(): boolean | null {
    return this.usersQuery.usersLength ? true : null;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
