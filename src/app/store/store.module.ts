import { NgModule } from '@angular/core';
import { UsersStoreModule } from './users/users-store.module';
import { ChatHeaderOptionsModule } from './chat-header-options/chat-header-options.module';

@NgModule({
  imports: [UsersStoreModule, ChatHeaderOptionsModule],
})
export class StoreModule {}
