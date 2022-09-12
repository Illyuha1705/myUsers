import { NgModule } from '@angular/core';
import { MyUsersComponent } from './my-users.component';
import { AtomsModule, MoleculesModule } from '@my-users/generic-components';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { UsersService } from '../../../../services/users/users.service';
import { UsersStoreModule } from '../../../../store/users/users-store.module';
import { FormsModule } from '@angular/forms';
import { ChatHeaderModule } from '../chat-header/chat-header.module';
import { UserInfoTrayModule } from '../user-info-tray/user-info-tray.module';
import { MessageFieldModule } from '../message-field/message-field.module';
import { UserInfoCardModule } from '../user-info-card/user-info-card.module';

@NgModule({
  declarations: [MyUsersComponent],
  imports: [
    AtomsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MoleculesModule,
    UsersStoreModule,
    TranslateModule,
    FormsModule,
    ChatHeaderModule,
    UserInfoTrayModule,
    MessageFieldModule,
    UserInfoCardModule,
  ],
  providers: [UsersService],
  exports: [MyUsersComponent],
})
export class MyUsersModule {}
