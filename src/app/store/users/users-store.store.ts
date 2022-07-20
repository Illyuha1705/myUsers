import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { UsersState } from '../../interfaces/user-state.interface';
import { UserState } from '../../constants/users-state.constant';

export function createInitialState(): UsersState {
  return UserState;
}

@Injectable()
@StoreConfig({ name: 'UsersState' })
export class UsersStoreStore extends Store<UsersState> {
  constructor() {
    super(createInitialState());
  }
}
