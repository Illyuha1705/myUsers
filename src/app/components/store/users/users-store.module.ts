import { NgModule } from '@angular/core';
import { UsersStore } from './users-store/users.store';
import { UsersService } from './users-service/users.service';
import { UsersQuery } from './users-query/users.query';

@NgModule({
  providers: [UsersStore, UsersQuery, UsersService],
})
export class UsersStoreModule {}
