import { Injectable } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { API_USERS } from '../../constants/api.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>(API_USERS);
  }
}
