import { NgModule } from '@angular/core';
import { UsersService } from './users/users.service';
import { UserInfoService } from './user-info/user-info.service';

@NgModule({
  providers: [UsersService, UserInfoService],
})
export class ServicesModule {}
