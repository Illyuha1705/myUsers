import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatHeaderModule } from './components/chat-header/chat-header.module';
import { MyUsersModule } from './components/my-users/my-users.module';
import { ChatHeaderOptionModule } from './components/chat-header-option/chat-header-option.module';
import { ServicesModule } from '../../services/services.module';
import { UserInfoTrayModule } from './components/user-info-tray/user-info-tray.module';

@NgModule({
  imports: [CommonModule, ChatHeaderModule, MyUsersModule, ChatHeaderOptionModule, ServicesModule, UserInfoTrayModule],
})
export class UsersModule {}
