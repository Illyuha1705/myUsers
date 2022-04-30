import { NgModule } from '@angular/core';
import { UsersStoreQuery } from './users-store.query';
import { UsersStoreStore } from './users-store.store';
import { UsersStoreService } from './users-store.service';

@NgModule({
  providers: [UsersStoreQuery, UsersStoreStore, UsersStoreService],
})
export class UsersStoreModule {}
