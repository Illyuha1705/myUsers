import { NgModule } from '@angular/core';
import { UsersQuery } from './users.query';
import { UsersStore } from './users.store';
import { UsersStoreService } from './users-store.service';

@NgModule({
  providers: [UsersQuery, UsersStore, UsersStoreService],
})
export class UsersStoreModule {}
