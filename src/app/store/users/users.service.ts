import { Injectable, OnDestroy, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { UserInterface } from '../../interfaces/user.interface';
import { UsersStore } from './users.store';
import { UsersQuery } from './users.query';
import { API_USERS } from '../../constans/api.constans';

@Injectable({ providedIn: 'root' })
export class UsersService implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject();

  constructor(private selectedUsersStore: UsersStore, private usersQuery: UsersQuery, private httpClient: HttpClient) {}

  getUsers(): void {
    this.httpClient
      .get<UserInterface[]>(API_USERS)
      .pipe(catchError(this.handleError<UserInterface[]>('getUsers', [])), takeUntil(this.destroy$))
      .subscribe({
        next: (users: UserInterface[]) => {
          if (users) {
            this.setUsersList(users);
          }
        },
      });
  }

  updateSelectedUser(user: UserInterface): void {
    this.selectedUsersStore.update({ selectedUser: user });
  }

  private setUsersList(users: UserInterface[]): void {
    this.selectedUsersStore.update({ usersList: users });
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
