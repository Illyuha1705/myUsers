import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatHeaderModule } from './components/chat-header/chat-header.module';
import { MyUsersModule } from './components/my-users/my-users.module';

@NgModule({
  imports: [CommonModule, ChatHeaderModule, MyUsersModule],
})
export class UsersModule {}
