import { Injectable } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { API_USERS } from '../../constans/api.constans';
import { takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { UsersStoreService } from '../../store/users/users-store.service';

@Injectable()
export class UsersService {
  private destroy$: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient, private usersStoreService: UsersStoreService) {}

  getUsers(): void {
    this.httpClient
      .get<UserInterface[]>(API_USERS)
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

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
